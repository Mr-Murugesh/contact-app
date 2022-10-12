import React from "react";
import Navbar from "./Navbar";
import Register from "./Register";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./contact/Table";
import User from "./contact/User";
import { useState } from 'react'
import Edit from "./contact/Edit";

function App() {

  const [edit, setEdit] = useState(false);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Detail" element={<>
            {(edit) ? (<Edit edit={edit} setEdit={setEdit} />) : (<User />
            )}
            <Table  setEdit={setEdit} />
          </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
