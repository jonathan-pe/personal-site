'use client'

import { SwatchIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverPanel, PopoverButton } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { capitalizeFirstLetter } from '@/lib/utils'

type Theme = 'light' | '80s' | 'dark' | 'subnautical' | 'toy'

const THEMES: Record<string, Theme> = {
  LIGHT: 'light',
  DARK: 'dark',
  EIGHTIES: '80s',
  SUBNAUTICAL: 'subnautical',
  TOY: 'toy',
}

export default function ThemePicker() {
  const { theme, setTheme } = useTheme()
  return (
    <Popover>
      <PopoverButton className="rounded-full bg-base-200 p-2 text-base-content hover:text-primary-content">
        <SwatchIcon aria-hidden="true" className="h-6 w-6" />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom start"
        transition
        className="z-20 flex flex-col rounded-lg bg-base-200 shadow-lg border-base-content/25 border-solid border p-2 translate-y-1 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        {Object.keys(THEMES).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setTheme(THEMES[key])}
            className="p-2 my-1 rounded-lg text-base-content hover:bg-primary/50 hover:text-primary-content"
          >
            {capitalizeFirstLetter(THEMES[key])}
          </button>
        ))}
      </PopoverPanel>
    </Popover>
  )
}
