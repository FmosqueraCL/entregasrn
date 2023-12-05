import { TextInput, Text, View, Button, StyleSheet } from "react-native";

const UserRegister = ({ValueMail, ValuePass, onMail, onPass, addUser}) => {
  return <View> 
    <Text>Ingresa tu Correo y Pass</Text>     
    <TextInput 
      style={styles.InputBox} 
      placeholder='Correo' 
      value = {ValueMail} 
      onChangeText={(t)=>onMail(t)}>
    </TextInput>
    <TextInput 
      style={styles.InputBox} 
      placeholder='Pass' 
      value ={ValuePass} 
      onChangeText={(t)=>onPass (t)}>
    </TextInput>
    <Button 
      title="Registrar"
      onPress={addUser}> 
    </Button>
  </View>   
}
const styles = StyleSheet.create({  
  InputBox: {
      backgroundColor: 'white',
      margin: 12,
      width: 240,
      height: 40,
      paddingHorizontal: 5,      
    }
    })
export default UserRegister