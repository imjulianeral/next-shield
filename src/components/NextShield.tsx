import React, { ReactNode, useEffect } from 'react'

import { NextShieldProps } from '../types/props'
import { verifyPath, getAccessRoute } from '../libs/routes'
import { usePathname, useRouter } from 'next/navigation';

/**
 * 😉 The shield that every Next.js app needs
 *
 * @typeParam NextShieldProps - {@link NextShieldProps | see here}
 * @returns NextShield Component
 *
 * @example
 * ```tsx
 * import { Loading } from '@/components/routes/Loading'
 * import { useAuth } from '@/hooks/auth'
 *
 * export default function MyApp({ Component, pageProps }: AppProps) {
 *  const { isAuth, isLoading } = useAuth()
 *  const router = useRouter()
 *
 *  return (
 *    <NextShield
 *      isAuth={isAuth}
 *      isLoading={isLoading}
 *      router={router}
 *      privateRoutes={['/protected']}
 *      publicRoutes={['/']}
 *      hybridRoutes={['/products/[slug]']}
 *      LoadingComponent={<Loading />}
 *    >
 *      <Component {...pageProps} />
 *    </NextShield>
 *   )
 * }
 *
 * ```
 * @packageDocumentation
 */

export function NextShield<
  PrivateRoutesList extends string[],
  PublicRoutesList extends string[]
>({
  isAuth,
  isLoading,
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
   const pathname = usePathname();
  const router = useRouter();
  const pathIsPrivate = verifyPath(privateRoutes, pathname)
  const pathIsPublic = verifyPath(publicRoutes, pathname)
  const pathIsHybrid = verifyPath(hybridRoutes, pathname)
  const pathIsAuthorized =
    RBAC && userRole && verifyPath(RBAC[userRole].grantedRoutes, pathname)
  const access = getAccessRoute(RBAC, userRole, accessRoute)

  useEffect(() => {
    if (!isAuth && !isLoading && pathIsPrivate) replace(loginRoute)
    if (isAuth && !isLoading && pathIsPublic) replace(access)
    if (isAuth && userRole && !isLoading && !pathIsHybrid && !pathIsAuthorized)
      replace(access)
  }, [
    replace,
    userRole,
    access,
    isAuth,
    isLoading,
    loginRoute,
    pathIsPrivate,
    pathIsPublic,
    pathIsHybrid,
    pathIsAuthorized,
  ])

  if (
    ((isLoading || !isAuth) && pathIsPrivate) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    ((isLoading || userRole) && !pathIsAuthorized && !pathIsHybrid) ||
    (isLoading && pathIsHybrid)
  )
    return <>{LoadingComponent}</>

  return <>{children}</>
}
