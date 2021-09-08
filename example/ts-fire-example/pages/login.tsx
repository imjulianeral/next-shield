import { Layout } from '@/components/routes/Layout'
import { useAuth } from '@/hooks/auth'

export default function Login() {
  const { signInWithGoogle } = useAuth()

  return (
    <Layout title="Login">
      <h1>Login</h1>
      <button onClick={signInWithGoogle}>Sign In</button>
    </Layout>
  )
}
