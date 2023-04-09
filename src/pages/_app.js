import Footer from '@/components/components/footer'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
