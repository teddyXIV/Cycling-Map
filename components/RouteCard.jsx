import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import images from '../constants/images.js';
import icons from '../constants/icons.js';

const RouteCard = ({ route: { name, imageUrl } }) => {
  console.log("IMAGEURL: ", imageUrl);

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          {/* <View className="w-[46px] h-[46px] rounded-lg border border-secondary justify-center items-center p-0.5">
            <Image source={images.map} className="w-full h-full rounded-lg" resizeMode='cover' />
          </View> */}
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-white font-psemibold text-sm" numberOfLines={1}>{name}</Text>
          </View>
        </View>
        <View>
          <Image source={icons.menu} className="w-5 h-5" resizeMode='contain' />
        </View>
      </View>
      <Pressable className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
        <Image source={{ uri: imageUrl }} className="w-full h-full rounded-xl mt-3" resizeMode="cover" />
      </Pressable>

    </View>
  )
}

export default RouteCard