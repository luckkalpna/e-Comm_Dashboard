import React from 'react'

export default function Login() {
  const  [email, setEmail] = React.useState("");
  const  [password, setPassword] = React.useState("");
  const handleLogin = () =>{
    console.log(email, password);
  }
  return (
    <>
    <div className="container my-4">
      <h3>Login</h3>
      <form>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin} type="button" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
    </>
  )
}
