import { StyleSheet, View } from 'react-native';
import { useState } from 'react'
import UserRegister from './components/AddUser'
import ModalDelete from './components/ModalDelete'
import UserList from './components/UserList'
import uuid from 'react-native-uuid'

const App = () => {
  const [newUserMail,setNewUserMail] = useState ("")
  const [newUserPass,setNewUserPass] = useState ("")
  const [users, setUsers] = useState ([])
  const [userSelected, setUserSelected] = useState ({})
  const [modalVisible, setModalVisible] = useState (false)
  const HandlerAddUser = () => {
    const newUser = {
      id:uuid.v4(),
      mail: newUserMail,
      pass: newUserPass
    }
    setUsers(current => [...current,newUser])
    setNewUserMail ("")
    setNewUserPass ("")
  }
  const HandlerModal= (users) => {
    setUserSelected(users)
    setModalVisible(true)
  }
  const HandlerModalClose= () => {
    setModalVisible(false)
  }
  const handlerDeleteUser =() => {
    setUsers(current => current.filter(user => user.id !== userSelected.id))
    setModalVisible(false)
  }
  return (<View style={styles.body}>      
    <UserRegister 
      ValueMail = {newUserMail}
      ValuePass = {newUserPass}
      onMail = {setNewUserMail}
      onPass = {setNewUserPass}
      addUser = {HandlerAddUser}
    >        
    </UserRegister>
    <UserList 
      users={users}
      onModal={HandlerModal}
    />
    <ModalDelete
      user={userSelected}
      visible={modalVisible}
      onClose={HandlerModalClose}
      onDelete={handlerDeleteUser.bind(this, userSelected.id)}
    />
  </View>)      
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:100,
  }
})

export default App


