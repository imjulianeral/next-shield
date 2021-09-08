import { useCallback, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { doc, onSnapshot } from '@firebase/firestore'

import { auth, firestore } from '@/db/app'
import { Profile } from '@/types/User'

export function useAuth() {
  const [userProfile, setUserProfile] = useState<Profile>()
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const signInWithGoogle = useCallback(() => {
    signInWithPopup(auth, new GoogleAuthProvider())
  }, [])

  const signOut = useCallback(async () => {
    await auth.signOut()
  }, [])

  useEffect(() => {
    const unsubAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const profileRef = doc(firestore, 'users', user.uid)
        const unsubProfile = onSnapshot(profileRef, profile => {
          if (profile.exists()) {
            setUserProfile({ id: profile.id, ...profile.data() } as Profile)
            setIsAuth(true)
            setIsLoading(false)
          }
        })

        return () => unsubProfile()
      }

      setUserProfile(undefined)
      setIsAuth(false)
      setIsLoading(false)
    })

    return () => unsubAuth()
  }, [])

  return {
    signInWithGoogle,
    signOut,
    isLoading,
    isAuth,
    userProfile,
  }
}
