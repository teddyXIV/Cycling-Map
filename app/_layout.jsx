import { StyleSheet, Text, View } from 'react-native';
import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import GlobalProvider from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Titillium-Black": require("../assets/fonts/Titillium-Black.otf"),
    "Titillium-Bold": require("../assets/fonts/Titillium-Bold.otf"),
    "Titillium-Regular": require("../assets/fonts/Titillium-Regular.otf"),
    "Titillium-Semibold": require("../assets/fonts/Titillium-Semibold.otf"),
    "Titillium-Thin": require("../assets/fonts/Titillium-Thin.otf"),
    "Titillium-Light": require("../assets/fonts/Titillium-Light.otf")
  })

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
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
    </GlobalProvider>
  )
}

export default RootLayout
