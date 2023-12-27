import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Profile from '../screens/ProfileScreen'

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='ProfileScreen'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Perfil"/>
                }
            }
        }
    >
        <Stack.Screen name="ProfileScreen" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack