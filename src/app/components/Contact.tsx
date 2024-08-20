'use client'

import { EnvelopeIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const ContactModal: React.FC<{ isOpen: boolean; setIsModalOpen: any }> = ({ isOpen, setIsModalOpen }) => {
  const [isSending, setIsSending] = useState<boolean>(false)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSending(true)
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string

    try {
      const res = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('Email sent successfully')
        setIsModalOpen(false)
      } else {
        toast.error(`Failed to send email: ${data.message}`)
      }
    } catch (error) {
      console.error(error)
      toast.error('Failed to send email. Please try again.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <Toaster
        toastOptions={{
          className: 'p-4 z-100',
          position: 'bottom-right',
          success: {
            style: {
              background: 'rgba(var(--success))',
              color: 'rgba(var(--success-content))',
            },
          },
          error: {
            style: {
              background: 'rgba(var(--error))',
              color: 'rgba(var(--error-content))',
            },
          },
        }}
      />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500/50 bg-opacity-50 shadow-xl">
          <div className="bg-base-100 p-4 w-full max-w-2xl rounded-lg py-6 px-6 m-6">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-lg font-semibold">Send Email</h3>
              <button onClick={() => setIsModalOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={sendEmail} className="mt-4 flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                disabled={isSending}
                required
                className={`px-2 py-1 border border-base-content/25 bg-neutral/5 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                disabled={isSending}
                required
                className={`px-2 py-1 border border-base-content/25 bg-neutral/5 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
              <input
                type="subject"
                name="subject"
                placeholder="Subject"
                disabled={isSending}
                required
                className={`px-2 py-1 border border-base-content/25 bg-neutral/5 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
              <textarea
                name="message"
                placeholder="Message"
                disabled={isSending}
                required
                rows={10}
                className={`px-2 py-1 border border-base-content/25 bg-neutral/5 ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              />
              <button
                disabled={isSending}
                type="submit"
                className={`flex justify-center items-center px-2 py-1 bg-primary border border-base-content/25 text-primary-content font-semibold ${
                  isSending ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <span>{isSending ? 'Sending...' : 'Send'}</span>
                <PaperAirplaneIcon
                  className={`ml-2 h-5 w-5 transition-opacity ${isSending ? 'opacity-0' : 'opacity-100'}`}
                />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <>
      <div className="divide-base-content overflow-hidden rounded-lg bg-base-200 border border-base-content/25 max-w-96">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex gap-2 mb-3 items-center">
            <EnvelopeIcon className="h-6 w-6" />
            <h3 className="text-md font-semibold leading-6">Get in touch</h3>
          </div>
          <span className="mt-1 text-sm text-base-content">
            Hey, thanks for visiting 😊 Send over a message and let me know where you&apos;re visiting from!
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 px-2 py-1 w-full flex justify-center items-center bg-primary border border-base-content/25 text-primary-content font-semibold"
          >
            <span>Send Email</span>
            <PaperAirplaneIcon className="h-5 w-5 ml-2" />
          </button>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  )
}

export default Contact
