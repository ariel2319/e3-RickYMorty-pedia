import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {

  const [location, setLocation] = useState({})

  useEffect(() => {
    const locationRdm = Math.floor(Math.random() * 126) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationRdm}`)
      .then(res => setLocation(res.data))
  }, [])

  console.log("location", location)

  return (

    <div className="App">
      <div className='header-img'></div>
      <Location
        location={location}
        setLocation={setLocation}
      />
      <div className='foot'>
        <Footer/>
      </div>
    </div>

  )
}

export default App
