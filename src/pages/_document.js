import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

/**
 * _document.js hanya dapat dijalankan di sisi server.
 * _document.js bertindak sebagai pembungkus untuk semua halaman dan yang akan pertama dijalankan bahkan sebelum _app.js
 * biasanya, _document.js digunakan untuk tag pembungkus seperti <html>, <head>, dan <body>
 * file lain selain _document.js TIDAK AKAN BISA mengakses tag pembungkus seperti <html>, <head>, dan <body>
 */
export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
