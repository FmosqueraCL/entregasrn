import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'
import { colors } from '../global/colors'

const CategoryItem = ({ category,navigation }) => {
    return (
      <Pressable onPress={()=> navigation.navigate ( "Category",{category} )}>
          <Card style={styles.cardContainer}> 
              <Text style={styles.text}>{category}</Text> 
          </Card>
      </Pressable>
    )
  }
  
  

export default CategoryItem

const styles = StyleSheet.create({
    cardContainer: {
        width:"80%",
        marginHorizontal:"10%",
        backgroundColor:colors.green2,
        margin:10,
        padding:10,
        justifyContent:"center",
        alignItems:"center"
    },
    text: {
        fontSize: 20,
    }
})
