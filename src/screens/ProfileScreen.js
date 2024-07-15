import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { colors, universalStyles } from '../theme';
import ButtonUI from '../componants/ButtonUI';

const ProfileScreen = ({ navigation }) => {
  const [name, setName] = useState(auth().currentUser.displayName || '');
  const [email, setEmail] = useState(auth().currentUser.email || '');

  const handleUpdate = () => {
    const user = auth().currentUser;
    user.updateProfile({
      displayName: name,
      email: email,
    }).then(() => {
      console.log('Profile updated');
    }).catch(error => {
      console.error(error);
    });
  };

  const handleSignOut = async () => {
    try {
      await auth().signOut();
      navigation.replace('Login');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <View style={universalStyles.container}>
      <Text style={universalStyles.titleText}>Profile Details</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        style={universalStyles.textInput}
        placeholder="Enter Name"
        placeholderTextColor="#888"
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={universalStyles.textInput}
        placeholder="Enter Email"
        placeholderTextColor="#888"
      />
      <ButtonUI title="Update Profile" onPress={handleUpdate} />

      <View style={{marginTop:'auto'}}>
        <ButtonUI backgroundColor={colors.primary} title="Sign Out" onPress={handleSignOut} />
      </View>
    </View>
  );
};

export default ProfileScreen;
