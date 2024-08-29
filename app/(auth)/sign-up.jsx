import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormField from '../../components/FormField'

import image from '../../constants/images'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

import { signUp } from "../firebase"

const SignUp = () => {
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async (displayName, email, password) => {
    setIsSubmitting(true);

    signUp(displayName, email, password);

    setIsSubmitting(false);
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={image.logo}
            resizeMode="contain"
            className="w-[100px] h-[100px]"
          />
          <Text className="text-white text-2xl text-semibold mt-1 font-semibold">Sign up to BikeRouter</Text>
          <FormField 
            title="Username"
            value={form.displayName}
            handleChangeText={(e) => setForm({ ...form, displayName: e })}
            otherStyles="mt-5"
          />
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-5"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-5"
          />
          <CustomButton 
            title="Sign up"
            handlePress={() => submit(form.displayName, form.email, form.password)}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-regular">
                Have an account already?
              </Text>
              <Link href="/sign-in" className="text-lg font-semibold text-secondary">Sign in</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

