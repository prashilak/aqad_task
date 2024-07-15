import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonUI =  ({ title, onPress, backgroundColor = '#007BFF' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonUI

const styles = StyleSheet.create({
    button: {
      borderRadius: 4,
      marginVertical: 15,
      marginHorizontal: 15,
      paddingVertical: 15,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });
