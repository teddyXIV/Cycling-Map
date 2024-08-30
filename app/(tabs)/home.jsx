import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Image } from 'react-native'
import { useGlobalContext } from '../../context/GlobalProvider.js';
import images from '../../constants/images.js';
import Recent from '../../components/Recent.jsx';

const Home = () => {
  const { currentUser } = useGlobalContext();

  return (
    <SafeAreaView className="bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-6'>
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-medium text-sm text-gray-300">
                  Welcome back
                </Text>
                <Text className="text-white text-2xl font-semibold">
                  {currentUser.displayName}
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-12 h-12"
                  resizeMode='contain'
                />
              </View>
            </View>
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-300 test-lg font-regular mb-3">
                Recent routes
              </Text>
              <Recent
                routes={[{ id: 1 }, { id: 33 }, { id: 3 }] ?? []}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>

  )
}

export default Home