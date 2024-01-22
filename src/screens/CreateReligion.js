import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, StyleSheet, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useGetLastReligionQuery, useReligionMutation } from '../app/services/shopServices';

const CreateReligion = () => {
  const userID = useSelector(state => state.user.userID);
  const dispatch = useDispatch();
  const { data: newID, isLoading: isFetching, isError: isFetchError } = useGetLastReligionQuery();
  const { mutate, isLoading, isError, error, isSuccess } = useReligionMutation();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  const [commandments, setCommandments] = useState('');
  const [country, setCountry] = useState('');
  const [goal, setGoal] = useState('');

  const handleSubmit = () => {
    const newReligion = {
      id: newID,
      name,
      description,
      category,
      url,
      commandments,
      country,
      goal,
      creator: userID,
    };
    mutate(newReligion);
    setName('');
    setDescription('');
    setCategory('');
    setUrl('');
    setCommandments('');
    setCountry('');
    setGoal('');
  };

  // Return the JSX elements
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Religion</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter description"
          value={description}
          onChangeText={setDescription}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter category"
          value={category}
          onChangeText={setCategory}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter image URL"
          value={url}
          onChangeText={setUrl}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter main commandments (max 500 chars)"
          value={commandments}
          onChangeText={setCommandments}
          maxLength={500}
          multiline={true}
        />
        <Picker
          style={styles.input}
          selectedValue={country}
          onValueChange={setCountry}
        >
          <Picker.Item label="Select country" value="" />
          <Picker.Item label="Afghanistan" value="Afghanistan" />
          <Picker.Item label="Albania" value="Albania" />
        </Picker>
        <TextInput
          style={styles.input}
          placeholder="Enter one main goal"
          value={goal}
          onChangeText={setGoal}
        />
        <Button
          title="Submit"
          onPress={handleSubmit}
          disabled={isLoading || !name || !description || !category || !url || !commandments || !country || !goal}
        />
        {isLoading && <Text style={styles.message}>Creating religion...</Text>}
        {isError && <Text style={styles.message}>Error: {error.message}</Text>}
        {isSuccess && <Text style={styles.message}>Religion created successfully!</Text>}
      </View>
      <Pressable onPress={()=>navigation.navigate("Home")}>
        <View style={styles.back}>
          <Text style={styles.text}>VOLVER</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CreateReligion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  form: {
    flex: 1,
    width: '80%',
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  message: {
    fontSize: 18,
    color: '#888',
    margin: 10,
  },
});


