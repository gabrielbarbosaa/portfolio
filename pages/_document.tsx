import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head title='Gabriel Barbosa'>
      <link rel="icon" type="image/png" sizes="16x16" href="images/favicon.ico" />
      <style>
        @import url(`https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap`);
      </style>  
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}