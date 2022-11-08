import React from 'react';
import '../App.css'

const LocationInfo = ({ location }) => {
  return (
    <div>

      {
        (location.residents?.length === 0) ?

          <div className='container-location'>
            <div className='container-location-title'>
              <h1> Nobody's Home.. 🚀</h1>
            </div>
          </div>

          :

          <div className='container-location'>
            <div className='container-location-title'>
              <h1>{location?.name}</h1>
            </div>
            <div className='container-location-info'>
              <div><b>  Residents:</b> {location?.residents?.length}  </div>
              <div><b>  Dimension:</b> {location?.dimension}  </div>
              <div><b>  Type:</b> {location?.type}  </div>
              <div><b>  ID:</b> {location.id}  </div>
            </div>
          </div>
      }
    </div>
  );
};

export default LocationInfo;