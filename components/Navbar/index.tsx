import Link from 'next/link'
import { removeCookies } from 'cookies-next'
import { useAuthStore } from '~/store/useAuthStore'
import { useRouter } from 'next/router'
export default function Navbar() {
  const router = useRouter()

  // import state values from useAuthStore
  const authenticated = useAuthStore((state) => state.authenticated)
  const setAuthentication = useAuthStore((state) => state.setAuthentication)
  const setUser = useAuthStore((state) => state.setUser)

  const logout = () => {
    removeCookies(`token`)
    setAuthentication(false)
    setUser({})
    router.push('/auth/signin')
  }

  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {authenticated ? (
          <li style={{ float: 'right' }}>
            <a onClick={logout}> Logout </a>
          </li>
        ) : (
          <li style={{ float: 'right' }}>
            <Link href="/auth/signin">Login</Link>
          </li>
        )}
      </ul>
    </header>
  )
}
