import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script>
          {`
            window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
          `}
        </script>
        <script defer src="/_vercel/speed-insights/script.js" />
      </body>
    </Html>
  )
}