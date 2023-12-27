import { StyleSheet, Text, View } from 'react-native'
import { Fontisto } from "@expo/vector-icons"

const TabIcon = ({icon,label,focused}) => {
  return (
    <View style={styles.container}>
      <Fontisto name={icon} size={24} color="black" />
      <Text style={{...styles.text,...{color:focused ? "white" : "#EEE"}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    text:{
        color:"white",
        textAlign:"center"
    }
})