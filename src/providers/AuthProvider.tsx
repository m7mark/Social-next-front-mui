import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { AuthService } from '../services/auth/auth.service'
import { useFilterStore } from '../shared/store/filter.store'

interface AuthProviderProps extends PropsWithChildren {
  displayName: string | undefined
}

const AuthProvider = ({ children, displayName }: AuthProviderProps) => {
  const router = useRouter()
  const currentUser = useAuth()
  const { resetFilter } = useFilterStore()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (!accessToken) {
      resetFilter()
      AuthService.logout()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  if (currentUser || displayName === 'AuthPage') return <>{children}</>
  else {
    router.pathname !== '/auth' && router.replace('/auth')
    return null
  }
}

export default AuthProvider
