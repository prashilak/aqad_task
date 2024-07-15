import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, Button } from 'react-native';
import { colors, universalStyles } from '../theme';
import ButtonUI from '../componants/ButtonUI';
import { createTableContacts, getContacts, insertContacts, deleteContact, updateContact } from '../localDB/database';

const ContactFormScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [contactList, setContactList] = useState([])
  const [editingContact, setEditingContact] = useState(null);

  createTableContacts();

  useEffect(() => {
    getContacts(setContactList);
    console.log('contactList', contactList);
  }, []);

  const handleSubmit = () => {
    console.log(name, email, mobile);
    if (!name) {
      console.warn("Enter name field");
      return;
    }
    if (!email) {
      console.warn("Enter email field");
      return;
    }
    if (!mobile) {
      console.warn("Enter mobile field");
      return;
    }
    try {
      insertContacts(name, email, mobile, new Date().toISOString());
      getContacts(setContactList);
      console.warn("Success");
      setName('');
      setEmail('')
      setMobile('')
    } catch (error) {
      console.warn('error')
    }

  };

  const handleEdit = (item) => {
    setEditingContact(item);
    setName(item.name);
    setEmail(item.email)
    setMobile(item.mobile)
  };

  const handleUpdate = () => {
    if (editingContact) {
      updateContact(editingContact.id, name, email, mobile);
      setEditingContact(null);
      setName('');
      setEmail('')
      setMobile('')
      getContacts(setContactList);

    }
  };

  const handleDelete = (id) => {
    deleteContact(id);
    getContacts(setContactList);
  };

  return (
    <View style={universalStyles.container}>
       <Text style={universalStyles.titleText}>Contact Details</Text>
      <TextInput
        value={name} onChangeText={setName}
        style={universalStyles.textInput}
        placeholder="Enter Name"
        placeholderTextColor="#888"
      />
       <TextInput
        value={email} onChangeText={setEmail}
        style={universalStyles.textInput}
        placeholder="Enter Email"
        placeholderTextColor="#888"
      />
      <TextInput
        value={mobile} onChangeText={setMobile}
        style={universalStyles.textInput}
        placeholder="Enter Mobile"
        placeholderTextColor="#888"
      />

      <ButtonUI title={editingContact ? "Update" :"Submit"} onPress={editingContact ? handleUpdate :handleSubmit} />

      <View >
      <FlatList
        data={contactList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userEmail}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
            <Text style={styles.userEmail}>{item.mobile}</Text>
            <Text style={styles.userCreatedAt}>{new Date(item.createdAt).toLocaleString()}</Text>

            <View style={universalStyles.row}>
               <Button title="Edit" style={{color:colors.primary}} onPress={() => handleEdit(item)} />
               <Button title="Delete" style={{color:colors.primary}} onPress={() => handleDelete(item.id)} />
            </View>
          </View>
        )}
      />
    </View>
    </View>
  );
};

export default ContactFormScreen;

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