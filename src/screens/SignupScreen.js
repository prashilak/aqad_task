import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';
import { insertUser, createTable } from '../localDB/database';
import { colors, universalStyles } from '../theme';
import ButtonUI from '../componants/ButtonUI';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errormsg, setErrorMsg] = useState('')

  createTable();

  const handleSignup = async () => {
    if (!email) {
      console.error("Passwords not match");
      return;
    }

    if (password !== confirmPassword) {
      console.error("Passwords not match");
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      insertUser(user.email, new Date().toISOString());
      navigation.replace('Dashboard');
    } catch (error) {
      console.warn(error);
      setErrorMsg(error.toString())
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={universalStyles.textInput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={universalStyles.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={universalStyles.textInput}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <View style={universalStyles.mh15}>
        <Text style={{color:colors.primary}}>{errormsg}</Text>
      </View>
      <ButtonUI title="Sign Up" onPress={handleSignup} />
      <ButtonUI title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};


export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});