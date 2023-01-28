import axios from 'axios';
import React from 'react'
import {useState,useEffect} from "react";


const Read = () => {
  const [data, setData] = useState([]);

        function getData(){
            axios.get("https://63b3aece5901da0ab384cabd.mockapi.io/crud-1st")
            .then((res) =>{
                console.log(res.Data);
                setData(res.Data);
            })
        }
        function handleDelete(id) {
          axios
            .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube/${id}`)
            .then(() => {
              getData();
            });
        }
        const setToLocalStorage = (id, name, email) => {
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          localStorage.setItem("email", email);
        };
      

    useEffect(() => {
        getData();
    },[data]);

  return (
    <>
    <h2>read operations</h2>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  {
    data.map((eachData) => {
        return (
            <>
  <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
      <td><button className="btn-sucess">Edit</button></td>
      <td><button className="btn-danger">Delete</button></td>
    </tr>
    
  </tbody>
</>
        )
    })
}
</table>
    </>
  )
}

export default Read;