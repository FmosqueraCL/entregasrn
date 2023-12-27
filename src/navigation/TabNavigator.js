import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ShopStack from './ShopStack'
import ProfileStack from "./ProfileStack"
import { colors } from '../global/colors'
import TabIcon from '../components/TabIcon'

const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle: styles.tabBar,
            initialRouteName: 'ShopStack'

          }}
        >
          <Tab.Screen
             name="ShopStack"
             component={ShopStack}
             options={{
              tabBarIcon:({focused}) => <TabIcon icon="world-o" label="Religiones" focused={focused}/>
             }}
          />
          <Tab.Screen 
            name="Profile" 
            component={ProfileStack}
            options={{
              tabBarIcon:({focused}) =>  <TabIcon icon="person" label="Perfil" focused={focused}/> 
             }}
             />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
      backgroundColor:colors.green1,
      elevation:4,
      position:"absolute",
      bottom:0,
      left:20,
      right:20,
      borderRadius:15,
      height:90
    }
})