import { useState } from 'react';
import './serach.scss';
import axios from 'axios';
import Button from '../Button/Button';
import EditDefect from '../EditDefect/EditDefect';

const Search = () => {
  const [search, setSearch] = useState('');
  const [searchData, setSearchData] = useState({

  });
  const [showEditDefect, setShowEditDefect] = useState(false);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const {value} = event.target;
    setSearch(value);
   
  }
  const handleSearchSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(search)
     axios.post(`http://localhost:3000/search`, {search})
       .then((response) => {
         const data = response.data;
         setSearchData(data);
         console.log(data);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleSearchDataClick = () => {
  setShowEditDefect(true)
}
  return (
    <div className='Search'>
      <form action="" onSubmit={handleSearchSubmit}>
        <label htmlFor="search"></label>
        <input type="text" id="search" placeholder='search' value={search} onChange={handleSearchChange} />
        <Button>Submit</Button>
      </form>

      <div>
        <p onClick={handleSearchDataClick}>{searchData.defectId}  {searchData.title}</p>
      </div>
      {searchData && showEditDefect && <EditDefect defect={searchData} />}
      </div>
  )
}

export default Search;