import { NextPage } from 'next'
import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import styles from './signin.module.scss'

const SignIn: NextPage = (props) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const router = useRouter()

  const login = async () => {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: userInfo.email,
        password: userInfo.password,
      }),
    })

    if (!res.ok) {
      return console.error(res)
    }
    const data = await res.json()
    if (data) {
      setCookie('token', data?.token)
      router.push('/')
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
