import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css'

const GetResident = ({URLresident}) => {

  const [residentInfo, setResidentInfo] = useState ({})

  useEffect(()=>{
    axios
      .get(URLresident)
      .then(res=>setResidentInfo(res.data))
  },[])

  console.log ("resident infoooo", residentInfo)

  return (
    <div className='card-container'>
      <div className='card'>
        <div> 
          <img src={residentInfo.image} alt="" />
        </div>
        
        <div className='card-info'>
        <h2>{residentInfo.name}</h2>
          <ul>
            <li>
              <b> Specie: </b> {residentInfo.species}
            </li>
            <li>
              <b> Type: </b> {residentInfo.type}
            </li>
            <li>
              {residentInfo.status === "Alive" ? <b style={{color: "green"}}> Status: </b> :<b style={{color: "red"}}> Status: </b>} {residentInfo.status} {residentInfo.status === "Alive" ? "💚" : "💔"}
            </li>
            <li>
              <b> Origin: </b> {residentInfo.origin?.name}
            </li>
            <li>
              <b> Episodes: </b> {residentInfo.episode?.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GetResident;