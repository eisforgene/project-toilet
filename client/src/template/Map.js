import React from 'react';
import env  from 'react-dotenv';
import mapStyles from '../mapStyles';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
    MarkerClusterer
} from '@react-google-maps/api'
import { formatRelative } from 'date-fns'

import '@reach/combobox/styles.css'


const libraries = ['places']
const mapContainerStyle = {
    width: "800px",
    height: "800px",
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

    const onMapClick = React.useCallback((event) => {
        setMarkers(current => [ ...current, {
            lat: event.latLng.lat(),
            lng: event.latLng.lng(),
            time: new Date
        }]);
    }, [])
    const { isLoaded, loadError} = useLoadScript({
        id: process.env.GOOGLE_MAPS_ID || env.GOOGLE_MAPS_ID,
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || env.GOOGLE_MAPS_API_KEY,
        libraries
    });

    const [markers, setMarkers] = React.useState([]);

    if (loadError) return 'Error lading maps';
    if (!isLoaded) return "Loading Maps";

   const image = {
        url: "/toilet.svg",
        scaledSize: new window.google.maps.Size(20,32),
        origin: new window.google.maps.Point(0,0),
        anchor: new window.google.maps.Point(10,32)
   };

    return (<div>
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} options={options} onClick={onMapClick}>

            {markers.map(marker => <Marker key={marker.time.toISOString()}
            position={{lat: marker.lat, lng: marker.lng}}
            icon={image}
            />)}


        </GoogleMap>
    </div> 
    )
}

export default Map;