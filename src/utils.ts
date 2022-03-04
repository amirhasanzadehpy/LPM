export function sortKeys <T extends { [key: string] } > (obj: T) {
  return Object
  .keys(obj)
  .sort()
  .reduce((total: T, current))
}
