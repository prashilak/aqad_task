import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native'
import { images, universalStyles } from '../theme'
import auth from '@react-native-firebase/auth';


const SplashScreen = ({ navigation }) => {
    useEffect(() => {
      const unsubscribe = auth().onAuthStateChanged(user => {
        if (user) {
          navigation.replace('Dashboard');
        } else {
          navigation.replace('Login');
        }
      });

      return unsubscribe;
    }, [navigation]);

  return (
    <SafeAreaView style={universalStyles.containerView}>
      <Image source={images.logo} width={90} height={90}/>
      {/* <Text>SplashScreen</Text> */}
    </SafeAreaView>
  )
}

export default SplashScreen