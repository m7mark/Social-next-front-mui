import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { NextComponentType } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { Layout } from '../components/layout/Layout'
import theme from '../config/theme'

interface MainProviderProps extends PropsWithChildren {
  emotionCache: EmotionCache
  Component: NextComponentType
  pageProps: any
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
  pageProps,
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
          <Hydrate state={pageProps.dehydratedState}>
            <DynamicAuthProvider displayName={displayName}>
              <Layout displayName={displayName}>{children}</Layout>
            </DynamicAuthProvider>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
