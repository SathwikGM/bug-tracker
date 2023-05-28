import axios from "axios";
import { useState, useEffect } from "react";
import "./DefectList.scss";
import { IDefect } from "../../Types/DefectTypes";
import Button from "../Button/Button";
import EditDefect from "../EditDefect/EditDefect";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setDefects } from "../../reducers/slices/defectsSlice";



const DefectList = () => {

  const dispatch = useAppDispatch();
  const defects = useAppSelector(state => state.defects.defects);
  const [selectedDefect, setselectedDefect]=useState<IDefect | null>(null)
  // const [defects, setDefects] = useState<IDefect[]>([
  //   {
  //     _id: "",
  // defectId: "",
  // title: "",
  // description: "",
  // owners: [],
  // status: "",
  // priority: "",
  // environment: "",
  // createdBy: "",
  // createdDate: "",
  //   }
  // ]);


   useEffect(() => {
    fetchDefects();
  },[])

  const fetchDefects = async () => {
    axios.get('http://localhost:3000/defectList')
  .then(function (response) {
    // handle success
    const defectsData = response.data;
    dispatch(setDefects(defectsData))
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

  const handleDelete = (id:string) => {
    console.log(id)
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then(() => {
        fetchDefects();
      })
    .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  
  const handleEdit = (defect:IDefect) => {
    
    setselectedDefect(defect)
  }

  return (<>
      {selectedDefect && (
        <div className="edit-defect-popup">
          <EditDefect defect={selectedDefect} />
        </div>
      )}
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
            <td><Button onClick={()=>handleEdit(defect)} style={{width:"20px", backgroundColor:"#fff"}}><i className='fa fa-edit' style={{fontSize:"24px", color: 'blue'}}></i></Button></td>
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