---
sidebar_position: 3
---

🌀 React Component which is going to appear when `isLoading` equals to `true`.

`Loading.tsx`:

```tsx
export function Loading() {
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
      LoadingComponent={<Loading />}
      ...
    >
      <Component {...pageProps} />
    </NextShield>
  )
}
```
