import { ReactNode } from 'react'
import { HOC } from './common'

export type ComponentShieldBaseProps = HOC & { RBAC?: never; showIf?: never }

export type ComponentShieldRBACProps = HOC & {
  RBAC: true
  showForRole: string
  userRole: string | undefined
}

export type ComponentShieldAuthProps = HOC & {
  RBAC?: never
  showIf: boolean
  fallback?: ReactNode
}

export type ComponentShieldProps = HOC & {
  RBAC?: boolean
  userRole?: string | undefined
  showForRole?: string
  showIf?: boolean
  fallback?: ReactNode
}
