import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useGetAllReligionsQuery } from '../app/services/shopServices';
import ReligionItem from '../components/ReligionItem';
import { useFocusEffect } from '@react-navigation/native';

const JoinReligion = ({ navigation }) => {
  const { data: religions, isLoading, isError, error, refetch } = useGetAllReligionsQuery(); 
  const religionsArray = religions ? Object.entries(religions).map(([id, data]) => ({ id, ...data })) : [];
  useFocusEffect(
    React.useCallback(() => {
      refetch();
    }, [refetch])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unirse a una Religion</Text>
      {isLoading && <Text style={styles.message}>Loading religions...</Text>}
      {isError && <Text style={styles.message}>Error: {error.message}</Text>}
      {religionsArray.length > 0 && (
        <FlatList
          data={religionsArray}
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
    </View>
  );
};

export default JoinReligion;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width:'100%',
    height: '60%',
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  message: {
    fontSize: 18,
    color: '#888',
    marginVertical: 8,
  },
});