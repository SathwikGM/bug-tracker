import axios from "axios";
import { useState, useEffect } from "react";
import "./DefectList.scss";
import { IDefect } from "../../Types/DefectListTypes";
import Button from "../Button/Button";




const DefectList = () => {
  const [defects, setDefects] = useState<IDefect[]>([
    {
      _id: "",
  defectId: "",
  title: "",
  description: "",
  owners: [],
  status: "",
  priority: "",
  environment: "",
  createdBy: "",
  createdDate: "",
    }
  ]);

   useEffect(() => {
    fetchDefects();
  },[])

  const fetchDefects = async () => {
    axios.get('http://localhost:3000/defectList')
  .then(function (response) {
    // handle success
    const defectsData = response.data;
    setDefects(defectsData)
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }

  const handleDelete = (defectId:string) => {
    console.log(defectId)
    axios.delete(`http://localhost:3000/delete/${defectId}`)
      .then(() => {
        fetchDefects();
      })
    .catch(function (error) {
    // handle error
    console.log(error);
  })
 }

    return (<>
      <div className="DefectList">
        <table>
      <thead>
        <tr>
          <th>Defect ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Owners</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Environment</th>
          <th>Created By</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
        {defects.map(defect => (
          <tr key={defect._id}>
            <td>{defect.defectId}</td>
            <td>{defect.title}</td>
            <td>{defect.description}</td>
            <td>{defect.owners.join(', ')}</td>
            <td>{defect.status}</td>
            <td>{defect.priority}</td>
            <td>{defect.environment}</td>
            <td>{defect.createdBy}</td>
            <td>{defect.createdDate}</td>
            <td><Button onClick={()=>handleDelete(defect._id)} style={{width:"20px", backgroundColor:"#fff"}} ><i className="material-icons" style={{fontSize:"24px", color:"red" }}>delete</i></Button></td>
          </tr>
        ))}
      </tbody>
      </table>
      </div>
      </>
    )

}

export default DefectList