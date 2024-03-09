import React, { useEffect, useState } from "react";

import GoogleMapReact from 'google-map-react';



function SimpleMap(){


    const [location, setLocation] = useState ({lat: null , long : null})
    useEffect (()=>{
        const getLocation = () =>{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition (
                    (position) => {
                        const latitude = position.coords.latitude
                        const longitude = position.coords.latitude
                        setLocation({lat : latitude , long :  longitude})
                    } , 
                    (error) => {
                        console.log("error in getting location " , error);
                    }
                )   
            } else {
                console.error("Geolocation is not supported by this browser.");
            }
        }
        getLocation()
    },[])   

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
      </GoogleMapReact>
    </div>
  );
}

export default SimpleMap