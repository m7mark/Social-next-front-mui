import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { AuthService } from '../services/auth/auth.service'

interface AuthProviderProps extends PropsWithChildren {
  displayName: string | undefined
}

const AuthProvider = ({ children, displayName }: AuthProviderProps) => {
  const router = useRouter()
  const currentUser = useAuth()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (!accessToken) AuthService.logout()
  }, [router.pathname])

  if (currentUser || displayName === 'AuthPage') return <>{children}</>
  else {
    router.pathname !== '/auth' && router.replace('/auth')
    return null
  }
}

export default AuthProvider
