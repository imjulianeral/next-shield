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

  const shieldConfig: NextShieldProps<
    ['/private', '/control-panel', '/dashboard'],
    ['/', '/login']
  > = {
    router,
    isAuth: true,
    isLoading: false,
    LoadingComponent: <p>Loading...</p>,
    privateRoutes: ['/private', '/control-panel', '/dashboard'],
    publicRoutes: ['/', '/login'],
    loginRoute: '/login',
    RBAC: {
      ADMIN: {
        grantedRoutes: ['/dashboard', '/control-panel'],
        accessRoute: '/dashboard',
      },
      EMPLOYEE: {
        grantedRoutes: ['/private', '/dashboard'],
        accessRoute: '/private',
      },
    },
    userRole: 'ADMIN' | 'EMPLOYEE',
  }

  return <NextShield {...shieldConfig}>{children}</NextShield>
}
```
