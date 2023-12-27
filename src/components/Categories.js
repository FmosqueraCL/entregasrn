import { FlatList, StyleSheet} from 'react-native'
import CategoryItem from './CategoryItem'
import { useSelector } from 'react-redux'

const Categories = ({navigation}) => {
  const categories = useSelector((state) => state.shop.value.categories)
  console.log(categories)
  console.log(CategoryItem)
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
    height:'100%',
    width:'100%'
}
})