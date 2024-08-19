import { SVGProps } from 'react'
import { LINKS } from './meInfo'

export interface Icon {
  name: string
  href: string
  icon: (_props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element
}

export type Link = keyof typeof LINKS

export interface Job {
  id: string
  companyName: string
  role: string
  startDate: string
  endDate: string
  icon: Icon
  accomplishments: string[]
  techUsed: string[]
}

export interface SideProject {
  id: string
  projectName: string
  url: string
  description: string
  techUsed: string[]
}

export interface Skill {
  id: string
  name: string
  level: number
  category: string
}

export interface Education {
  id: string
  institutionName: string
  certificationReceived: string
  startDate: string
  endDate: string
}
