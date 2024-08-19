import React, { SVGProps } from 'react'

export interface Icon {
  name: string
  href: string
  icon: (_props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => JSX.Element
}

export const AppleIcon: Icon = {
  name: 'Apple',
  href: 'https://apple.com',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.773 22.773"
      {...props}
    >
      <g>
        <g>
          <path
            d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
			c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"
          />
          <path
            d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
			c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
			c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
			c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
			c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
			c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"
          />
        </g>
      </g>
    </svg>
  ),
}

export const GliffyIcon: Icon = {
  name: 'Gliffy',
  href: 'https://gliffy.com',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 165.8 165.8" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="#1787fb">
        <path
          d="m255.125 386.615-83.265-83.265 4.565-2.374 78.882-42 83.266 44.371-83.448 83.265zm0-23.737 63.544-59.528-63.544-35.241-63.545 35.241z"
          transform="translate(-171.86 -224.65)"
        />
        <path
          d="m261.151 365.251s-11.5-68.292 25.929-105.725l16.251 8.583-8.582-43.459-50.4 12.417 11.687 6.208c-13.878 16.982-20.817 40.9-21.912 65.918-.548 10.774 1.278 27.755 3.652 41.816l14.243 23.372z"
          transform="translate(-171.86 -224.65)"
        />
      </g>
    </svg>
  ),
}

export const ReputationIcon: Icon = {
  name: 'Reputation',
  href: 'https://reputation.com',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 102.7 152.7" {...props}>
      <g id="Design_1_" fill="#004F5D">
        <g>
          <g>
            <polygon points="52.6,78.9 0,0 105.2,0 105.2,78.9"></polygon>
            <polygon points="52.6,78.9 105.2,157.8 0,157.8 0,78.9"></polygon>
          </g>
        </g>
      </g>
    </svg>
  ),
}

export const DolbyIcon: Icon = {
  name: 'Dolby',
  href: 'https://dolby.io',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="-20 0 300 200" fill="#FFFFFF" {...props}>
      <g id="Dolby">
        <path d="M268.8,190.5h-27.9c-52.3-0.5-94.2-43.3-93.7-95.6c0.5-51.5,42.2-93.1,93.7-93.7h27.9V190.5z" />
        <path d="M-0.4,1.3h27.9c52.3,0.5,94.2,43.3,93.7,95.6c-0.5,51.5-42.2,93.1-93.7,93.7H-0.4V1.3z" />
      </g>
    </svg>
  ),
}

export const STRATIMIcon: Icon = {
  name: 'OPENLANE',
  href: 'https://corporate.openlane.com/',
  icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="233.819" height="33.254" viewBox="-1 2 33.254 33.254" {...props}>
      <g transform="translate(-13 13.944)">
        <path
          d="M62.155,7.372a14.827,14.827,0,0,0-9.721,3.274.5.5,0,0,0-.034.726l3.341,3.341a.487.487,0,0,0,.624.051A9.029,9.029,0,0,1,62,13.025a9.174,9.174,0,1,1-5.637,16.589.487.487,0,0,0-.624.051L52.4,33.007a.5.5,0,0,0,.034.726A14.826,14.826,0,1,0,62.155,7.372Z"
          transform="translate(-32.634 -17.714)"
          fill="#0a1b5f"
        />
        <g transform="translate(13 -5.945)">
          <path
            d="M21.641,49.87a.485.485,0,0,0,.051-.624,9.134,9.134,0,0,1,0-10.767.487.487,0,0,0-.051-.624L17.388,33.6a.5.5,0,0,0-.726.034,16.135,16.135,0,0,0,0,20.471.5.5,0,0,0,.726.034Z"
            transform="translate(-13 -33.459)"
            fill="#0061ff"
          />
        </g>
      </g>
    </svg>
  ),
}

const ICONS: Array<Icon> = [AppleIcon, GliffyIcon, ReputationIcon, DolbyIcon]

export default ICONS
