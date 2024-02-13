import { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker'
import {  usePostReligionMutation } from '../app/services/shopServices';
import AddButton from '../components/AddButton';

const CreateReligion = ({navigation}) => {
  const userID = useSelector(state => state.auth.value.email)
  const [mutate, {isSuccess,isError,error}]  = usePostReligionMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [commandments, setCommandments] = useState('');
  const [country, setCountry] = useState('');
  const [goal, setGoal] = useState('');
  const [image,setImage] = useState("")
  const newReligion = {
    name,
    description,
    image,
    commandments,
    country,
    goal,
    creator: userID,
  };
  if (isSuccess) {
    Alert.alert(
      'Religion creada exitosamente', 
      `Has creado una nueva religion llamada ${name}.`, 
      [ 
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'), 
        },
      ],
    );
  }
  if (isError) {
    Alert.alert(
      'Error', 
      error.message, 
      [ 
        {
          text: 'Cancel', 
          style: 'cancel',
        }
      ],
    );
  }
  const pickImage = async () => {
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync ()
    if(granted){
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.3,
            base64:true
          })
      
          if (!result.canceled) {
            setImage('data:image/jpeg;base64,' + result.assets[0].base64)
          }
    }
 }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crea una Religion</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
          maxLength={50}
        />
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          value={description}
          onChangeText={setDescription}
          maxLength={500}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter main commandments (max 500 chars)"
          value={commandments}
          onChangeText={setCommandments}
          maxLength={500}
        />
        <TextInput
          style={styles.input}
          placeholder="Country"
          value={country}
          onChangeText={setCountry}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter one main goal"
          value={goal}
          onChangeText={setGoal}
        />
        <AddButton title="Elige un emblema" onPress={pickImage}/>
        <Image style={styles.imagePreview} source={image ? {uri:image} : require("../../assets/adaptive-icon.png")}/>
        <AddButton title="Submit" onPress={() => mutate({newReligion})}/>
      </View>
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
    borderRadius: 25, 
  },
  message: {
    fontSize: 18,
    color: '#888',
    margin: 10,
  },
  imagePreview: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    marginLeft: 130,
  }
});


