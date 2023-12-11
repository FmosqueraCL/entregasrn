import { StyleSheet, Text, View, FlatList } from 'react-native' 
import { categories } from '../data/categories.json'
import CategoryItem from './CategoryItem'


const Categories = ({setCategorySelected}) => {
  return (
    <View style ={styles.container}>
        <Text style={styles.title}>Categorias</Text>
        <FlatList style={styles.container}
          data={categories}
          keyExtractor={category => category} 
          renderItem={({item}) => <CategoryItem
                                    category={item}
                                    setCategorySelected ={setCategorySelected}
                                    />}

        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        margin: 10,
    },
    title: {
      fontSize: 24, 
      color: '#333', 
      textAlign: 'center', 
    }
})
