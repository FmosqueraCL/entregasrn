import { View, Text, Button, StyleSheet } from 'react-native'

const CardUser =({user,onModal}) => {
    return <View style={styles.CardUser}>
                <Text style={styles.CardText}>{user.mail}</Text>
                <Text style={styles.CardText}>{user.pass}</Text>
                <Button title='DEL' onPress= {()=> onModal(user)}> </Button>
            </View>
}
const styles= StyleSheet.create({
    CardUser: {        
        flexDirection:'row',
        padding:10
    },
    CardText: {
        color:'black',
        paddingHorizontal:50,
    }
})
export default CardUser