import { NextPage } from 'next'
import { useState } from 'react'
const Register: NextPage = (props) => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })

  return (
    <div>
      <div className="title">
        <h2>Register</h2>
      </div>
      <div className="container f orm">
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
        <button className="button">Register</button>
      </div>
    </div>
  )
}

export default Register
