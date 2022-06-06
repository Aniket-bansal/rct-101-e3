import React, { useState, useContext } from "react";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Home from "./Home";

const Login = () => {
//  const{state:ContextState, login} = useContext(AuthContext)
//  const{isloggedIn,loginError,isloginPending} = ContextState;
//  const[state,setState] = useState("");
//   const onSubmit = (e) => {
//     const {email,password} = state;
//     login(email, password);
//     setState({
//       email:'',
//       password:''
//     });
   function home() {
     window.location = './Home'
   }

  
  return (
    <div>
      <input data-cy="login-email" placeholder="Enter your email" />
      <input data-cy="login-password" placeholder="Enter your password" />
      <button data-cy="login-submit" onClick={home}>Submit</button>
     
    </div>
    
  );
};

export default Login;
