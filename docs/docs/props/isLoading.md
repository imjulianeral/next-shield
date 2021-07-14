---
sidebar_position: 2
---

# isLoading

⏳ This value must be provided by the state of your app. Indicates if the user is already available or not.

Here's a simple example with firebase auth. But applies the same logic for any auth provider. 😋

```ts
const [isAuth, setAuth] = useState(false)
const [isLoading, setLoading] = useState(true)
useEffect(() => {
  const unsubscribe = auth().onAuthStateChanged(user => {
    if (user) {
      setAuth(true)
      setLoading(false)
      return
    }

    setAuth(false)
    setLoading(false)
  })

  return () => unsubscribe()
}, [isAuth])
```
