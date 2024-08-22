'use client'

import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'

const ContactDialog: React.FC = () => {
  const [isSending, setIsSending] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { toast } = useToast()

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
        toast({
          variant: 'success',
          title: 'Email sent successfully 🚀',
        })
        setIsOpen(false)
      } else {
        toast({
          variant: 'destructive',
          title: "Uh oh! We couldn't send your email. Please try again.",
          description: data.message,
        })
      }
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: "Uh oh! We couldn't send your email. Please try again",
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <Dialog modal={true} open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild onClick={() => setIsOpen(true)}>
        <Button variant="default" size="sm" className="w-full mt-4">
          <span>Send Email</span>
          <PaperAirplaneIcon className="h-5 w-5 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Send Email</DialogTitle>
        </DialogHeader>
        <form onSubmit={sendEmail} className="flex flex-col gap-4">
          <Input type="text" name="name" placeholder="Name" disabled={isSending} required />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            disabled={isSending}
            required
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$"
          />
          <Input type="subject" name="subject" placeholder="Subject" disabled={isSending} required />
          <Textarea name="message" placeholder="Message" disabled={isSending} required rows={10} />

          <DialogFooter>
            <Button type="submit" disabled={isSending}>
              <span>{isSending ? 'Sending' : 'Send'}</span>
              {isSending ? (
                <Loader2 className="ml-2 h-4 w-4 animate-spin" />
              ) : (
                <PaperAirplaneIcon className="ml-2 h-5 w-5 transition-opacity" />
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

const Contact: React.FC = () => {
  return (
    <>
      <div className="overflow-hidden rounded-lg bg-card text-card-foreground border max-w-96">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex gap-2 mb-3 items-center">
            <EnvelopeIcon className="h-6 w-6" />
            <h3 className="text-md font-semibold leading-6">Get in touch</h3>
          </div>
          <span className="mt-1 text-sm">
            Hey, thanks for visiting 😊 Send over a message and let me know where you&apos;re visiting from!
          </span>

          <ContactDialog />
        </div>
      </div>
    </>
  )
}

export default Contact
