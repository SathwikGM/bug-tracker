import { useState } from "react";
import axios from 'axios';
import "./Create.scss";

const Create = () => {
  const [input, setInput] = useState({
    defectId:"",
    title: "",
    description: "",
    owners: "",
    status: "",
    priority: "",
    environment: "",
    createdBy: "",
  });

// Function to handle input changes
  const handleInputChange = (event) => { 
    const { name, value } = event.target;
    setInput({ ...input, [name]: value })
    
  }

  const createIssue = (newIssue) => {
    axios
      .post("http://localhost:3000/createissue", newIssue)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Function to handle form submission
  const handleCreateSubmit = (event)=>{
    event.preventDefault();
    createIssue(input);
     console.log(input)
  }


  return (
    <form  onSubmit={handleCreateSubmit} action="">
      <h1>Create Issue</h1>
    <label htmlFor="defectid">Defect ID</label>
      <input type="text" placeholder="Defect ID" name="defectId" id="defectId" value={input.defectId}  onChange={handleInputChange}/>
      
      <label htmlFor="title">Title</label>
      <input type="text" placeholder="Title" name="title" id="title" value={input.title} onChange={handleInputChange}/>
      
      <label htmlFor="description">Description</label>
      <input type="text" placeholder="Description" name="description" id="description" value={input.description} onChange={handleInputChange} />
      
      <label htmlFor="owners">Owners</label>
      <input type="text" placeholder="Oweners" name="owners" id="owners" value={input.owners} onChange={handleInputChange}/>
      
      <label htmlFor="status">Status</label>
      <input type="text" placeholder="Status" name="status" id="status" value={input.status} onChange={handleInputChange} />

      <label htmlFor="priority">Priority</label>
      <input type="text" placeholder="Priority" name="priority" id="priority" value={input.priority} onChange={handleInputChange} />
      
      <label htmlFor="environment">Environment</label>
      <input type="text" placeholder="Environment" name="environment" id="environment" value={input.environment} onChange={handleInputChange} />

      <label htmlFor="createdBy">Created By</label>
      <input type="text" placeholder="Created By" name="createdBy" id="createdBy" value={input.createdBy}  onChange={handleInputChange}/>
      
    <button>Create</button>
    </form>
  )

}

export default Create;