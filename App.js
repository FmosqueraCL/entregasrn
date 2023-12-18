import { StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts';
import { colors } from './src/global/colors'
import Navigator from './src/navigation/Navigator'


const  App = () => {
  const [fontsLoaded] = useFonts(fonts)
  if (!fontsLoaded) {
    return null;
  }
  return (
  <>
      <StatusBar
        backgroundColor={colors.green1}
      />
      <Navigator/>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})




