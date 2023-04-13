import Navbar from '~/components/Navbar'
import Footer from '~/components/Footer'
import { useEffect } from 'react'
import { getCookie } from 'cookies-next'
import { useAuthStore } from '~/store/useAuthStore'
export default function Layout({ children }: any) {
  const token = getCookie('token')
  const setAuthentication = useAuthStore((state) => state.setAuthentication)

  useEffect(() => {
    console.log(token)
    if (token) {
      setAuthentication(true)
    }
  }, [token])
  return (
    <>
      <Navbar />
      <main className="mainContent">{children}</main>
      <Footer />
    </>
  )
}
