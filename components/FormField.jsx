import { View, Text, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import icons from '../constants/icons';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium">{title}</Text>
      <View className="w-full h-16 px-4 bg-teal-950 rounded-2xl border-2 focus:border-secondary items-center flex-row">
        <TextInput 
            className="flex-1 text-white font-semibold text-base"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
            <Pressable
                onPress={() => setShowPassword(!showPassword)}
            >
                <Image source={!showPassword ? icons.eye : icons.eyeHide}
                    className="w-6 h-6"
                    resizeMode='contain'/>
            </Pressable>
        )}
      </View>
    </View>
  )
}

export default FormField