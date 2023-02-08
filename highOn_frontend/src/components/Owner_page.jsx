// export const Owner_page=()=>{
//     return (
//         <>
//         <h2>Owner dashboard</h2>

        



//         </>
//     )
// }



import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export  function Owner_page() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAENxeD2XY_IslABImboFB-8Qvvx90zf0M",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}