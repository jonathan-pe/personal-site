'use client'

import { SwatchIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'

export default function ThemePicker() {
  useEffect(() => {
    localStorage.setItem('theme', 'forest-dark')

    const selectedTheme = localStorage.getItem('theme')

    if (selectedTheme) {
      document.body.classList.add(selectedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('forest-dark')
    } else {
      document.body.classList.add('calm')
    }
  }, [])

  return (
    <button
      type="button"
      className="relative rounded-full bg-base-200 p-1 text-base-content hover:text-base-content/75 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:ring-offset-1 hover:bg-primary-100/25 focus:ring-offset-secondary/50"
      onClick={() => {
        const currentTheme = document.body.classList[0]
        const nextTheme = currentTheme === 'calm' ? 'forest-dark' : 'calm'

        document.body.classList.replace(currentTheme, nextTheme)
        localStorage.setItem('theme', nextTheme)
      }}
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Website Theme Picker</span>
      <SwatchIcon aria-hidden="true" className="h-6 w-6" />
    </button>
  )
}
