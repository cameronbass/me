import React, { useState } from 'react'

export default function Register(props) {
  const [token, setToken] = useState()

  function handleSubmit(event) {
    event.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      body: new URLSearchParams({
        username: "another",
        email: "even@test.com",
        password: "password"
      })
    };

    fetch(process.env.GATSBY_SERVER_URI + `login`, requestOptions)
      .then((response) => response.json())
      .then((data) => { 
        setToken(data.token)
        localStorage.setItem("token", data.token);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="login" />
      </form>

      <div>
        <h4>Token: {token}</h4>
      </div>
    </>
  )
}
