import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import { Shield } from '@components/router'

import 'reseter.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Shield>
      <Component {...pageProps} />
    </Shield>
  )
}

export default MyApp
