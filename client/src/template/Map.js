import React from 'react';
import env  from 'react-dotenv';
import mapStyles from '../mapStyles';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'

import '@reach/combobox/styles.css'


const libraries = ['places']
const mapContainerStyle = {
    width: "100vw",
    height: '100vh',
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true
}

const center = {
    lat: 34.0522,
    lng: -118.2437
}

const Map = () => {


    const { isLoaded, loadError} = useLoadScript({
        id: process.env.GOOGLE_MAPS_ID || env.GOOGLE_MAPS_ID,
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || env.GOOGLE_MAPS_API_KEY,
        libraries
    });

   

    if (loadError) return 'Error lading maps';
    if (!isLoaded) return "Loading Maps";

    return (<div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options}></GoogleMap>
    </div>
    )
}

export default Map;