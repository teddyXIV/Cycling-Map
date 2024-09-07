import Mapbox, { MapView, Camera, LocationPuck, RasterSource, RasterLayer } from "@rnmapbox/maps";
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { getElevation } from '../lib/geoHelpers';

const accessToken = 'pk.eyJ1IjoidGVkZHl4aXYiLCJhIjoiY20wcmFoYnVsMDZuNTJqb2g3cTZjYWYybCJ9.gLMNsYAmGmxLXyiwUAtf8w';
Mapbox.setAccessToken(accessToken)

const NewMap = () => {
  const [location, setLocation] = useState(null);
  const [elevation, setElevation] = useState(null);

  const getUserLongLat = async () => {

    let currentLocation = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude
    });
  }

  useEffect(() => {
    console.log("in useEffect");
    const getLocationData = async () => {
      await getUserLongLat();

      if (location) {
        console.log(location)
        try {
          let userElevation = await getElevation(location.latitude, location.longitude, 8, accessToken)
          setElevation(userElevation)
          console.log("we did it please pretty please")
        } catch (error) {
          console.error("Error getting elevation: ", error);
        }
      }
    }

    getLocationData();

  }, [])

  return (
    <MapView style={{ flex: 1 }}>
      <Camera
        followUserLocation={true}
        followZoomLevel={8} />
      <RasterSource
        id="terrainRaster"
        tileUrlTemplates={[
          `https://api.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=${accessToken}`,
        ]}
        tileSize={256}
      >
        <RasterLayer id="terrainRasterLayer" sourceID="terrainRaster" />
      </RasterSource>
      <LocationPuck puckBearingEnabled={true} puckBearing='heading' pulsing={{ isEnabled: true }} />
    </MapView>
  )
}

export default NewMap;

