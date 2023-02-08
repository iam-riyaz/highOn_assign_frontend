import React from 'react'
import { useEffect, useMemo, useState } from "react";
import axios from "axios";



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



  return (
    <>
      <h2>map</h2>
      <div>
      <iframe

              style={{

                width: "90%",

                height: "25rem",

                margin: "auto",

                padding: "auto",
              }}

              id="gmap_canvas"

              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29472.562095858935!2d88.4306861!3d22.5764753!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1675838505340!5m2!1sen!2sin"

            ></iframe>
            <div>
              <h5>latitude: {latitude}</h5>
              <h5>longitude: {longitude}</h5>
            </div>
      </div>
     

    </>
  );
};

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}







