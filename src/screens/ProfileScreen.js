import React from 'react'
import {  StyleSheet, ScrollView } from 'react-native' 
import { useSelector } from 'react-redux'
import Form from '../components/Form' 
import UserList from '../components/UserList' 
import { colors } from '../global/colors'

const ProfileScreen = () => {
  const users = useSelector(state => state.user.value.users) 

  return (
    <ScrollView style={styles.container}> 
      <Form user={users[0]} /> 
      <UserList users={users} /> 
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.lightGray
  },
})

export default ProfileScreen



