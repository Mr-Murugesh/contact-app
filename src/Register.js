import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

function Register() {

  const[users,setUsers]=useState([])
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[cpassword,setCpassword]=useState('')
  

  let navigate=useNavigate()

const register=(e)=>{

  e.preventDefault();

  let userCount = users.filter((user) => {
    return user.email == email;
})

if (userCount.length == 0) {
  let user = {
      name: name,
      email: email,
      password:password,
      cpassword:cpassword
  };
  users.push(user);
  console.log(users);
  localStorage.setItem('userdata',users)
  alert("user added successfully")
  setName('')
  setEmail('')
  setPassword('')
  setCpassword('')
  navigate('/')
}
else{
  alert("User already Exist")
}
}

 
  return (
    <div className="container-fluid col-lg-6 col-md-8 col-10">
      <form className="form  my-5 abc1">
        <h4 className="heading">Register Your Account</h4>
        <input
          className="form-control my-2 inpu1"
          type="text"
          name="name"
          placeholder="Enter Username"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="Email"
          name="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />
        <input
          className="form-control my-2 inpu1"
          type="password"
          name="cpasword"
          placeholder="Enter Your Confrim password"
          value={cpassword}
          onChange={(e)=>setCpassword(e.target.value)}
          required
        />
        <button className="btn btn-primary my-4 button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
