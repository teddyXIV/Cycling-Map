import { View, Text } from 'react-native'
import { Tabs, Redirect } from 'expo-router';
import icons from '../../constants/icons.js';
import { Image } from 'react-native'

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="items-center justify-center gap-2">
            <Image 
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            <Text 
                className={`${focused ? 'font-semibold' : 'font-normal'}`}
                style={{ color: color }}>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {

  return (
    <>
        <Tabs
           screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#50FFB1',
            tabBarInactiveTintColor: '#CDCDE0',
            tabBarStyle: {
                backgroundColor: '#001513',
                borderTopWidth: 1,
                borderTopColor: '#232533',
                height: 84,
            }
        }} 
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon 
                            icon={icons.home}
                            color={color}
                            name="Home"
                            focused={focused}
                        />
                    )
                }} 
            />

            <Tabs.Screen
                name="create"
                options={{
                        title: 'Create',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon 
                                icon={icons.plus}
                                color={color}
                                name="Create"
                                focused={focused}
                            />
                        )
                    }} 
            />

            <Tabs.Screen
                name="compare"
                options={{
                        title: 'Compare',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon 
                                icon={icons.bookmark}
                                color={color}
                                name="Compare"
                                focused={focused}
                            />
                        )
                    }} 
            />

            <Tabs.Screen
                name="profile"
                options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon 
                                icon={icons.profile}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        )
                    }} 
            />
        </Tabs>
    </>
  )
}

export default TabsLayout