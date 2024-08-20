'use client'

import { SwatchIcon } from '@heroicons/react/24/outline'
import { Popover, PopoverPanel, PopoverButton } from '@headlessui/react'
import { useTheme } from 'next-themes'
import { capitalizeFirstLetter } from '@/lib/utils'

type Theme = 'light' | '80s' | 'dark' | 'subnautica' | 'toy' | 'calm' | 'forest'

const THEMES: Record<string, Theme> = {
  CALM: 'calm',
  FOREST: 'forest',
  EIGHTIES: '80s',
  SUBNAUTICAL: 'subnautica',
  TOY: 'toy',
}

export default function ThemePicker() {
  const { theme, setTheme } = useTheme()

  console.log(theme)

  return (
    <Popover>
      <PopoverButton className="rounded-full bg-base-200 p-2 text-base-content hover:text-base-content/75">
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
            style={
              theme === THEMES[key]
                ? { backgroundColor: 'rgba(var(--primary)', color: 'rgba(var(--primary-content))' }
                : {}
            }
            className="p-2 my-1 rounded-lg text-base-content hover:bg-primary/50 hover:text-primary-content"
          >
            {capitalizeFirstLetter(THEMES[key])}
          </button>
        ))}
      </PopoverPanel>
    </Popover>
  )
}
