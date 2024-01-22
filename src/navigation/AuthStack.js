import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Signup from '../screens/Signup'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Signup'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Bienvenido"/>
                }
            }
        }
    >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}

export default AuthStack