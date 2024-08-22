'use client'

import { SwatchIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { capitalizeFirstLetter } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'

const THEMES: Record<string, string> = {
  GARDEN: 'garden',
  FOREST: 'forest',
  SKY: 'sky',
}

export default function ThemePicker() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full p-2">
          <SwatchIcon aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(THEMES).map((key) => (
          <DropdownMenuItem key={key} onClick={() => setTheme(THEMES[key])} isSelected={THEMES[key] === theme}>
            {capitalizeFirstLetter(THEMES[key])}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
