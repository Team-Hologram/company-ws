import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function validatePayload(payload: ContactPayload) {
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const company = payload.company?.trim() ?? "";
  const budget = payload.budget?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Please provide a valid email address." };
  }

  return {
    data: {
      name,
      email,
      company,
      budget,
      message,
    },
  };
}

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Contact Form <onboarding@resend.dev>";

  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validated = validatePayload(payload);

  if ("error" in validated) {
    return NextResponse.json({ error: validated.error }, { status: 400 });
  }

  const { name, email, company, budget, message } = validated.data;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = escapeHtml(company || "N/A");
  const safeBudget = escapeHtml(budget || "N/A");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const text = [
    "New contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "N/A"}`,
    `Budget: ${budget || "N/A"}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <h2>New contact form submission</h2>
    <p><strong>Name:</strong> ${safeName}</p>
    <p><strong>Email:</strong> ${safeEmail}</p>
    <p><strong>Company:</strong> ${safeCompany}</p>
    <p><strong>Budget:</strong> ${safeBudget}</p>
    <p><strong>Message:</strong></p>
    <p>${safeMessage}</p>
  `;

  const resendRes = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: ["hello@wideech.com"],
      reply_to: email,
      subject: `New inquiry from ${name}`,
      text,
      html,
    }),
  });

  if (!resendRes.ok) {
    const errorBody = await resendRes.text();
    console.error("Resend API error:", errorBody);

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
