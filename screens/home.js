import { StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import Categories from '../components/Categories'
import { colors } from '../global/colors'

const home = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
      <Header title='RELIGIONES'/>
      <Categories setCategorySelected = {setCategorySelected}/>
    </View>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1, 
    alignItems: 'center',
    backgroundColor: colors.green1, 
    paddingHorizontal: 10, }
})