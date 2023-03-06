import { NextPage } from 'next'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useAuthStore } from '~/store/useAuthStore'

const SignIn: NextPage = (props) => {
  // set UserInfo state with inital values
  const [userInfo] = useState({ email: 'kminchelle', password: '0lelplR' })
  const router = useRouter()

  // import state from AuthStore
  const setUser = useAuthStore((state) => state.setUser)
  const setAuthentication = useAuthStore((state) => state.setAuthentication)

  const login = async () => {
    // do a post call to the auth endpoint
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userInfo.email,
        password: userInfo.password,
      }),
    })

    // check if response was ok
    if (!res.ok) {
      return console.error(res)
    }
    // retrieve data from the response
    const data = await res.json()

    // check if we have data
    if (data) {
      setUser(data) // set data to our user state
      setAuthentication(true) // set our authentication state to true
      setCookie('token', data?.token) // set token to the cookie
      router.push('/') // redirect to home page
    }
  }

  return (
    <div>
      <div className="title">
        <h2>Login</h2>
      </div>
      <div className="container form">
        <label>
          <b>Username</b>
        </label>
        <input
          type="text"
          className="input"
          placeholder="Enter Username"
          name="uname"
          value={userInfo.email}
          onChange={(event) => (userInfo.email = event.target.value)}
          required
        />
        <label>
          <b>Password</b>
        </label>
        <input
          type="password"
          className="input"
          placeholder="Enter Password"
          value={userInfo.password}
          onChange={(event) => (userInfo.password = event.target.value)}
          name="psw"
          required
        />
        <button onClick={login} className="button">
          Login
        </button>
      </div>
    </div>
  )
}

export default SignIn
