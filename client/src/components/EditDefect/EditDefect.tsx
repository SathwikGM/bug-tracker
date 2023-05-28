import { useState } from "react";
import axios from 'axios';
import "./EditDefect.scss";
import Button from "../Button/Button";
import { InputState } from '../../Types/CreateIssueTypes';
import { IDefect } from "../../Types/DefectTypes";

interface EditDefectProps {
  defect: IDefect;
}

const EditDefect: React.FC<EditDefectProps> = ({ defect}) => {
  const {_id, defectId, title, description, owners, status, priority, environment, createdBy} = defect;
  const [input, setInput] = useState<InputState>({
    _id:_id,
    defectId:defectId,
    title: title,
    description: description,
    owners: owners,
    status: status,
    priority: priority,
    environment: environment,
    createdBy: createdBy,
  });

  

// Function to handle input changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>| React.ChangeEvent<HTMLSelectElement>) => { 
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
  }

  const UpdateDefect = (updatedefect: InputState) => {
    axios
      .put("http://localhost:3000/updatedefect", updatedefect)
      .then((response) => {
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle form submission
  const handleCreateSubmit: React.FormEventHandler<HTMLFormElement> = (event)=>{
    event.preventDefault();
    UpdateDefect(input);
    //  console.log(input)
  }


  return (
    <form className="CreateIssue" onSubmit={handleCreateSubmit} action="">
      <h1>Create Issue</h1>
    <label htmlFor="defectid">Defect ID</label>
      <input type="text" placeholder="Defect ID" name="defectId" id="defectId" value={input.defectId}  onChange={handleInputChange} required/>
      
      <label htmlFor="title">Title</label>
      <input type="text" placeholder="Title" name="title" id="title" value={input.title} onChange={handleInputChange} required/>
      
      <label htmlFor="description">Description</label>
      <input type="text" placeholder="Description" name="description" id="description" value={input.description} onChange={handleInputChange} required />
      
      <label htmlFor="owners">Owners</label>
      <input type="text" placeholder="Oweners" name="owners" id="owners" value={input.owners} onChange={handleInputChange} required/>
      
      <label htmlFor="status">Status</label>
      <input type="text" placeholder="Status" name="status" id="status" value={input.status} onChange={handleInputChange} required/>

      <label htmlFor="priority">Priority</label>
      {/* <input type="text" placeholder="Priority" name="priority" id="priority" value={input.priority} onChange={handleInputChange} required /> */}
         <select name="priority" value={input.priority} id="priority" onChange={handleInputChange} required>
        <option value="">Select an option</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      
      <label htmlFor="environment">Environment</label>
      <input type="text" placeholder="Environment" name="environment" id="environment" value={input.environment} onChange={handleInputChange} required />

      <label htmlFor="createdBy">Created By</label>
      <input type="text" placeholder="Created By" name="createdBy" id="createdBy" value={input.createdBy}  onChange={handleInputChange} required/>
      
    <Button style={{backgroundColor:"#3a86ff", color:"#fff"}}>Save</Button>
    </form>
  )

}

export default EditDefect;