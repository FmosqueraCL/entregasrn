import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import allReligions from "../data/religions.json"
import { colors } from '../global/colors'

const ReligionDetail = ({ route,navigation }) => {
  const {id} = route.params
  const [ religion,setReligion ] = useState({})
  useEffect(()=>{
    const religionFinded = allReligions.find(religion => religion.id === id)
    setReligion(religionFinded)
  },[id])
  return (
    <View style={styles.container}>
      <View style={styles.content} >
          <Image
            style={styles.image}
            source={{uri: religion.url}}
            resizeMode='cover's
          />
          <View style={styles.containerText}>
            <Text style={styles.name}>{religion.name}</Text>
            <Text>{religion.description}</Text>
          </View>
          <View style={styles.containerPrice}>
            <Text style={styles.year}>$ {religion.year_of_foundation}</Text>
            <Pressable onPress={()=>navigation.navigate("Home")}>
              <View style={styles.back}>
                <Text style={styles.text}>VOLVER</Text>
            </View>
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default ReligionDetail

const styles = StyleSheet.create({
  container:{
    width:"100%",
    flex:1,
    justifyContent:"start",
    alignItems:"center",
},
content:{
  width:"100%"
},

image:{
  width:"100%",
  height:300
},
back: {
  backgroundColor: "#77dd77",
  width:100,
  height:100,
  marginBottom:100,
  alignItems: 'center',    
},
text:{
marginTop:40
},
 containerText:{
  gap:25,
  paddingHorizontal:5,
  paddingVertical:25
 },
 containerPrice:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    marginVertical:10
 },
 name:{
  fontSize:20,
  fontWeight:"bold"
 },
 year:{
  fontSize:30
 },
 buyNow:{
  backgroundColor:colors.green1,
  paddingVertical:5,
  paddingHorizontal:10,
  borderRadius:5
 },
 buyNowText:{
  color:"white"
 }
})