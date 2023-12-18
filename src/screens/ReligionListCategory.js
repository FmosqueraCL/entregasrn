import { StyleSheet, FlatList, View, Pressable, Text } from 'react-native'
import { useEffect, useState } from 'react'
import ReligionItem from '../components/ReligionItem'
import  allReligions  from '../data/religions.json'
import Search from '../components/Search'
import { colors } from '../global/colors'

const ReligionListCategory = ( {navigation,route} ) => {
  const {category} = route.params
  const [religions, setReligions] = useState([allReligions])
  const [keyword, setKeyword] = useState('')
  useEffect(()=> {
    if (category){
      const religions = allReligions.filter(religion => religion.category === category)
      const religionsFiltered = religions.filter(religion => religion.name.includes(keyword))
      setReligions(religionsFiltered)
    } else {
      const religionsFiltered = allReligions.filter(religion => religion.name.includes(keyword))
      setReligions(religionsFiltered)
    }
  }, [keyword])
  return (
    <View style={styles.container}>
      <Search onSearch={setKeyword}/>
      <View style ={styles.container}>
      <FlatList
        data={religions}
        keyExtractor = {item => item.id}
        renderItem = { ({ item }) => <ReligionItem religion={item} navigation={navigation} route={route}/>}
      />
      </View>
      <Pressable onPress={()=>navigation.navigate("Home")}>
        <View style={styles.back}>
          <Text style={styles.text}>VOLVER</Text>
        </View>
      </Pressable>
    </View>
  )
}

export default ReligionListCategory

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height:'100%',
    flex: 1, 
    alignItems: 'center',
    backgroundColor: colors.green1, 
    paddingHorizontal: 10,
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
  }
})