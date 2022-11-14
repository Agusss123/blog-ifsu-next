import { MantineProvider } from "@mantine/core"
import { Container } from "../components/Container"

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ colorScheme: "light" }}
    >
      <Container>
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  )
}
