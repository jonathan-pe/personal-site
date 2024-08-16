import ICONS from '@/images/SocialMediaIcons'

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {ICONS.map((icon) => (
            <a key={icon.name} href={icon.href} className="text-base-content">
              <span className="sr-only">{icon.name}</span>
              <icon.icon aria-hidden="true" className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-base-content">
            &copy; 2024 Jonathan Pe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
