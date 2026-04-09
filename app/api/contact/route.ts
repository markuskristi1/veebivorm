import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, service, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Puuduvad kohustuslikud väljad." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Veebivorm <onboarding@resend.dev>",
      to: ["kristimarkus@gmail.com"],
      subject: `Uus päring Veebivormist – ${name}`,
      replyTo: email,
      html: `
        <h2>Uus päring Veebivormi lehelt</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Ettevõte:</strong> ${company || "-"}</p>
        <p><strong>Teenuse huvi:</strong> ${service || "-"}</p>
        <p><strong>Sõnum:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json(
      { error: "Midagi läks valesti." },
      { status: 500 }
    );
  }
}