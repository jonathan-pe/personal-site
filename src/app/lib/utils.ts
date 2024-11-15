import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
}

export function shortenJobTitle(title: string) {
  return (
    title
      .replace('Software Engineer', 'SWE')
      // maybe need this later?
      // .replace('Frontend', 'FE')
      // .replace('Backend', 'BE')
      // .replace('Fullstack', 'FS')
      // .replace('Full Stack', 'FS')
      .replace('Senior', 'Sr.')
  )
}

export function validateEmail(email: string) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    )
}
