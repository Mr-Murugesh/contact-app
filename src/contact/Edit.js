import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Edit(props) {

  const [id, setID] = useState(null);
  const [name, setName] = useState('');
  const [phnumber, setPhnumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');



  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setName(localStorage.getItem('name'));
    setPhnumber(localStorage.getItem('phnumber'));
    setEmail(localStorage.getItem('email'));
    setCountry(localStorage.getItem('country'));
   
}, []);

const updateAPIData = (e) => {
  e.preventDefault();
axios.put(`https://630db241109c16b9abeb24b7.mockapi.io/Cloud/${id}`, {
      name,
      phnumber,
      email,
      country, 
    }).then(()=>{
      window.location.reload()
    console.log(id,name,country);
    })
}

  return (
    <div className="container-fluid col-lg-6 col-md-6 col-12">
    <form className="form  my-5 abc1">
      <h4 className="heading">Edit Your Contact List</h4>
      <input
        className="form-control my-2 inpu1"
        type="text"     
        placeholder="Enter Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        
      />

      <input
        className="form-control my-2 inpu1"
        type="text"
        placeholder="Enter Your Ph-Number"
        value={phnumber}
        onChange={(e) => setPhnumber(e.target.value)}
      />

      <input
        className="form-control my-2 inpu1"
        type="text"
        placeholder="Enter Your Email"      
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="form-control my-2 inpu1"
        type="text"
        placeholder="Enter Your Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button className="btn btn-primary my-4 button" type='submit' onClick={updateAPIData}>
        Update-User
      </button>
      <button className='btn btn-danger button' onClick={()=>
            {
                props.setEdit(false)
            }}>Cancel</button>
    </form>
  </div>

  )
}

export default Edit