import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

interface Props {
  isAuth: boolean
  isLoading: boolean
  privateRoutes: string[]
  publicRoutes: string[]
  hybridRoutes?: string[]
  LoadingComponent: FC
}

export const NextShield: FC<Props> = ({
  isAuth,
  isLoading,
  privateRoutes,
  publicRoutes,
  hybridRoutes,
  LoadingComponent,
  children,
}) => {
  const router = useRouter()

  const pathIsProtected = privateRoutes.indexOf(router.pathname) !== -1
  const pathIsPublic = publicRoutes.indexOf(router.pathname) !== -1
  const pathIsHybrid = hybridRoutes?.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!isAuth && !isLoading && pathIsProtected) router.replace('/')
    if (isAuth && !isLoading && pathIsPublic) router.replace('/protected')
  }, [router, isAuth, isLoading, pathIsProtected, pathIsPublic])

  if (
    ((isLoading || !isAuth) && pathIsProtected) ||
    ((isLoading || isAuth) && pathIsPublic) ||
    (isLoading && pathIsHybrid)
  )
    return <LoadingComponent />

  return <>{children}</>
}
