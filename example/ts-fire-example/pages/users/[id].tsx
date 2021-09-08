import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function SingleUser() {
  const { signOut } = useAuth()

  return (
    <Layout title="Single User">
      <h1>Single User</h1>
      <button onClick={signOut}>Sign Out</button>
    </Layout>
  )
}
