import React, {useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom'

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  useEffect(() =>{
    const auth = localStorage.getItem("user");
    if(auth){
      Navigate("/");
    }
  })

  const collectData = async ()=>{
    console.log(name, email, password);
    let result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify({name, email, password}),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    console.log(result);
    if(result){
      Navigate('/');
    }
  }

  return (
    <div className="container my-4">
      <h3>Register</h3>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <button onClick={collectData} type="button" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
}
