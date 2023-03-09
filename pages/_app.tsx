import { EmotionCache } from '@emotion/react'
import { AppProps } from 'next/app'
import { Layout } from '../src/components/layout/Layout'
import { MainProvider } from '../src/providers/MainProvider'
import '../src/styles/globals.scss'
import createEmotionCache from '../src/utils/createEmotionCache'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <MainProvider emotionCache={emotionCache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainProvider>
  )
}
