import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Recent = ({ routes }) => {

  console.log("IN RECENTS COMPONENT")
  return (
    <FlatList
      data={routes}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white">{item.name}</Text>
      )}
      horizontal
    />
  )
}

export default Recent