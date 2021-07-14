---
sidebar_position: 2
---

# RBAC

You can add RBAC in **NextShield** by adding 2 properties:

- RBAC: Object literal where you define the existing roles and the routes, **you must add the `accessRoute` on each role**.
- userRole: String prop, **must match with the defined roles in RBAC**.

### Example

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
    RBAC: {
      ADMIN: ['/private', '/control-panel'],
      USER: ['/private', '/dashboard'],
    },
    userRole: 'ADMIN' | 'USER',
  }

  return <NextShield {...shieldConfig}>{children}</NextShield>
}
```
