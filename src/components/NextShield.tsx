import React, { ReactNode, useEffect } from 'react'

import { NextShieldProps } from '../types/props'
import { verifyPath } from '../libs/routes'

/**
 * 😉 The shield that every Next.js project needs
 *
 * @typeParam NextShieldProps - {@link NextShieldProps | see here}
 * @returns NextShield Component
 *
 * @example
 * ```tsx
 * import { Loading } from '@components/routes/loading'
 *
 * const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
 *  const { isAuth, isLoading } = useAuth()
 *  const router = useRouter()
 *
 *  const privateRoutes = ['/protected']
 *  const publicRoutes = ['/']
 *  const hybridRoutes = ['/products/[slug]']
 *
 *  return (
 *    <NextShield
 *      isAuth={isAuth}
 *      isLoading={isLoading}
 *      router={router}
 *      privateRoutes={privateRoutes}
 *      publicRoutes={publicRoutes}
 *      hybridRoutes={hybridRoutes}
 *      LoadingComponent={<Loading />}
 *    >
 *      <Component {...pageProps} />
 *    </NextShield>
 *   )
 * }
 *
 * export default MyApp
 * ```
 * @packageDocumentation
 */

export function NextShield<
  PrivateRoutesList extends string[],
  PublicRoutesList extends string[]
>({
  isAuth,
  isLoading,
  router: { pathname, replace },
  loginRoute,
  accessRoute,
  privateRoutes,
  publicRoutes,
  hybridRoutes,
  LoadingComponent,
  RBAC,
  userRole,
  children,
}: NextShieldProps<PrivateRoutesList, PublicRoutesList> & { children: ReactNode }) {
  const pathIsPrivate = verifyPath(privateRoutes, pathname)
  const pathIsPublic = verifyPath(publicRoutes, pathname)
  const pathIsHybrid = verifyPath(hybridRoutes, pathname)
  const pathIsAuthorized =
    RBAC && userRole && verifyPath(RBAC[userRole].grantedRoutes, pathname)

  useEffect(() => {
    if (!isAuth && !isLoading && pathIsPrivate) replace(loginRoute)
    if (isAuth && !isLoading && pathIsPublic) {
      if (typeof accessRoute !== 'undefined') {
        replace(accessRoute)
      }
      if (RBAC && userRole) {
        replace(RBAC[userRole].accessRoute)
      }
    }

    if (isAuth && userRole && !isLoading && !pathIsHybrid && !pathIsAuthorized) {
      if (typeof accessRoute !== 'undefined') {
        replace(accessRoute)
      }
      if (RBAC && userRole) {
        replace(RBAC[userRole].accessRoute)
      }
    }
  }, [
    replace,
    userRole,
    RBAC,
    isAuth,
    isLoading,
    accessRoute,
    loginRoute,
    pathIsPrivate,
    pathIsPublic,
    pathIsHybrid,
    pathIsAuthorized,
  ])

  if (
    ((isLoading || !isAuth) && pathIsPrivate) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    ((isLoading || userRole) && !pathIsAuthorized) ||
    (isLoading && pathIsHybrid)
  )
    return <>{LoadingComponent}</>

  return <>{children}</>
}
