import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '@/models'
import { EmptyLayout } from '@/components/layouts'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('App re-render');

  const Layout = Component.Layout ?? EmptyLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
