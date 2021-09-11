import React from 'react'

import {
  ComponentShieldAuthProps,
  ComponentShieldBaseProps,
  ComponentShieldProps,
  ComponentShieldRBACProps,
} from '../types/Component'

export function ComponentShield(props: ComponentShieldBaseProps): JSX.Element
export function ComponentShield(props: ComponentShieldAuthProps): JSX.Element
export function ComponentShield(props: ComponentShieldRBACProps): JSX.Element
export function ComponentShield(props: ComponentShieldProps) {
  const { showForRole, showIf, fallback, RBAC, userRole, children } = props

  if (RBAC) return <>{showForRole === userRole ? children : null}</>
  if (showIf) return <>{showIf ? children : fallback}</>

  return <>children</>
}

function Debug() {
  return (
    <>
      <ComponentShield showIf={true} fallback={<p>Not Authorized</p>}>
        <p>Default</p>
      </ComponentShield>
      <ComponentShield RBAC showForRole="" userRole="">
        <p>RBAC</p>
      </ComponentShield>
    </>
  )
}
