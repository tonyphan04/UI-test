import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
    width: '800px',
    height: '450px'
};

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_MAP_API_KEY,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    const center = useMemo(() => ({ lat: -37.8221504, lng: 145.0389546 }), []);

    return (
        <GoogleMap mapContainerStyle={containerStyle} zoom={17} center={center} mapContainerClassName="map-container">
            <MarkerF position={center} />
        </GoogleMap>
    );
}