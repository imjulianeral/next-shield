import Head from 'next/head'
import Link from 'next/link'
import { NextPage } from 'next'
import { useCallback } from 'react'

import { auth } from '@fire/app'

const Profile: NextPage = () => {
  const signOut = useCallback(async () => {
    try {
      await auth().signOut()
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Profile</h1>

      <button onClick={signOut}>Sign Out</button>
      <br />

      <Link href="/login">
        <a>Login</a>
      </Link>
      <br />
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
      <br />
      <Link href="/control-panel">
        <a>Control Panel</a>
      </Link>
    </>
  )
}

export default Profile