import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Map from '../../components/Map'

const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <Map />
    </SafeAreaView>
  )
}

export default Explore
