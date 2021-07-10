export function verifyPath(routes: string[] | undefined, uri: string) {
  return routes?.some(route => route === uri)
}
