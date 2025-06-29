import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if(auth){
      navigate("/");
    }
  })

  const handleLogin = async () => {
    console.log("email", "password", email, password);
    let result = await fetch("http://localhost:5000/login" ,{
      method: "POST",
      body: JSON.stringify({email, password}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    console.log(result);
    if(result.auth){
      localStorage.setItem("user", JSON.stringify(result.user));
      localStorage.setItem("token", JSON.stringify(result.auth));
      navigate("/");
    }else{
      alert("Please enter correct details");
    }
  };
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
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            onClick={handleLogin}
            type="button"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
