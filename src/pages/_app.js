import { MantineProvider } from '@mantine/core'
import { Container } from '../components/Container'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }}>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <title>Next Mantine</title>
      </Head>
      <Container>
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  )
}
