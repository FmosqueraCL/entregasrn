import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Home from '../screens/Home'
import CreateReligion from '../screens/CreateReligion'
import JoinReligion from '../screens/JoinReligion'

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Home" :
                                        route.name === "CreateReligion" ? "Create Religion" :
                                        "JoinReligion"
                    }               />
                }
            }
        }
    >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreateReligion" component={CreateReligion} />
        <Stack.Screen name="JoinReligion" component={JoinReligion} />
    </Stack.Navigator>
  )
}

export default MainStack