import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images.js';
import CustomButton from '../components/CustomButton.jsx';
import { useGlobalContext } from '../context/GlobalProvider.js';


export default function App() {
  const { isLoading, isSignedIn } = useGlobalContext();

  if (!isLoading && isSignedIn) return <Redirect href='/home' />

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[115px] mt-7"
            resizeMode="contain" />
          <Image
            source={images.map}
            className="w-[250px] h-[250px] rounded-lg border-4 border-tertiary"
            resizeMode="contain" />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">Explore with{' '}
              <Text className="text-secondary">BikeRouter</Text>
            </Text>
          </View>
          <Text className="text-sm text-gray-100 mt-3 text-center">Push your limits beyond what you thought was possible.</Text>
          <CustomButton
            title="Get started"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7" />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#001513' style='light' />
    </SafeAreaView>
  );
}
