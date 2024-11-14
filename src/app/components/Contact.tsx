'use client'

import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/components/ui/use-toast'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

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
      {/* Commenting out since we're currently using Resend (email provider) for another app
          and only get 1 free domain for free :) */}
      {/* <DialogTrigger asChild onClick={() => setIsOpen(true)}> */}
      <Button variant="default" size="sm" className="w-full">
        <a
          href="mailto:jonathanqpe@gmail.com"
          className="w-full flex justify-center items-center"
          target="_blank"
          rel="noreferrer"
        >
          <span>Send Email</span>
          <PaperAirplaneIcon className="h-5 w-5 ml-2" />
        </a>
      </Button>
      {/* </DialogTrigger> */}
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
    <Card>
      <CardHeader>
        <CardTitle className="flex gap-2 items-center">
          <EnvelopeIcon className="h-6 w-6" />
          Get in touch
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6 text-muted-foreground">
        <span>Hey, thanks for visiting 😊 Send over a message and let me know where you&apos;re visiting from!</span>
      </CardContent>
      <CardFooter>
        <ContactDialog />
      </CardFooter>
    </Card>
  )
}

export default Contact
