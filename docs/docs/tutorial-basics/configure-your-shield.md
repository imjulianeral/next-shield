---
sidebar_position: 2
---

# Configure your Shield

In order to configure `NextShield`:

- Provide your **public & private routes**.
- Provide the **state** where you store your authenticated user and when this user is available (`isAuth` & `isLoading`).
- Put your `LoadingComponent`.
- Add your router instance.
- Finally specify the route where you put your login page (`loginRoute`) and the route where your user is going to be redirected (`accessRoute`) after login.

## Set up your Shield.

For this example, we are going to hard code the required props:

```jsx title="pages/_app.js"
export default function MyApp({ Component, pageProps }) {
  const router = useRouter()

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
```
