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
