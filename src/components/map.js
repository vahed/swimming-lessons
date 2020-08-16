import React from 'react'
import {
    withGoogleMap,
    GoogleMap,
    withScriptjs,
    Marker,
} from "react-google-maps";

function MyMap(){
    return (
                <GoogleMap
                    defaultZoom={10}
                    defaultCenter={{lat: 57.781170, lng: 12.035860}}
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
        <div style={{width:"100vw", height:"50vh"}}>
            <WrappedMap
                googleMapURL = {`https://maps.googleapis.com/maps/api/js?key=AIzaSyDXZ7dYPvp-IIt9WzU6fkpSj6yrFnsyeyQ`}
                loadingElement={<div style={{height:"100%"}} />}
                containerElement={<div style={{height:"100%"}} />}
                mapElement = {<div style={{height:"100%"}} />}
            />
        </div>
    )
};