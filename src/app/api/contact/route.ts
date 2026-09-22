import { Resend } from "resend";
import { profile } from "@/lib/data";

// Route Handlers aren't cached for POST, so nothing to opt out of here.

const MAX = { name: 100, email: 200, message: 5000 };

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Expected a JSON body." }, { status: 400 });
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>;
  const clean = {
    name: String(name ?? "").trim(),
    email: String(email ?? "").trim(),
    message: String(message ?? "").trim(),
  };

  if (!clean.name || !clean.email || !clean.message) {
    return Response.json({ error: "Please fill in every field." }, { status: 400 });
  }
  if (!isEmail(clean.email)) {
    return Response.json({ error: "That email address doesn't look right." }, { status: 400 });
  }
  if (
    clean.name.length > MAX.name ||
    clean.email.length > MAX.email ||
    clean.message.length > MAX.message
  ) {
    return Response.json({ error: "That message is too long to send." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send the contact email.");
    return Response.json(
      { error: "Email isn't configured yet. Please reach out by email instead." },
      { status: 500 },
    );
  }

  // Resend's shared sender works with no domain setup; swap in your own
  // domain (e.g. "Portfolio <hello@yourdomain.com>") once it's verified.
  const from = process.env.CONTACT_FROM ?? "Portfolio <onboarding@resend.dev>";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [profile.email],
      replyTo: clean.email,
      subject: `Portfolio enquiry from ${clean.name}`,
      text: `${clean.message}\n\n— ${clean.name} (${clean.email})`,
    });

    if (error) {
      console.error("Resend rejected the contact email:", error);
      return Response.json(
        { error: "Couldn't send that right now. Please try again in a moment." },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Failed to send the contact email:", err);
    return Response.json(
      { error: "Couldn't send that right now. Please try again in a moment." },
      { status: 500 },
    );
  }
}
