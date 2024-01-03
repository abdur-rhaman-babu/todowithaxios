import axios from "axios";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Create = () => {
  const taskList = useNavigate()
  const initialState = {
    name:'',
    email:''
  }


  const [formData,setData] = useState(initialState)
// console.log(formData);
  const onChangeHandler = (e)=>{
    setData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const createHandler =(e)=>{
    e.preventDefault()

    if (formData.name.trim() === "" || formData.email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields",
      });
      return;
    }

    axios.post('https://6594b2411493b011606ac138.mockapi.io/CRUD', {
      name: formData.name,
      email:formData.email
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    taskList('/read')
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

  }

   return(
    <>
    <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
    <h1>Create</h1>
    <NavLink to = '/read'><button className="btn-warning">Read</button></NavLink>
    </div>
    <form onSubmit={createHandler}>
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="name" onChange={onChangeHandler}
    value={formData.name}
    className="form-control" 
    id="name" 
    name="name"/>
  </div>
  <div className="mb-3">
    <label className="form-label">Email address</label> 
    <input type="email" onChange={onChangeHandler}
    value={formData.email}
    className="form-control" 
    id="email" name="email" 
    aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
   )
};

export default Create;