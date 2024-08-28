import { View, Text, Pressable } from 'react-native'
import React, {useState} from 'react'

const CustomButton = ({ title, handlePress, containerStyles, textStyles}) => {
    const [loading, setLoading] = useState(false)
  return (
    <Pressable className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${loading ? 'opacity-50' : ''}`}
        onPress={handlePress}
        onPressIn={() => setLoading(true)}
        onPressOut={() => setLoading(false)}
        activeOpacity={0.7}
        // disabled={!loading}
        >
        <Text className={`text-primary font-semibold text-lg ${textStyles}`}>
            {title}
        </Text>
    </Pressable>
  )
}

export default CustomButton