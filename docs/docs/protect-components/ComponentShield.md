---
sidebar_position: 1
---

# ComponentShield

🛡️ A Shield for your Components, it handles when a component shows or not based on the user's role or by a custom condition that you provide. This avoids the use of the ternary operator on your JSX code.

## Show By Condition

When using a component by condition, you are only required to pass a boolean value to the `showIf` prop, a condition which returns `true` or `false` to determine if the components passed as `children` are going to be available or not.

```tsx
return (
  <ComponentShield showIf={condition ? true : false}>
    <p>You are authorized</p>
  </ComponentShield>
)
```

### Fallback

You can provide a custom fallback which is going to be shown when the condition returns `false`

```tsx
return (
  <ComponentShield showIf={false} fallback={<p>You are unauthorized</p>}>
    <p>You are authorized</p>
  </ComponentShield>
)
```

## Show By User Role

If you want to use `ComponentShield` for **RBAC** you must use the three following props:

- `RBAC`: To tell you're going to use RBAC.
- `showForRole`: The role who is going to have access to the children components.
- `userRole`: The current auth user's role.

The logic is simple, if `showForRole` and `userRole` are not equal, returns `null`, if they are equal the components passed as `children` will be shown.

```tsx
return (
  <ComponentShield RBAC showForRole="ADMIN" userRole="ADMIN">
    <p>You are an ADMIN</p>
  </ComponentShield>
)
```
