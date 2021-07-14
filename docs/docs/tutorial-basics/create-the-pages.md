---
sidebar_position: 3
---

# Create the Pages!

Create the following pages:

- `private.jsx`
- `control-panel.jsx`
- `login.jsx`

## Add the content

For each page add the following content:

```jsx title="pages/PageName.jsx"
import Head from 'next/head'
import Link from 'next/link'

export default function PageName() {
  return (
    <>
      <Head>
        <title>PageName | JS Example - NextShield</title>
        <meta name="description" content="NextShield Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>PageName</h1>
      <Link href="/private">
        <a>Private</a>
      </Link>
      <Link href="/control-panel">
        <a>Control Panel</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}
```
