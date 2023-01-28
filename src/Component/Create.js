import React from 'react'
import {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Create() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("");
    const history = useNavigate();

const header ={"Access-control-allow-origin":"*"};

    const handleSumit = (e) => {
        e.preventDefault();
        console.log("clicked")
        axios.post(
            'https://63b3aece5901da0ab384cabd.mockapi.io/crud-1st',
            {name:name,email:email,header,
        })
        .then(() =>{

            history("/read");
        });
    };
  return (
    <>

    
    <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=> setName(e.target.value)}/>
  </div>

  <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" className="form-control" 
    
    aria-describedby="emailHelp" onChange={(e)=> setEmail(e.target.value)}
    />
    </div>
  <button type="submit" className="btn btn-primary" onClick={handleSumit}>Submit</button>
  {name}
  {email}
</form> 
    </>
  )
}

export default Create;