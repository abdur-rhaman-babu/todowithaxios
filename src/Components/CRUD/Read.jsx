import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
const [datas,setDatas] = useState()
// console.log(datas);

const getDataFromJson = async () => {
    try {
      const response = await axios.get("https://6594b2411493b011606ac138.mockapi.io/CRUD");
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

// deleteUser
const deleteUser = (id) => {
  axios.delete(`https://6594b2411493b011606ac138.mockapi.io/CRUD/${id}`)
    .then(() => {
      getDataFromJson();
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
};

useEffect(() => {
    getDataFromJson();
}, []);

// setDateToLocalStroage
const setDateToLocalStroage = (id,name,email)=>{
  localStorage.setItem('id',id)
  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
}


return (
<>
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    datas && datas.map((data)=>{
      return <Fragment key={data.id}>
      <tbody>
      <tr>
      <td scope="row">{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td><Link to = "/update"><button className="btn-success" onClick={()=>setDateToLocalStroage(data.id,data.name,data.email)}>Edit</button></Link></td>
      <td><button className="btn-danger" onClick={()=>deleteUser(data.id)}>Delete</button></td>
      </tr>
      </tbody>
      </Fragment>
    })
  }
 
</table>
        </>
    );
};

export default Read;