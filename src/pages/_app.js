import { RouterTransition } from '@/components/Animation/Loading'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { NotificationsProvider } from '@mantine/notifications'

/**
 * _app.js adalah fitur Next.js yang memungkinkan Anda untuk melakukan override pada halaman aplikasi Anda.
 * _app.js bisa dirender di sisi server dan sisi client.
 * _app.js bertindak sebagai entry point, dan akan dijalankan pertama kali sebelum halaman lainnya dijalankan.
 * _app.js dapat digunakan untuk:
 * - Mengatur state global yang dapat diakses oleh semua halaman
 * - Mengatur provider yang dapat diakses oleh semua halaman
 * - Mengatur halaman yang akan dijalankan sebelum semua halaman lainnya
 * - Mengatur halaman yang akan dijalankan ketika semua halaman lainnya telah dijalankan
 * - Mengatur halaman yang akan dijalankan ketika terjadi error
 * - Mengatur halaman yang akan dijalankan ketika terjadi error ketika semua halaman lainnya telah dijalankan
 * @returns
 */
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
