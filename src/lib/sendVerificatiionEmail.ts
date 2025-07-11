import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/verify?token=${token}`;

  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>', // adresse validée dans Resend
    to: [email],
    subject: 'Verification de votre adresse email',
    html: `
      <p>Bienvenue !</p>
      <p>Veuillez vérifier votre compte en cliquant sur le lien ci-dessous :</p>
      <a href="${verificationUrl}">${verificationUrl}</a>
    `,
  });
}
