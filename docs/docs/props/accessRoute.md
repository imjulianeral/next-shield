---
sidebar_position: 9
---

# accessRoute

🚧 Route where your user is going to access after login, must be a private route.

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
