type Mods = Record<string, string | boolean>

export function cls (className: string, mods: Mods, additional: string[]): string {
  const modsClasses = Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className).flat(1)

  return [
    className,
    modsClasses,
    ...additional.filter(Boolean)
  ].join(' ')
}
