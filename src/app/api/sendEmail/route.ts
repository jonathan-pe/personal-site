import EmailTemplate from '@/components/EmailTemplate'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  if (!process.env.EMAIL) {
    return Response.json({ error: 'email_not_set', message: 'EMAIL environment variable not set' }, { status: 500 })
  }

  try {
    const body = await request.json()

    const { data, error } = await resend.emails.send({
      from: `${body.name} <contact@jonathanpe.com>`,
      to: [process.env.EMAIL],
      subject: body.subject,
      react: EmailTemplate({ email: body.email, message: body.message }),
    })

    if (error) {
      return Response.json(error, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
