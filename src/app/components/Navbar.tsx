'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from '@radix-ui/react-navigation-menu'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import profileIcon from '@/images/profileIcon.jpg'
import ThemePicker from './ThemePicker'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

// Scroll threshold in pixels
const SCROLL_THRESHOLD = 100

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop && scrollTop > SCROLL_THRESHOLD) {
        // Scroll down past the threshold - hide navbar
        setIsHidden(true)
      } else if (scrollTop < lastScrollTop || scrollTop <= SCROLL_THRESHOLD) {
        // Scroll up or within the threshold - show navbar
        setIsHidden(false)
      }

      setLastScrollTop(scrollTop)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollTop])

  return (
    <header
      className={`flex shrink-0 items-center justify-between px-6 md:px-32 py-6 bg-background w-full sticky z-10 top-0 transition ${
        isHidden ? '-translate-y-20' : ''
      }`}
    >
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
            <Link href="#" prefetch={false}>
              <Image alt="profile icon" src={profileIcon} className="rounded-full" />
              <span className="sr-only">My Logo</span>
            </Link>
          </Button>
          <div className="grid gap-2 py-6">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} prefetch={false}>
                {item.name}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex gap-8">
        <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
          <Link href="#" prefetch={false}>
            <Image alt="profile icon" src={profileIcon} className="rounded-full" />
            <span className="sr-only">My Logo</span>
          </Link>
        </Button>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigation.map((item) => (
              <NavigationMenuLink asChild key={item.name}>
                <Link
                  href={item.href}
                  className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
                  prefetch={false}
                >
                  {item.name}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <ThemePicker />
      </div>
    </header>
  )
}
