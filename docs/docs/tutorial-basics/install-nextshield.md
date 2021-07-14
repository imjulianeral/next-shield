---
sidebar_position: 1
---

# Install NextShield

Install it through `npm` or your favorite dependency manager 😉

```shell
npm i next-shield
```

## Wrap your app with a shield

Go to `pages/_app.js` and wrap the `Component` with `NextShield`:

```jsx title="pages/_app.js"
import { NextShield } from 'next-shield'
import { useRouter } from 'next/router'

import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <NextShield>
      <Component {...pageProps} />
    </NextShield>
  )
}
```
