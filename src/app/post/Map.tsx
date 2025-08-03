"use client"

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
    width: "100%",
    height: "250px"
};

type MapProps = {
  location: {
    lat: number;
    lng:number;
  }
}

export default function Map({location}:MapProps){


return(
    <LoadScript
                  googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}
                  libraries={["places"]}
                >
                  <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={location}
                    zoom={14}
                    options={{
                      disableDefaultUI: true,
                      draggable:true,
                      zoomControl:true
                    }}
                    
                  >
                    <Marker position={location}></Marker>
                  </GoogleMap>
                                      <a
  href={`https://www.google.com/maps?q=${location.lat},${location.lng}`}
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 underline"
>
  Voir sur Google Maps
</a>
                </LoadScript>
                
)

}

