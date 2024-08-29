import { Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormField from '../../components/FormField'

import image from '../../constants/images'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async (email, password) => {
    
    try {
      setIsSubmitting(true);

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const user = userCredential.user;

      console.log(user);

      console.log(`${user.email} signed in!`)

      setIsSubmitting(false);

    } catch (error) {
      console.error('Error signing in: ', error.message);
    }

  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image source={image.logo}
            resizeMode="contain"
            className="w-[100px] h-[100px]"
          />
          <Text className="text-white text-2xl text-semibold mt-1 font-semibold">Log in to BikeRouter</Text>
          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />
          <CustomButton 
            title="Sign in"
            handlePress={() => submit(form.email, form.password)}
            containerStyles={"mt-7"}
            isLoading={isSubmitting}
            />
            <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100 font-regular">
                Don't have an account?
              </Text>
              <Link href="/sign-up" className="text-lg font-semibold text-secondary">Sign Up</Link>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

