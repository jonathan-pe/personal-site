import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary))',
        'primary-content': 'rgba(var(--primary-content))',
        secondary: 'rgba(var(--secondary))',
        'secondary-content': 'rgba(var(--secondary-content))',
        accent: 'rgba(var(--accent))',
        'accent-content': 'rgba(var(--accent-content))',
        neutral: 'rgba(var(--neutral))',
        'neutral-content': 'rgba(var(--neutral-content))',
        'base-100': 'rgba(var(--base-100))',
        'base-200': 'rgba(var(--base-200))',
        'base-300': 'rgba(var(--base-300))',
        'base-content': 'rgba(var(--base-content))',
        info: 'rgba(var(--info))',
        'info-content': 'rgba(var(--info-content))',
        success: 'rgba(var(--success))',
        'success-content': 'rgba(var(--success-content))',
        warning: 'rgba(var(--warning))',
        'warning-content': 'rgba(var(--warning-content))',
        error: 'rgba(var(--error))',
        'error-content': 'rgba(var(--error-content))',
      },
    },
  },
  plugins: [],
}

export default config
