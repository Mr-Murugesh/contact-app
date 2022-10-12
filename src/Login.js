import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {

  const [userdata,setUserdata]=useState([])
  const[logindata,setLogindata]=useState([])
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')

  let navigate=useNavigate()

  useEffect(()=>
  {
    
    setUserdata(localStorage.getItem('userdata'))
    console.log(userdata)
  },[])

  const login=(e)=>{

    e.preventDefault();
    if(email!=='' && password!=='')
    { let user = {
      email:email,
      password:password
      };
      logindata.push(user);

      if(userdata.email === logindata.email)
      {
        alert("hi")
        // navigate('/Detail')
      }
      else{
        alert("username or password doesn't match")
      }

    }
    else{
      alert("fields can't be empty")
    }
   
   

}

  return (
    <div className="container-fluid col-lg-6 col-md-8 col-10">
      <form className="form  my-5 abc">
        <h4 className="heading">Login Your Account</h4>
        <input
          className="form-control my-4 inpu"
          type="text"
          placeholder="Enter Username"
          required
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="form-control inpu"
          type="password"
          placeholder="Enter Your Password"
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />      
       <button  className="btn btn-primary my-4 button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
