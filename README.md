# NextShield

😉 Component designed to protect the routes of your app. You must use this component as a wrapper in your `_app.tsx` file.

```tsx
import { Loading } from '@components/routes/loading'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const { isAuth, isLoading } = useAuth()
  const router = useRouter()

  const privateRoutes = ['/protected']
  const publicRoutes = ['/']
  const hybridRoutes = ['/products/[slug]']

  return (
    <NextShield
      isAuth={isAuth}
      isLoading={isLoading}
      router={router}
      privateRoutes={privateRoutes}
      publicRoutes={publicRoutes}
      hybridRoutes={hybridRoutes}
      LoadingComponent={Loading}
    >
      <Component {...pageProps} />
    </NextShield>
  )
}

export default MyApp
```

## NextShieldProps

### isAuth

🔑 This value must be provided by the state of your app. Indicates if the user is authenticated or not.

Here's a simple example with firebase auth. But applies the same logic for any auth provider. 😋

```ts
const [isAuth, setAuth] = useState(false)
useEffect(() => {
  const unsubscribe = auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
      return
    }

    setAuth(false)
  })

  return () => unsubscribe()
}, [isAuth])
```

### isLoading

⏳ This value must be provided by the state of your app. Indicates if the user is already available or not.

Here's a simple example with firebase auth. But applies the same logic for any auth provider. 😋

```ts
const [isAuth, setAuth] = useState(false)
const [isLoading, setLoading] = useState(true)
useEffect(() => {
  const unsubscribe = auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
      setLoading(false)
      return
    }

    setAuth(false)
    setLoading(false)
  })

  return () => unsubscribe()
}, [isAuth])
```

### router

⇆ Instance of your router.

```tsx
const router = useRouter()
...
return (
  <NextShield
    ...
    router={router}
    ...
  >
    <Component {...pageProps} />
  </NextShield>
)
```

### loginRoute

📋 Login page, must be a public route.

```tsx
...
return (
  <NextShield
    ...
    loginRoute="/login"
    ...
  >
    <Component {...pageProps} />
  </NextShield>
)
```

### accessRoute

🚧 Private route where your user is going to access after login.

```tsx
...
return (
  <NextShield
    ...
    accessRoute="/control-panel"
    ...
  >
    <Component {...pageProps} />
  </NextShield>
)
```

### privateRoutes

🚧 🚧 🚧 Array of private routes. These are only accessible when the user is authenticated.

```ts
const privateRoutes = ['/control-panel', '/sales', '/user/[id]']
```

### publicRoutes

👀 👀 👀 Array of public routes. These are only accessible when the user is NOT authenticated.

```ts
const publicRoutes = ['/', '/login', '/services/[slug]']
```

### hybridRoutes

🚦🚦🚦 Array of hybrid routes. These are always accessible; doesn't matter the user state.

You are not required to use this prop, it's only helpful if you wanna track which routes are always accessible.

```ts
const hybridRoutes = ['/support', '/pricing', '/products/[slug]']
```

### LoadingComponent

Functional Component which is going to appear when `isLoading` equals to `true`

`Loading.tsx`:

```tsx
import { FC } from 'react'

export const Loading: FC = () => {
  return <p>Loading...</p>
}
```

`_app.tsx`:

```tsx
import { Loading } from '@components/routes/loading'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextShield
      ...
      LoadingComponent={Loading}
      ...
    >
      <Component {...pageProps} />
    </NextShield>
  )
}
```
