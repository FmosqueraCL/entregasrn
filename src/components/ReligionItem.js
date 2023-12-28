import { StyleSheet, Text, Pressable, useWindowDimensions, Image } from 'react-native'
import { colors } from '../global/colors'
import {  useDispatch } from 'react-redux'
import { setReligionSelected } from '../features/shop/shopSlice'


const ReligionItem = ({ religion,navigation }) => {
  const {width} = useWindowDimensions()
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.card} onPress={()=>{
      dispatch( setReligionSelected(religion.id) )
      navigation.navigate("Religion",{id:religion.id})
      }} >
        <Text style={width > 350 ? styles.text : styles.textMin}>
          {religion.name}
        </Text>
        <Image style={styles.image}
              resizeMode='cover'
              source={{ uri: religion.url }}
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
  text:{
    width:"60%",
    textAlign:"center",
    fontSize:20
  },
  textMin:{
    width:"60%",
    textAlign:"center",
    fontSize:15
  },
  image:{
    minWidth:90,
    height:90,
    width:"30%"
  }
})