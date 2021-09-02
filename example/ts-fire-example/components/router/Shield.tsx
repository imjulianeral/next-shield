import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import { NextShield, NextShieldProps } from 'next-shield'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocumentData } from 'react-firebase-hooks/firestore'

import { auth, firestore } from '@fire/app'

import { Loading } from './Loading'
import { User } from '@typeDef/user'

interface Props {
  children: ReactNode
}

export function Shield({ children }: Props) {
  const router = useRouter()
  const [user, loadingUser] = useAuthState(auth())
  const [value, loadingDoc, error] = useDocumentData<User>(
    firestore()
      .collection('users')
      .doc(user?.uid)
  )

  const shieldConfig: NextShieldProps<
    ['/profile', '/dashboard', '/control-panel'],
    ['/', '/login']
  > = {
    router,
    isAuth: !!user,
    isLoading: loadingUser && loadingDoc,
    LoadingComponent: <Loading />,
    privateRoutes: ['/profile', '/dashboard', '/control-panel'],
    publicRoutes: ['/', '/login'],
    loginRoute: '/login',
    RBAC: {
      ADMIN: {
        grantedRoutes: ['/profile', '/control-panel'],
        accessRoute: '/profile',
      },
      USER: {
        grantedRoutes: ['/profile', '/dashboard'],
        accessRoute: '/dashboard',
      },
    },
    userRole: value?.role ?? 'USER',
  }

  if (error) return <p>{error}</p>

  return <NextShield {...shieldConfig}>{children}</NextShield>
}
