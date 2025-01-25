import type { ReactNode } from "react";

export type RoleAccess<Routes extends string[]> = {
  [index: string]: {
    grantedRoutes: Routes,
    accessRoute: Routes[number]
  }
}

export type NextShieldProps<
  PrivateRoutesList extends string[],
  PublicRoutesList extends string[]
> = {
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
  loginRoute: PublicRoutesList[number]
  /**
   * 🚧 Route where your user is going to access after login, must be a private route.
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
  accessRoute: PrivateRoutesList[number]
  /**
   * 🚧 🚧 🚧 Array of private routes. These are only accessible when the user is authenticated.
   *
   * @example
   * ```ts
   * const privateRoutes = ['/control-panel', '/sales', '/user/[id]']
   * ```
   */
  privateRoutes: PrivateRoutesList
  /**
   * 👀 👀 👀 Array of public routes. These are only accessible when the user is NOT authenticated.
   *
   * @example
   * ```ts
   * const publicRoutes = ['/', '/login', '/services/[slug]']
   * ```
   */
  publicRoutes: PublicRoutesList
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
   * 🌀 React Component which is going to appear when `isLoading` equals to `true`.
   *
   * @example
   * ```tsx
   * export function Loading() {
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
   *       LoadingComponent={<Loading />}
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * }
   * ```
   */
  LoadingComponent: ReactNode

  /**
   * 🔏 🔐 🔒 Role Based Access Control.
   * 
   * @remarks
   * You can define an object literal to specify which roles are supported and which routes the role have access.
   * 
   * You must define the accessRoute on each Role
   * 
   * @example
   * ```tsx
   *   return (
   *     <NextShield
   *       ...
   *       accessRoute="/profile"
   *       RBAC={{
   *          ADMIN: ['/profile', '/control-panel'],
   *          EMPLOYEE: ['/profile', '/dashboard'], 
   *       }}
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * ```
   */
  RBAC?: never
  /**
   * 🎭 The auth user role.
   * 
   * @remarks
   * - This value must be provided when using RBAC.
   * - Should by provided by the session or state of the application.
   * - Must match with the roles defined on RBAC
   * 
   * @example
   * ```tsx
   *   const { user } = useAuth()
   * 
   *   return (
   *     <NextShield
   *       ...
   *       userRole={user.role} // "ADMIN"
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * ```
   */
  userRole?: never
} | {
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
  loginRoute: PublicRoutesList[number]
  /**
   * 🚧 Route where your user is going to access after login, must be a private route.
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
  accessRoute?: never
  /**
   * 🚧 🚧 🚧 Array of private routes. These are only accessible when the user is authenticated.
   *
   * @example
   * ```ts
   * const privateRoutes = ['/control-panel', '/sales', '/user/[id]']
   * ```
   */
  privateRoutes: PrivateRoutesList
  /**
   * 👀 👀 👀 Array of public routes. These are only accessible when the user is NOT authenticated.
   *
   * @example
   * ```ts
   * const publicRoutes = ['/', '/login', '/services/[slug]']
   * ```
   */
  publicRoutes: PublicRoutesList
  /**
   * 🚦🚦🚦 Array of hybrid routes. These are always accessible; doesn't matter the auth state.
   * @example
   * ```ts
   * const hybridRoutes = ['/support', '/pricing', '/products/[slug]']
   * ```
   */
  hybridRoutes?: string[]
  /**
   * 🌀 React Component which is going to appear when `isLoading` equals to `true`.
   *
   * @example
   * ```tsx
   * export function Loading() {
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
   *       LoadingComponent={<Loading />}
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * }
   * ```
   */
  LoadingComponent: ReactNode

  /**
   * 🔏 🔐 🔒 Role Based Access Control.
   * 
   * @remarks
   * You can define an object literal to specify which roles are supported and which routes the role have access.
   * 
   * You must define the accessRoute on each Role
   * 
   * @example
   * ```tsx
   *   return (
   *     <NextShield
   *       ...
   *       RBAC={{
   *        ADMIN: {
   *          grantedRoutes: ['/dashboard', '/control-panel'],
   *          accessRoute: '/dashboard',
   *        },
   *        USER: {
   *          grantedRoutes: ['/profile', '/dashboard'],
   *          accessRoute: '/profile',
   *        },
   *      }}
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * ```
   */
  RBAC: RoleAccess<PrivateRoutesList[number][]>
  /**
   * 🎭 The auth user role.
   * 
   * @remarks
   * - This value must be provided when using RBAC.
   * - Should by provided by the session or state of the application.
   * - Must match with the roles defined on RBAC
   * 
   * @example
   * ```tsx
   *   const { user } = useAuth()
   * 
   *   return (
   *     <NextShield
   *       ...
   *       userRole={user.role} // "ADMIN"
   *       ...
   *     >
   *       <Component {...pageProps} />
   *     </NextShield>
   *   )
   * ```
   */
  userRole: string | undefined
}
