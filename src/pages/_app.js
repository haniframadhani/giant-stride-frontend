import Footer from '@/components/components/footer'
import Navbar from '@/components/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
