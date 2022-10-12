import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Table(props) {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`https://630db241109c16b9abeb24b7.mockapi.io/Cloud`)
      .then((response) => {
        console.log(response.data)
        setAPIData(response.data);
      })
  }, []);

  const setData = (data) => {

    props.setEdit(true);
    let { id, name, email, phnumber, country } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phnumber', phnumber)
    localStorage.setItem('country', country)
    console.log(id,name);
  }

  const getData = () => {
    axios.get(`https://630db241109c16b9abeb24b7.mockapi.io/Cloud`)
      .then((getData) => {
        setAPIData(getData.data);
      })
  }

  const onDelete = (id) => {
    axios.delete(`https://630db241109c16b9abeb24b7.mockapi.io/Cloud/${id}`)
      .then(() => {
        getData();
      })
  }

  return (

    <div className="row">

      {APIData.map((data) => {
        return (
          <div key={data.id} className=' col-lg-4 col-md-6 my-4 cs '>
            <div className="card1">
              <p>Name:</p>
              <span>{data.name}</span>
              <br></br>
              <p>Ph-number:</p>
              <span>{data.phnumber}</span>
              <br></br>
              <p>Email:</p>
              <span>{data.email}</span>
              <br></br>
              <p>Country:</p>
              <span>{data.country}</span>

              <div className='Alter'>

                <Link to='/Detail'>
                  <button className='btn edit' onClick={() => setData(data)}>Edit</button>
                </Link>
                <button className='btn delete' onClick={() => onDelete(data.id)}>Delete</button>
              </div>
            </div>
          </div>
        );
      })}


    </div>

  );
}

export default Table;
