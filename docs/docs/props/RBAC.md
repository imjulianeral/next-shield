---
sidebar_position: 10
---

# RBAC

🔏 🔐 🔒 Role Based Access Control.

You can define an object literal to specify which roles are supported and which routes the role have access.

**You must define the accessRoute on each Role.**

```tsx
return (
  <NextShield
    ...
    accessRoute="/profile"
    RBAC={{
      ADMIN: ['/profile', '/control-panel'],
      EMPLOYEE: ['/profile', '/dashboard'],
    }}
    ...
  >
    <Component {...pageProps} />
  </NextShield>
)
```
