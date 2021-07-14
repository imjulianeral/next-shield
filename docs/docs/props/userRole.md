---
sidebar_position: 11
---

# userRole

🎭 The auth user role.

- This value must be provided when using RBAC.
- Should by provided by the session or state of the application.
- Must match with the roles defined on RBAC

```tsx
const { user } = useAuth()

return (
  <NextShield
    ...
    userRole={user.role} // "ADMIN"
    ...
  >
    <Component {...pageProps} />
  </NextShield>
)
```
