import { RoleAccess } from '../types/props'

export function verifyPath(routes: string[] | undefined, uri: string) {
  return routes?.some(route => route === uri)
}

export function getAccessRoute(
  RBAC: RoleAccess<string[]> | undefined,
  userRole: string | undefined,
  accessRoute: string | undefined
) {
  if (typeof accessRoute !== 'undefined') return accessRoute

  if (RBAC && userRole) return RBAC[userRole].accessRoute

  return '/'
}
