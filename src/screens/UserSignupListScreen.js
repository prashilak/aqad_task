import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getUsers } from '../localDB/database';

const UserSignupListScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userEmail}>{item.email}</Text>
            <Text style={styles.userCreatedAt}>{new Date(item.createdAt).toLocaleString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  userContainer: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 4,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  userEmail: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userCreatedAt: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default UserSignupListScreen;
