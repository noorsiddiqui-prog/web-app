import React from 'react'
import WrappedMap from './Map';
import * as parksData from "../../../Data/skateboard-parks.json"
import AutoCompletePlaces from './AutoCompletePlaces';

const REACT_APP_GOOGLE_KEY = "AIzaSyC4NUH6R7uOutj3H5f2NYbzGX1um_4OlQs";


const Second_Map = () => {
  return (
    <>

    <div>
        {/* AutoCompletePlaces requires billing procedure */}
        <AutoCompletePlaces/> 
    </div>
    <div style={{height: "100vh", width: "100vw "}}>
        <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
        loadingElement = { <div style={{height: "100%"}} />}
        containerElement = {<div style={{height: "100%"}} />}
        mapElement = {<div style={{height: "100%"}} />}
        />
    </div>
    </>
  )
}

export default Second_Map