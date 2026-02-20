import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const user = process.env.GMAIL_USER || 'mdmamun.iubat.m@gmail.com';
    const pass = process.env.GMAIL_PASS || 'ospq txef prsu bffe';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: user,
      subject: `Portfolio contact from ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${(message || '').replace(/\n/g, '<br/>')}</p><p>From: ${name} &lt;${email}&gt;</p>`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('send-email error', err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
