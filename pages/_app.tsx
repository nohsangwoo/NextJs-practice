import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import '../styles/globals.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </Layout>
  )
}

export default MyApp
