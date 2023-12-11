import { StyleSheet, Text, Pressable, Image } from 'react-native'
import { colors } from '../global/colors'

const ReligionItem = ({ item }) => {
  return (
    <Pressable style={styles.card}
      onPress={()=> console.log(item.url)}>
        <Text style={styles.text}>{item.name}</Text>
        <Image style={styles.image}
              resizeMode='cover'
              source={{ uri: item.url }}
        />
    </Pressable>
  )
}

export default ReligionItem

const styles = StyleSheet.create({
  card:{
    width:'80%',
    backgroundColor:colors.green2,
    marginHorizontal:'10%',
    marginVertical:10,
    paddingHorizontal:10,
    paddingVertical:15,
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  image:{
    height:100,
    width:100,

  }
})