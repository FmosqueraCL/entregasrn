import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title = "Religion"}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor: colors.green2,
        height:80,
        width: '100%',
        justifyContent:'center',
        alignItems:'center'
    },
    text: {
        fontSize:30,
    }
  })
export default Header