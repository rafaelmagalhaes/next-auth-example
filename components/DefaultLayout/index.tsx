import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'

export default function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main className="mainContent">{children}</main>
      <Footer />
    </>
  )
}
