import { View, StyleSheet } from 'react-native';
import { colors } from "../global/colors"
import AddButton from '../components/AddButton'
import UserReligionList from '../components/UserReligionList'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <UserReligionList navigation = {navigation}/>
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
});



