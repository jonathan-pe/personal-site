import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="divide-base-content overflow-hidden rounded-lg bg-base-200 border border-base-content/25 max-w-96">
      <div className="px-4 py-5 sm:px-6">
        <div className="flex gap-2 mb-3 items-center">
          <EnvelopeIcon className="h-6 w-6" />
          <h3 className="text-md font-semibold leading-6">Get in touch</h3>
        </div>
        <span className="mt-1 text-sm text-base-content">
          Hey, thanks for visiting 😊 Send over a message and let me know where you&apos;re visiting from!
        </span>

        <button className="mt-4 px-2 py-1 w-full flex justify-center items-center bg-primary border border-base-content/25 text-primary-content font-semibold">
          <span>Send Email</span>
          <PaperAirplaneIcon className="h-5 w-5 ml-2" />
        </button>
      </div>
    </div>
  )
}

export default Contact
