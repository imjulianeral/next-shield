import { useAuth } from '@/hooks/auth'
import { Layout } from '@/components/routes/Layout'

export default function Profile() {
  const { signOut } = useAuth()

  return (
    <Layout title="Profile">
      <h1>Profile</h1>
      <button onClick={signOut}>Sign Out</button>
    </Layout>
  )
}
