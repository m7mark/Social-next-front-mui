import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import Head from 'next/head'
import { PropsWithChildren } from 'react'
import theme from '../config/theme'

interface MainProviderProps extends PropsWithChildren {
  emotionCache: EmotionCache
}

export const MainProvider = ({ children, emotionCache }: MainProviderProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  )
}
