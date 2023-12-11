import { StyleSheet, View } from 'react-native';
import { useState } from 'react'
import ReligionListCategory from './screens/ReligionListCategory';
import { useFonts } from 'expo-font'
import { fonts } from './global/fonts';
import Home from './screens/home'
import { colors } from './global/colors'

const App = () => {
  const [fonstLoaded] = useFonts(fonts)
  const [categorySelected, setCategorySelected] = useState ('')
  if (!fonstLoaded) {
    return null;
  }
  return (
  <View style={styles.container}>      
    {
      categorySelected ?
      <ReligionListCategory
        category={categorySelected}
        setCategory={setCategorySelected}
      />
      :
      <Home setCategorySelected={setCategorySelected}/>
    }
  </View>
  )      
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    backgroundColor: colors.green1,
    alignItems: 'center',
    }
})

export default App


