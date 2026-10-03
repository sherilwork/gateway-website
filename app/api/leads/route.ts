import { NextResponse } from "next/server";
import {
  hasErrors,
  normalizeLead,
  validateLead,
  type LeadPayload,
} from "@/lib/validation/lead";

export const runtime = "nodejs";

type LeadRequest = Partial<LeadPayload> & { website?: string };

/**
 * Lead capture endpoint.
 *
 * Input is validated server-side, then handed to a delivery hook. No secrets
 * are read on the client and nothing is trusted from the browser.
 *
 * DELIVERY PLACEHOLDER: set LEAD_WEBHOOK_URL to forward leads to your CRM,
 * email service or automation platform. Until that is configured the request
 * is validated and acknowledged, and the lead is logged server-side so no
 * submission is silently lost.
 */
export async function POST(request: Request) {
  let body: LeadRequest;

  try {
    body = (await request.json()) as LeadRequest;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot: a filled hidden field means a bot submitted the form.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const payload = normalizeLead(body);
  const errors = validateLead(payload);

  if (hasErrors(errors)) {
    return NextResponse.json(
      { ok: false, message: "Please correct the highlighted fields.", errors },
      { status: 422 },
    );
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
      });

      if (!response.ok) {
        return NextResponse.json(
          {
            ok: false,
            message:
              "We could not record your request right now. Please try again or email us directly.",
          },
          { status: 502 },
        );
      }
    } catch {
      return NextResponse.json(
        {
          ok: false,
          message:
            "We could not record your request right now. Please try again or email us directly.",
        },
        { status: 502 },
      );
    }
  } else {
    // No delivery target configured yet — record the validated lead so it is
    // not lost, without exposing any credentials or PII beyond the log.
    console.info(
      "[leads] Received validated lead (delivery not configured):",
      JSON.stringify({
        intent: payload.intent,
        restaurantName: payload.restaurantName,
        city: payload.city,
        outlets: payload.outlets,
        orderingMethod: payload.orderingMethod,
      }),
    );
  }

  return NextResponse.json({
    ok: true,
    message:
      "Thanks — your request has been received. Our team will get back to you shortly.",
  });
}