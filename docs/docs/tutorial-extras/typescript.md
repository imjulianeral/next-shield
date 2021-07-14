---
sidebar_position: 1
---

# TypeScript

**NextShield** is designed to be used with TypeScript! you'll get some benefits like:

- Enforces you to write the defined routes in the props and nothing more.
- Type check in strings and arrays.
- Accurate autocompletion.

## Translate your project to TS

1. Install the TS dependencies: `npm install --save-dev typescript @types/react @types/node`.
2. Create the file `tsconfig.json` in the root folder.
3. Rename your file extension to `tsx`.
4. Run the server with `npx run dev`.
5. Now go to `_app.tsx` and add the types to the page:

```tsx title="pages/_app.tsx"
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextShield
      isAuth={true}
      isLoading={false}
      router={router}
      privateRoutes={['/private', '/control-panel']}
      publicRoutes={['/', '/login']}
      accessRoute="/private"
      loginRoute="/login"
      LoadingComponent={<p>Loading...</p>}
    >
      <Component {...pageProps} />
    </NextShield>
  )
}

export default MyApp
```

6. I really encourage you to create a new component to configure NextShield, your `_app.tsx` will become a large file in other way. So, create a components directory with a component called `Shield.tsx` or other name you like.
7. Import `NextShield` and `NextShieldProps` on that file.
8. `NextShieldProps` require to define the public and private routes as generics, the first generic is for private and the second for public routes:

```tsx title="components/Shield.tsx"
const shieldConfig: NextShieldProps<
    ['/private', '/control-panel'],
    ['/', '/login']
  > = {...}
```

9. Now you are forced to write the same routes on:

- privateRoutes
- publicRoutes
- accessRoute
- loginRoute
- RBAC

10. The final result should look like this:

```tsx title="components/Shield.tsx"
import { useRouter } from 'next/router'
import { NextShield, NextShieldProps } from 'next-shield'

export function Shield({ children }: Props) {
  const router = useRouter()

  const shieldConfig: NextShieldProps<['/private', '/control-panel'], ['/', '/login']> = {
    router,
    isAuth: true,
    isLoading: false,
    LoadingComponent: <p>Loading...</p>,
    privateRoutes: ['/private', '/control-panel'],
    publicRoutes: ['/', '/login'],
    accessRoute: '/private',
    loginRoute: '/login',
  }

  return <NextShield {...shieldConfig}>{children}</NextShield>
}
```

11. And import the Shield component in the `_app.tsx`:

```tsx title="pages/_app.tsx"
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Shield } from 'components/Shield'


const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Shield>
      <Component {...pageProps} />
    </Shield>
  )
}

export default MyApp
```

Congrats! You just got type safety code on your Shield. 😉
