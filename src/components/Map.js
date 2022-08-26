import React, { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
    width: '800px',
    height: '450px'
};

export default function Home() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDCx_vmSMifQto6MOki5GlsM4Bc2m2B-ZY',
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