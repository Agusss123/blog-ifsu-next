import { RouterTransition } from '@/components/Animation/Loading'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { NotificationsProvider } from '@mantine/notifications'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <title>Next Mantine</title>
      </Head>
      <SWRConfig value={{ revalidateOnFocus: false }} />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light', fontFamily: 'Open Sans' }}>
        <RouterTransition />
        <NotificationsProvider position="top-center" zIndex={2077}>
          <Component {...pageProps} />
        </NotificationsProvider>
      </MantineProvider>
    </>
  )
}
