import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { universalStyles, colors } from '../theme';
import ButtonUI from '../componants/ButtonUI';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errormsg, setErrorMsg] = useState('')

  const handleLogin = async () => {
    if (!email) {
      setErrorMsg("Enter email id")
      return;
    }
    if (!password) {
      setErrorMsg("Enter password id")
      return;
    }

    try {
      setErrorMsg('')
      await auth().signInWithEmailAndPassword(email, password);
      navigation.replace('Dashboard');
    } catch (error) {
      console.error(error);
      setErrorMsg(error.data.message)
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={universalStyles.textInput}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={universalStyles.textInput}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={universalStyles.mh15}>
        <Text style={{color:colors.primary}}>{errormsg}</Text>
      </View>
      <ButtonUI title="Login" onPress={handleLogin} />
      <ButtonUI title="Sign Up" onPress={() => navigation.navigate('Signup')} />
    </View>
  );
};

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

export default LoginScreen;
