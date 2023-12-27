import React from 'react'
import { View, StyleSheet } from 'react-native'
import User from './User' 

const UserList = ({ users }) => {
  return (
    <View style={styles.list}>
      {users.map(user => (
        <User key={user.id} user={user} /> 
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10
  }
})

export default UserList

