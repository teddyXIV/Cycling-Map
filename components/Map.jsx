import { View, Text, PermissionsAndroid, Platform } from 'react-native'
import React from 'react'
import Mapbox, { MapView, Camera, LocationPuck, UserLocation } from '@rnmapbox/maps'
import requestLocationPermission from '../lib/locationPermission';

requestLocationPermission();


const accessToken = 'pk.eyJ1IjoidGVkZHl4aXYiLCJhIjoiY20wbXprbGN3MDg3OTJrcTVncmtjNXZqcCJ9.SP-I5hVGlU6nRoDSyXX3hQ';
Mapbox.setAccessToken(accessToken)



const Map = () => {
  return (
    <MapView style={{ flex: 1 }} styleUrl="mapbox://styles/mapbox/satellite-v9" projection="globe">
      <Camera
        followUserLocation={true}
        followZoomLevel={14} />
      <LocationPuck puckBearingEnabled={true} />
    </MapView>
  )
}

export default Map