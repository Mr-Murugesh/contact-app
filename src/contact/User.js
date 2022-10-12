import React, { useState } from "react";
import axios from 'axios';

function User() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnumber, setPhnumber] = useState('');
  const [country, setCountry] = useState('');

  const postData = (e) => {
    e.preventDefault();
    axios.post(`https://630db241109c16b9abeb24b7.mockapi.io/Cloud`, {
        name,
        email,
        phnumber,
        country
    }).then(()=>window.location.reload())
}
 
  return (
   
   <div className="container-fluid col-lg-6 col-md-6 col-12">
      <form className="form  my-5 abc1">
        <h4 className="heading">Your Contact List</h4>
        <input
          className="form-control my-2 inpu1"
          type="text"
          placeholder="Enter Username"
          onChange={(e) =>setName(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="text"
          placeholder="Enter Your Ph-Number"
          onChange={(e) =>setPhnumber(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="Email"
          placeholder="Enter Your Email"
          onChange={(e) =>setEmail(e.target.value)}
        />

        <input
          className="form-control my-2 inpu1"
          type="text"
          placeholder="Enter Your Country"
          onChange={(e) =>setCountry(e.target.value)}
        />

        <button className="btn btn-primary my-4 button" type='submit' onClick={postData}>
          Add-User
        </button>
      </form>
    </div>
  );
}

export default User;
