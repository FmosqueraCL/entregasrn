import { StyleSheet, Text, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import { setReligionsFilteredByCategory } from "../features/shop/shopSlice"
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category,navigation }) => {
    const dispatch = useDispatch() 
    console.log('hola')
    return (
      <Pressable onPress={()=>{ 
        dispatch (setReligionsFilteredByCategory(category))
        navigation.navigate("Category",{category})
      }}>
        <Card style={styles.container}>
          <Text style={styles.text}>{category}</Text>
        </Card>
      </Pressable>
    )
  }  
  export default CategoryItem  
  const styles = StyleSheet.create({
      container:{
          width:80,
          height:10,
          marginHorizontal:"10%",
          backgroundColor:colors.green2,
          margin:10,
          padding:10,
          justifyContent:"center",
          alignItems:"center",
      },
      text: {
        fontSize: 20,
    }
  })
