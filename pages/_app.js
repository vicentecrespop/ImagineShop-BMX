import Layout from '@/components/Layout'
import CartProvider from '@/contexts/CartContext'
import '@/styles/globals.css'
import '@/styles/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return ( 
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </>
  )
}
