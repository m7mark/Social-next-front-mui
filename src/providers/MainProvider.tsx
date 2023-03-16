import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { NextComponentType } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout } from '../components/layout/Layout'
import theme from '../config/theme'

interface MainProviderProps extends PropsWithChildren {
  emotionCache: EmotionCache
  Component: NextComponentType
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const DynamicAuthProvider = dynamic(() => import('./AuthProvider'), {
  ssr: false,
})

export const MainProvider = ({
  children,
  emotionCache,
  Component,
}: MainProviderProps) => {
  const displayName = Component.displayName

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <DynamicAuthProvider displayName={displayName}>
            <Layout displayName={displayName}>{children}</Layout>
          </DynamicAuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
