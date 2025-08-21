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
        {process.env.NEXT_PUBLIC_ENABLE_SPEED_INSIGHTS === '1' ? (
          <script defer src="/_vercel/speed-insights/script.js" />
        ) : null}
      </body>
    </Html>
  )
}