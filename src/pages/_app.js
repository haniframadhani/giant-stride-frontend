import Footer from '@/components/components/footer'
import Navbar from '@/components/components/navbar'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
  }
  return (
    <div className="font-['Poppins']">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
