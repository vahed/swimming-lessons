import React from 'react'
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
} from "react-google-maps";

function MyMap(){
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    return (
        <GoogleMap
            defaultZoom={10}
            defaultCenter={{lat: 57.781170, lng: 12.035860}}
            zoom={16}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker

                position={{
                    lat: 57.781170,
                    lng: 12.035860
                }}
            />

        </GoogleMap>

    );
}

const WrappedMap = withScriptjs(withGoogleMap(MyMap));

export default function Map(){
    return(
        <div style={{width:"100vw", height:"70vh"}}>
            <WrappedMap
                googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyDJ4Uyg9_ZDDX9tJM5AHh7aBfI7g8x5jdM`}
                loadingElement={<div style={{height:"100%"}} />}
                containerElement={<div style={{height:"100%"}} />}
                mapElement = {<div style={{height:"100%"}} />}
            />
        </div>
    )
};
