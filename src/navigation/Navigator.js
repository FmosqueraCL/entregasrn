import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import ReligionListCategory from '../screens/ReligionListCategory';
import ReligionDetail from '../screens/ReligionDetail';
import Header from '../components/Header'

const Stack = createNativeStackNavigator()
const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Categorias" :
                                        route.name === "Category" ? route.params.category :
                                        "Detalle"
                    }               />
                }
            }
        }
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={ReligionListCategory} />
      <Stack.Screen name="Religion" component={ReligionDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator