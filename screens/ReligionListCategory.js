import { StyleSheet, FlatList, View, Pressable, Text } from 'react-native'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import ReligionItem from '../components/ReligionItem'
import  allReligions  from '../data/religions.json'
import Search from '../components/Search'
import { colors } from '../global/colors'

const ReligionListCategory = ({ category, setCategory }) => {
  const [religions, setReligions] = useState([])
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
  }, [category, keyword])
  return (
    <View style={styles.container}>
      <Header title={category || 'Religions'}/>
      <Search onSearch={setKeyword}/>
      <View style ={styles.container}>
      <FlatList
        data={religions}
        keyExtractor = {item => item.id}
        renderItem = { ({ item }) => <ReligionItem item={item} />}
      />
      </View>
      <Pressable onPress={() => setCategory("")}>
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