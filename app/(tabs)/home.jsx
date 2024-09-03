import { View, Text, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { FlatList, Image } from 'react-native'
import { useGlobalContext } from '../../context/GlobalProvider.js';
import images from '../../constants/images.js';
import Recent from '../../components/Recent.jsx';
import EmptyState from '../../components/EmptyState.jsx';
import { getRoutes } from '../../lib/firebase.js';
import useDb from '../../lib/useDb.js'

const Home = () => {
  const { currentUser } = useGlobalContext();
  const [refreshing, setRefreshing] = useState(false);

  const { data: routes, refetch } = useDb(getRoutes, currentUser);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  }

  // const routes = getRoutes(currentUser);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        // data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-white">{item.id}</Text>
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-2'>
            <View className="justify-between items-start flex-row mb-4">
              <View>
                <Text className="font-medium text-sm text-gray-300">
                  Welcome back
                </Text>
                <Text className="text-white text-2xl font-tsemibold">
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
              <Text className="text-gray-300 test-lg font-tregular mb-3">
                Recent routes
              </Text>
              <Recent
                // routes={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []}
                routes={routes}
              />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No routes found"
            subtitle="Create some routes!" />
        )}
        refreshControl={<RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />}
      />
    </SafeAreaView>

  )
}

export default Home