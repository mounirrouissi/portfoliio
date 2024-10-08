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

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data

    const emailResult = await resend.emails.send({
      from: 'rouissimounir@outlook.com',
      to: [email],
      cc: ['rouissimounir@outlook.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!emailResult || emailResult.error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error: any) {
    console.error('Error sending email:', error)
    return { error: error.message || 'An error occurred while sending the email' }
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const { email } = result.data

    const contactResult = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string
    })

    if (!contactResult || contactResult.error) {
      throw new Error('Failed to subscribe')
    }

    // Send a welcome email
    const WelcomeEmail = ({ email }: { email: string }) => (
      `<div>
        <h1>Welcome to Our Newsletter!</h1>
        <p>Thank you for subscribing, ${email}!</p>
        <p>We're excited to have you on board and look forward to sharing our latest updates with you.</p>
      </div>`
    )

    const welcomeEmailResult = await resend.emails.send({
      from: 'rouissimounir@outlook.com',
      to: [email],
      subject: 'Welcome to Our Newsletter!',
      react: WelcomeEmail({ email })
    })

    if (!welcomeEmailResult || welcomeEmailResult.error) {
      console.error('Failed to send welcome email:', welcomeEmailResult?.error)
    }

    return { success: true }
  } catch (error: any) {
    console.error('Error subscribing:', error)
    return { error: error.message || 'An error occurred while subscribing' }
  }
}
