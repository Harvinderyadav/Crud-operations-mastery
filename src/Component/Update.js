import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import axios from "axios";
 

const Update = () => {
    const[id,setId] = useState(0);
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    
    useEffect(() => {
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);
    const navigate = useNavigate();

    function handleUpdate(e) {
        e.preventDefault();
        axios.put(`https://63b3aece5901da0ab384cabd.mockapi.io/crud-1st/${id}`,{
            name:name,
            email:email,
        })
        .then(() => {
          navigate("/read");
        })
      }
    

  return (
<>

    <h2>Update</h2>
<form>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Name</label>
<input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
</div>

<div className="mb-3">
<label className="form-label">Email address</label>
<input type="email" className="form-control" 
value={email} onChange={(e)=> setEmail(e.target.value)}
/>
</div>

<button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
{name}
{email}
</form> 
</>  )
}

export default Update;