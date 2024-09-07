import { Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { logOut } from '../../lib/firebase';
import { useGlobalContext } from '../../context/GlobalProvider';
import { router } from 'expo-router';
import MapAgain from '../../components/MapAgain';

const Profile = () => {
  const { setCurrentUser, setIsSignedIn } = useGlobalContext();

  const signOut = async () => {
    await logOut();

    setCurrentUser(null);
    setIsSignedIn(false);

    router.replace('/sign-in')
  }

  return (
    <SafeAreaView>
      <Text>Profile</Text>
      {/* <CustomButton
        title="Log out"
        handlePress={signOut}
        containerStyles="w-full mt-7" /> */}
    </SafeAreaView>
  )
}

export default Profile
