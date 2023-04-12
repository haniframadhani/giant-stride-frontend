import Footer from '@/components/components/footer'
import Navbar from '@/components/components/navbar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <div className="font-['Poppins']">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
