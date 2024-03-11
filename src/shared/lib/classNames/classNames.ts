type Mods = Record<string, string | boolean>

export function cls(className: string, mods: Mods, additional: string[]) {
  return [
    className,
    Object.entries(mods)
      .filter((className, value) => Boolean(value))
      .map(([className]) => className),
    ...additional
  ].join(' ')
}