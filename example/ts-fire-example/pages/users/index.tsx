import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function UserList() {
  const { signOut } = useAuth()

  return (
    <Layout title="User List">
      <h1>User List</h1>
      <button onClick={signOut}>Sign Out</button>
    </Layout>
  )
}
