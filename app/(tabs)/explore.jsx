import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import MapAgain from '../../components/MapAgain'
import CustomButton from '../../components/CustomButton'
import EmptyState from '../../components/EmptyState';
import NewMap from '../../components/NewMap'

const Explore = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <NewMap />
    </SafeAreaView>
  )
}

export default Explore
