import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const taskList = useNavigate()
  const initialState = {
    name:'',
    email:''
  }

  // const [allFormdata,setAllFormData] = useState([])
  const [formData,setData] = useState(initialState)
// console.log(formData);
  const onChangeHandler = (e)=>{
    setData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const formHandler =(e)=>{
    e.preventDefault()

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

  }

   return(
    <>
    <form onSubmit={formHandler}>
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