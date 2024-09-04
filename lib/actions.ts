'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data
    const { data, error } = await resend.emails.send({
      from: 'rouissimounir@outlook.com',
      to: [email],
      cc: ['rouissimounir@outlook.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // Send a welcome email
    const WelcomeEmail = ({ email }: { email: string }) => {
      return `
        <div>
          <h1>Welcome to Our Newsletter!</h1>
          <p>Thank you for subscribing, ${email}!</p>
          <p>We're excited to have you on board and look forward to sharing our latest updates with you.</p>
        </div>
      `;
    }

    const { data: welcomeEmailData, error: welcomeEmailError } = await resend.emails.send({
      from: 'rouissimounir@outlook.com',
      to: [email],
      subject: 'Welcome to Our Newsletter!',
      react: WelcomeEmail({ email })
    })

    if (!welcomeEmailData || welcomeEmailError) {
      console.error('Failed to send welcome email', welcomeEmailError)
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
