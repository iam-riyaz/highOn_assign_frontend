import { useEffect, useMemo, useState } from "react";

import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"


export const Map_page = () => {
  
  
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");


  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showLocation, showError);
    } else {
      alert("geolocation not available in this browser");
    }
  };
  setTimeout(getLocation, 2000);

  const showLocation = (position) => {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
    setLatitude(lat);
    setLongitude(long);
  };

  const showError = (e) => {
    console.log(e);
    alert("please allow location service");
  };

  useEffect(() => {
    console.log(longitude, latitude);
  }, [latitude, longitude]);


  const {isLoaded}=useLoadScript({
    googleMapsApiKey:"AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM",
  })
  if(!isLoaded)
  {
    return (<>
    <h2>loading..........</h2>
    </>)
  }
  


  return (
    <>
    <h2>map</h2>
       <GoogleMap zoom={10} center={{lat:44,lng:-80}}></GoogleMap>
      
    </>
  );
};



const showMap= ()=>{

  return(
    <>
    <GoogleMap zoom={10} center={{lat:44,lng:-80}}></GoogleMap>
    </>
  )

}






{/* <script
  async
  defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM&callback=initMap"
></script>; */}
