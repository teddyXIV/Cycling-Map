import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react'

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Titillium-Black": require("../assets/fonts/Titillium-Black.otf"),
    "Titillium-Bold": require("../assets/fonts/Titillium-Bold.otf"),
    "Titillium-Regular": require("../assets/fonts/Titillium-Regular.otf"),
    "Titillium-RegularUpright": require("../assets/fonts/Titillium-RegularUpright.otf"),
    "Titillium-BoldUpright": require("../assets/fonts/Titillium-BoldUpright.otf"),
  })

  useEffect(() => {
    if(error) throw error;

    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
        <Stack.Screen 
            name="index" 
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="(auth)" 
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="(tabs)" 
            options={{
                headerShown: false
            }}
        />
    </Stack>
  )
}

export default RootLayout
