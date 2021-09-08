import type { ReactNode } from 'react'

export interface Children {
  children: ReactNode
}

export type LayoutProps = {
  title: string
} & Children
