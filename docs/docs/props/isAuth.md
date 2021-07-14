---
sidebar_position: 1
---

# isAuth

🔑 This value must be provided by the state of your app. Indicates if the user is authenticated or not.

Here's a simple example with firebase auth. But applies the same logic for any auth provider. 😋

```ts
const [isAuth, setAuth] = useState(false)
useEffect(() => {
  const unsubscribe = auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
      return
    }

    setAuth(false)
  })

  return () => unsubscribe()
}, [isAuth])
```
