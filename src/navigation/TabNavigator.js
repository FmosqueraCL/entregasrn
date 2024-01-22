import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MainStack from './MainStack'
import { colors } from '../global/colors'
import TabIcon from '../components/TabIcon'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar,
            initialRouteName: 'MainStack'

          }}
        >
          <Tab.Screen
             name="MainStack"
             component={MainStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="world-o" label="Religiones" focused={focused}/>
             }}
          />
            <Tab.Screen 
              name="ProfileStack" 
              component={ProfileStack}
              options={{
                tabBarIcon:({focused}) => <TabIcon icon="person" label="Perfil" focused={focused}/> 
              }}
             />
      </Tab.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.green3,
      elevation:4,
      position:"absolute",
      bottom:25,
      left:20,
      right:20,
      borderRadius:15,
      height:90


    }
})