import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const goReadPage = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem('id')) 
        setName(localStorage.getItem('name')) 
        setEmail(localStorage.getItem('email')) 
    },[])

    const updateHandler = async (e)=>{
        e.preventDefault()

    axios.put(`https://6594b2411493b011606ac138.mockapi.io/CRUD/${id}`, {
      name: name,
      email:email
    })
    .then(()=> {
    goReadPage('/read')
    })
    .catch((error) => {
        console.error("Error deleting user:", error);
    });
    }

    return (
        <>
     <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
    <h1>Update</h1>
    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center",gap:'.3rem'}}>
    <NavLink to = '/read'><button className="btn-warning">Read</button></NavLink>
    <NavLink to = '/'><button className="btn btn-info">Home</button></NavLink>
    </div>
    </div>
    <form onSubmit={updateHandler}>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" onChange={(e)=>setName(e.target.value)}
    value={name}
    className="form-control" 
    id="name" 
    name="name"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label> 
    <input type="email" onChange={(e)=>setEmail(e.target.value)}
    value={email}
    className="form-control" 
    id="email" name="email" 
    aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Update</button>
</form>
        </>
    );
};

export default Update;