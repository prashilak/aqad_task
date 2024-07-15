import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import images from '../theme/images';

const HomeScreen = () => {
  const user = auth().currentUser;
  const userName = user ? user.displayName ? user.displayName : user.email.split('@')[0] : 'User';

  console.log('user',user);

  return (
    <View style={styles.container}>
      <Image
        source={images.welcome}  // Replace with a real image URL
        style={styles.image}
      />
      <Text style={styles.welcomeText}>{userName}!</Text>
      <Text style={styles.descriptionText}>We're glad to have you here. Enjoy exploring our app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform:'capitalize'
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default HomeScreen;
