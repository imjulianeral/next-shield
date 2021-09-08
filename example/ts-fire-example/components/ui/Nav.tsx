import Link from 'next/link'

export function Nav() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/pricing">
        <a>Pricing</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/users/1">
        <a>User Profile</a>
      </Link>
    </nav>
  )
}
