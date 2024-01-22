import { StyleSheet,StatusBar } from 'react-native'
import { useFonts } from "expo-font"
import { colors } from './src/global/colors'
import { fonts } from './src/global/fonts'
import MainNavigator from './src/navigation/MainNavigator'
import { store } from './src/app/Store'
import { Provider } from 'react-redux'


const  App = () => {

  const [fontLoaded] = useFonts(fonts)
  if(!fontLoaded) return null
  
  return (
    <>
    <StatusBar backgroundColor={colors.green1}/>
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  
  </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})




