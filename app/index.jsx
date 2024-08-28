import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link, SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function App() {

  return (
    <View className="flex-1 items-center justify-center bg-primary">
      <Text className="text-3xl font-extrabold text-secondary">BikeRouter</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-tertiary">Go to home</Link>
    </View>
  );
}
