import axios from "axios";
import { useEffect, useState } from "react";

const Read = () => {
const [datas,setDatas] = useState()
console.log(datas);

const getDataFromJson = async () => {
    try {
      const response = await axios.get("https://6594b2411493b011606ac138.mockapi.io/CRUD");
      setDatas(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };


useEffect(() => {
    getDataFromJson();
}, []);

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
        return <>
         <tbody>
      <tr>
      <td scope="row">{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td><button className="btn-success">Edit</button></td>
      <td><button className="btn-danger">Delete</button></td>
      </tr>
  </tbody>
        </>
    })
  }
 
</table>
        </>
    );
};

export default Read;