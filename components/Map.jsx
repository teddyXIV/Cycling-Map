import { View, Text } from 'react-native'
import React from 'react'
import Mapbox, { MapView } from '@rnmapbox/maps'

const accessToken = 'pk.eyJ1IjoidGVkZHl4aXYiLCJhIjoiY20wbXprbGN3MDg3OTJrcTVncmtjNXZqcCJ9.SP-I5hVGlU6nRoDSyXX3hQ';
Mapbox.setAccessToken(accessToken)

const Map = () => {
  return (
    <MapView style={{ flex: 1 }} />
  )
}

export default Map