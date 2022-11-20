import { Container } from '@/components/Container'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { RouterTransition } from '@/components/Animation/Loading'
import { SWRConfig } from 'swr'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  // when router includes /auth, remove header and footer
  const includes = router?.pathname?.includes('/auth') ? false : true
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <title>Next Mantine</title>
      </Head>
      <SWRConfig value={{ revalidateOnFocus: false }} />
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light', fontFamily: 'Open Sans' }}>
        <Container withFooter={includes} withHeader={includes}>
          <RouterTransition />
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  )
}
