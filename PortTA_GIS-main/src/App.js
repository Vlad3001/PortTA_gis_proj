import React, { useMemo, useState } from "react";
import {GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import './App.css';


const initialView = 'GIS/new/index.html';


function App() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAKe1T7Jeg9naSanVCnUf29NNFdvFfIo6U",
})

const [view] = useState(initialView)


  if(!isLoaded) return <div>Loading...</div>;
  return (
      <div className='content-container'>
        <div className='google-map-image-container'>
          <Map />
          <a className='link' href="https://www.namal.co.il/en/">
            <img className='image' src={require("./portTA.jfif")}/>
          </a>
            <img className='logo' src={require("./port_logo.png")}/>
        </div>
        {<iframe className='map' src={view}/>}
      </div>
  );
}

function Map() {
  const portTA = useMemo(() => ({ lat: 32.072679, lng: 34.787098}), []);
  return (
    <GoogleMap zoom={16} center={portTA} mapContainerClassName="map-container" >
        <MarkerF position={portTA} />
    </GoogleMap>
  )
}

export default App;
