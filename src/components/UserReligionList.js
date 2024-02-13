import React from 'react';
import { View,  Text, FlatList, StyleSheet } from 'react-native';
import { useGetAllReligionsQuery } from '../app/services/shopServices';
import ReligionItem from '../components/ReligionItem';
import { useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/native';


const UserReligionList = ({ navigation, route }) => {
  const userId = useSelector(state => state.auth.value.email);
  const { data: religions, isLoading, isError, error, refetch } = useGetAllReligionsQuery(); 
  const religionsArray = religions ? Object.entries(religions).map(([id, data]) => ({ id, ...data })) : [];
  const userReligions = religionsArray.filter(religion => religion.members && religion.members.userId === userId);
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
      <Text style={styles.title}>Join a Religion</Text>
      {isLoading && <Text style={styles.message}>Loading religions...</Text>}
      {isError && <Text style={styles.message}>Error: {error.message}</Text>}
      {userReligions.length > 0 && (
        <FlatList
          data={userReligions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ReligionItem
              religion={{
                id: item.id,
                ...item.newReligion,
              }}
              navigation={navigation}
            />
          )}
        />
      )}
      {userReligions.length === 0 && (
        <Text style={styles.message}>You are not a member of any religions.</Text>
      )}
      </View>
    </View>
  );
};


export default UserReligionList;

const styles = StyleSheet.create({
  wrapper: {
    height: '65%', // set the wrapper height to 40%
  },
  container: {
    width:'90%',
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center', 
    textAlignVertical: 'center'
  },
  message: {
    fontSize: 18,
    color: '#888',
    marginVertical: 8,
    textAlign: 'center', 
    textAlignVertical: 'center'
  },
});
