import Link from 'next/link'
import { useState } from 'react'
import { removeCookies } from 'cookies-next'
export default function Navbar() {
  const [authenticated, setAuthenticated] = useState(false)
  const logout = () => {
    removeCookies(`token`)
  }
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {authenticated ? (
          <li style={{ float: 'right' }}>
            <a onClick={logout}>Logout</a>
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
