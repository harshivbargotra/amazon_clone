import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate  } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPasswaord] = useState("");
  const navigate = useNavigate ();

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth=>{
      navigate('/')
    })
    .catch(error=>alert(error.message))
   
  };
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
      console.log(auth);
      if(auth){
        navigate('/')
      }
    })
    .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* {err && <p>Please enter valid</p>} */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPasswaord(e.target.value)}
          />
          <button className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
