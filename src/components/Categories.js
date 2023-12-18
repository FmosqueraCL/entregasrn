import { StyleSheet, FlatList } from 'react-native' 
import { categories } from '../data/categories.json'
import CategoryItem from './CategoryItem'


const Categories = ({navigation}) => {
  return (
        <FlatList
          style={styles.container}
          data={categories}
          keyExtractor={(item) => item.id} 
          renderItem={({item}) => <CategoryItem
                                    category={item}
                                    navigation={navigation}
                                    />}

        />
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        margin: 10,
    }
})
