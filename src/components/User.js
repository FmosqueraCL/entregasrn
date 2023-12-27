import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../features/users/userSlice'


const User = ({ user }) => {
  const dispatch = useDispatch()
  const handleDelete = (id) => {
  dispatch(deleteUser(id)) 
  }
  return (
    <View style={styles.item}>
      <Text style={styles.text}>
        {user.name} - {user.email} - {user.role}
      </Text>
      {user.role !== 'admin' && <Button
        title="Delete"
        color="#EAB2E1" 
        onPress={() => handleDelete(user.id)} 
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#9CBEE4',
    borderRadius: 5,
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  text: {
    color: 'black',
  }
})


export default User


