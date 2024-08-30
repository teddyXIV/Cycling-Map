import { View, Image, Text } from 'react-native'
import React from 'react'
import images from '../constants/images';
import CustomButton from './CustomButton';
import { router } from 'expo-router';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.noResults}
        className="w-[250px] h-[180px]"
        resizeMode='contain'
      />
      <Text className="text-white text-xl text-center font-semibold mt-2">
        {title}
      </Text>
      <Text className="font-medium text-sm text-gray-300">
        {subtitle}
      </Text>

      <CustomButton
        title="Create route"
        handlePress={() => router.push('/create')}
        containerStyles={"w-full my-5"} />
    </View>
  )
}

export default EmptyState