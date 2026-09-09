import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClasses =
  'w-full rounded-xl border border-navy/15 px-4 py-3 text-navy placeholder:text-navy/30 focus:border-gold focus:outline-none'

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      ref={formRef}
      id="contact-form"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
          Name
        </label>
        <input id="name" name="name" type="text" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
          Phone
        </label>
        <input id="phone" name="phone" type="tel" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          Message
        </label>
        <textarea id="message" name="message" rows={4} required className={inputClasses} />
      </div>

      <Button type="submit" variant="primary" disabled={status === 'sending'} fullWidth>
        {status === 'sending' ? 'Sending…' : 'Submit'}
      </Button>

      {status === 'success' && (
        <p className="text-sm font-medium text-navy">
          Thanks for reaching out — we&rsquo;ll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm font-medium text-red-600">
          Something went wrong sending your message. Please try again or reach
          us directly using the details below.
        </p>
      )}
    </form>
  )
}
