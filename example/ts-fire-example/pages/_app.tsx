import type { AppProps } from 'next/app'

import { Shield } from '@/components/routes/Shield'

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Shield>
      <Component {...pageProps} />
    </Shield>
  )
}
