import type { NextRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect } from 'react'

export interface NextShieldProps {
  /** Piece of state which indicates if the user is authenticated or not */
  isAuth: boolean

  isLoading: boolean
  router: NextRouter
  loginRoute: string
  accessRoute: string
  privateRoutes: string[]
  publicRoutes: string[]
  hybridRoutes?: string[]
  LoadingComponent: FC
}

/**
 * 😉 Component designed to protect the routes of your app.
 * @param props - The {@link NextShieldProps | parameters} that you must put when using NextShield
 */

export const NextShield: FC<NextShieldProps> = ({
  isAuth,
  isLoading,
  router,
  loginRoute,
  accessRoute,
  privateRoutes,
  publicRoutes,
  hybridRoutes,
  LoadingComponent,
  children,
}) => {
  const pathIsProtected = privateRoutes.indexOf(router.pathname) !== -1
  const pathIsPublic = publicRoutes.indexOf(router.pathname) !== -1
  const pathIsHybrid = hybridRoutes?.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!isAuth && !isLoading && pathIsProtected) router.replace(loginRoute)
    if (isAuth && !isLoading && pathIsPublic) router.replace(accessRoute)
  }, [router, isAuth, isLoading, pathIsProtected, pathIsPublic])

  if (
    ((isLoading || !isAuth) && pathIsProtected) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    (isLoading && pathIsHybrid)
  )
    return <LoadingComponent />

  return <>{children}</>
}
