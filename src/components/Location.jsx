import axios from 'axios';
import React, { useState } from 'react';
import GetResident from './GetResident';
import LocationInfo from './LocationInfo';
import '../App.css'

const Location = ({location, setLocation}) => {

  const [idSearch, setIdSearch] = useState ("")

  const searchById = () => {
    (idSearch<1||idSearch>126) ? alert("Only 126 locations..Sorry!") :
    axios
      .get(`https://rickandmortyapi.com/api/location/${idSearch}`)
      .then(res=>setLocation(res.data))
  }

  return (
    <div>
      
      <div className='header'>

        <h1>
          Rick & Morty Wiki
        </h1>
        
      </div>

      <div>
          <LocationInfo
            location={location}
          /> 
      </div>
      
      <div>

        <input style={{textAlign: "center"}} placeholder='Search By Id' type="text" value={idSearch} autoFocus onChange={e=>setIdSearch(e.target.value)}/>
        <button onClick={searchById} > Search </button>

      </div>     

      <div className='container-resident'>

        {
          location.residents?.map((resident) =>
          <GetResident
            URLresident={resident}
            key ={resident}
          />
          )
        }

      </div>

    </div>
  );
};

export default Location;