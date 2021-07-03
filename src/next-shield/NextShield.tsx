import type { NextRouter } from 'next/router'
import type { FC } from 'react'
import { useEffect } from 'react'

type privateRoutes = string[]

export interface NextShieldProps {
  /**
   * 🔑 This value must be provided by the state of your app. Indicates if the user is authenticated or not.
   *
   * @example
   * Here is a simple example with firebase auth. But applies the same logic for any auth provider. 😋
   * @example
   * ```ts
   * const [isAuth, setAuth] = useState(false)
   * useEffect(() => {
   *  const unsubscribe = auth().onAuthStateChanged(user => {
   *    if (user) {
   *       setAuth(true)
   *       return
   *     }
   *
   *    setAuth(false)
   *   })
   *
   *   return () => unsubscribe()
   * }, [isAuth])
   * ```
   */
  isAuth: boolean
  /**
   * ⏳ This value must be provided by the state of your app. Indicates if the user is already available or not.
   *
   * @example
   * Here is a simple example with firebase auth. But applies the same logic for any auth provider. 😋
   * @example
   * ```ts
   * const [isAuth, setAuth] = useState(false)
   * const [isLoading, setLoading] = useState(true)
   * useEffect(() => {
   *   const unsubscribe = auth().onAuthStateChanged(user => {
   *     if (user) {
   *       setAuth(true)
   *       setLoading(false)
   *       return
   *     }
   *
   *     setAuth(false)
   *     setLoading(false)
   *   })
   *
   *   return () => unsubscribe()
   * }, [isAuth])
   * ```
   */
  isLoading: boolean
  /**
   * ⇆ Instance of your router.
   *
   * @example
   * ```tsx
   * const router = useRouter()
   * ...
   * return (
   *  <NextShield
   *    ...
   *    router={router}
   *    ...
   *  >
   *    <Component {...pageProps} />
   *  </NextShield>
   * )
   * ```
   */
  router: NextRouter
  /**
   * 📋 Login page, must be a public route.
   *
   * @example
   * ```tsx
   * ...
   * return (
   *  <NextShield
   *    ...
   *    loginRoute="/login"
   *    ...
   *  >
   *    <Component {...pageProps} />
   *  </NextShield>
   * )
   * ```
   */
  loginRoute: privateRoutes[number]
  /**
   * 🚧 Private route where your user is going to access after login.
   *
   * @example
   * ```tsx
   * ...
   * return (
   *  <NextShield
   *    ...
   *    accessRoute="/control-panel"
   *    ...
   *  >
   *    <Component {...pageProps} />
   *  </NextShield>
   * )
   * ```
   */
  accessRoute: string
  /**
   * 🚧 🚧 🚧 Array of private routes. These are only accessible when the user is authenticated.
   *
   * @example
   * ```ts
   * const privateRoutes = ['/control-panel', '/sales', '/user/[id]']
   * ```
   */
  privateRoutes: privateRoutes
  /**
   * 👀 👀 👀 Array of public routes. These are only accessible when the user is NOT authenticated.
   *
   * @example
   * ```ts
   * const publicRoutes = ['/', '/login', '/services/[slug]']
   * ```
   */
  publicRoutes: string[]
  /**
   * 🚦🚦🚦 Array of hybrid routes. These are always accessible; doesn't matter the user state.
   * You are not required to use this prop, it's only helpful if you wanna track which routes are always accessible.
   * @example
   * ```ts
   * const hybridRoutes = ['/support', '/pricing', '/products/[slug]']
   * ```
   */
  hybridRoutes?: string[]
  /**
   * Functional Component which is going to appear when `isLoading` equals to `true` 
   * 
   * @example
   * ```tsx
   * import { FC } from 'react'
    
   * export const Loading: FC = () => {
   *   return <p>Loading...</p>
   * }
   * ```
   * 
   * `_app.tsx`:
   * 
   * ```tsx
   * import { Loading } from '@components/routes/loading'
   * 
   * const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
   *   return (
   *     <NextShield
   *       ...
   *       LoadingComponent={Loading}
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * }
   * ```
   */
  LoadingComponent: FC
}

/**
 * 😉 Component designed to protect the routes of your app. You must use this component as a wrapper in your `_app.tsx` file.
 * 
 * @typeParam NextShieldProps - {@link NextShieldProps | see definition here}
 * @returns NextShield Component
 * 
 * @example
 * ```tsx
 * import { Loading } from '@components/routes/loading'
 * 
 * const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
 *  const { isAuth, isLoading } = useAuth()
 *  const router = useRouter()

 *  const privateRoutes = ['/protected']
 *  const publicRoutes = ['/']
 *  const hybridRoutes = ['/products/[slug]']

 *  return (
 *    <NextShield
 *      isAuth={isAuth}
 *      isLoading={isLoading}
 *      router={router}
 *      privateRoutes={privateRoutes}
 *      publicRoutes={publicRoutes}
 *      hybridRoutes={hybridRoutes}
 *      LoadingComponent={Loading}
 *    >
 *      <Component {...pageProps} />
 *    </NextShield>
 *   )
 * }

 * export default MyApp
 * ```
 * @packageDocumentation
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
