import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
        <title>Apple store</title>
        <link rel='icon' href='/appleIcon.ico'/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}