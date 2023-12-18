import { StyleSheet, View } from 'react-native'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

const Home = ({navigation,route}) => {
  return (
    <View style={styles.container}>
      <Categories navigation={navigation} route={route}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1, 
    alignItems: 'center',
    backgroundColor: colors.green1, 
    paddingHorizontal: 10, }
})