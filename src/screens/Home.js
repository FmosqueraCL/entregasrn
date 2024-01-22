import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useGetUserReligionsQuery } from '../app/services/shopServices';
import { colors } from "../global/colors"
import AddButton from '../components/AddButton'

const Home = (navigation) => {
  const userID = useSelector(state => state.auth.value.idToken);
  const { data: userReligions, isLoading, isError, error } = useGetUserReligionsQuery(userID);
  return (
    <View style={styles.container}>
        <AddButton title={"Crear Religion"} onPress={()=> navigation.navigate("CreateReligion")}/>
        <AddButton title={"Unirse a una Religion"} onPress={()=> navigation.navigate("JoinReligion")}/>
    </View>
  );
};

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.green1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  list: {
    flex: 1,
    width: '80%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 18,
  },
  message: {
    fontSize: 18,
    color: '#888',
    margin: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    margin: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#00f',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});



