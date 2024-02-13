import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useGetReligionDetailsQuery, usePostMemberMutation } from '../app/services/shopServices';
import { colors } from "../global/colors";
import AddButton from '../components/AddButton';
import { useSelector } from 'react-redux';

const ReligionDetail = ({ route, navigation }) => {
  const { id } = route.params || {};
  const userId = useSelector(state => state.auth.value.email);
  const { data: religion, isLoading: isReligionLoading, isError } = useGetReligionDetailsQuery(id);
  const [ mutate, {isSuccess,error}  ] = usePostMemberMutation();
  const [isLoading] = useState(false);
  if (isSuccess) {
    Alert.alert(
      'Te has unido exitosamente', 
      `Te has unido a ${religion.newReligion.name}.`, 
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
  
  return (
    <View style={styles.container}>
      {isReligionLoading && <ActivityIndicator size="large" color={colors.green1} />}

      {isError && <Text>Error fetching data</Text>}

      {religion && (
        <>
          <Text style={styles.name}>{religion.newReligion.name}</Text>
          <Image style={styles.image} source={{ uri: religion.newReligion.image }} />
          <Text style={styles.description}>Descripción: {religion.newReligion.description}</Text>
          <Text style={styles.goal}>Metas: {religion.newReligion.goal}</Text>
          <Text style={styles.commandments}>Mandamientos: {religion.newReligion.commandments}</Text>
          <Text style={styles.country}>Pais: {religion.newReligion.country}</Text>
          <AddButton title="Unirse a esta Religión" onPress= {() => mutate ({id, userId})}   
          />

          {isLoading && <ActivityIndicator style={styles.loader} />}
        </>
      )}
    </View>
  );
};



export default ReligionDetail;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
      padding: 20,
      alignItems: 'center',
    },
    name: {
      fontSize: 36,
      fontWeight: 'bold',
      color: colors.black,
      marginVertical: 10,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginVertical: 10,
    },
    description: {
      fontSize: 18,
      color: colors.gray,
      textAlign: 'center',
      marginVertical: 10,
    },
    goal: {
      fontSize: 18,
      color: colors.green,
      textAlign: 'center',
      marginVertical: 10,
    },
    commandments: {
      fontSize: 18,
      color: colors.blue,
      textAlign: 'center',
      marginVertical: 10,
    },
    country: {
      fontSize: 18,
      color: colors.red,
      textAlign: 'center',
      marginVertical: 10,
    },
    message: {
      fontSize: 16,
      color: colors.black,
      textAlign: 'center',
      marginVertical: 10,
    }
  });
  


