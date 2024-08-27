import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link, SplashScreen } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl font-extrabold text-secondary">BikeRouter</Text>
      <StatusBar style="auto" />
      <Link href="/profile" className="text-tertiary">Go to profile</Link>
    </View>
  );
}
