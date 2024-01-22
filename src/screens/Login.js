import {useState ,useEffect} from 'react'
import { View, Text ,StyleSheet, Pressable} from 'react-native'
import { colors } from '../global/colors'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'




const Login = ({navigation}) => {
  const dispatch = useDispatch()
  const [triggerLogin,{data,isError,isSuccess,error,isLoading}] = useLoginMutation()
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  useEffect(()=>{
    if(isSuccess) dispatch(setUser(data))
    if(isError) console.log(error)
  },[data,isError,isSuccess])


  const onSubmit = () => {
    triggerLogin({email,password})
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
          <Text style={styles.title} >Login to start</Text>
          <InputForm
            label="Email"
            value={email}
            onChangeText={(t) => setEmail(t)}
            isSecure = {false}
            error=""
          />
          <InputForm
            label="Password"
            value={password}
            onChangeText={(t) => setPassword(t)}
            isSecure={true}
            error=""
          />
          <SubmitButton onPress={onSubmit} title="Send"/>
          <Text style={styles.sub}>Not have an account?</Text>
          <Pressable onPress={()=> navigation.navigate("Signup")} >
              <Text style={styles.subLink}>Sign up</Text>
          </Pressable>
      </View>
    </View>
  )
}


export default Login


const styles = StyleSheet.create({
    main:{
      flex:1,
      justifyContent:"center",
      alignItems:"center"
    },
    container:{
      width:"90%",
      backgroundColor:colors.green1,
      gap:15,
      borderRadius:10,
      justifyContent:"center",
      alignItems:"center",
      paddingVertical:20
    },
    title:{
      fontSize:22,
      fontFamily:"Josefin",
      fontWeight: "bold",
    },
    sub:{
      fontSize:14,
      fontFamily:"Josefin",
      fontWeight: "bold",
    },
    subLink:{
      fontSize:14,
      fontFamily:"Josefin",
      color:"blue",
      fontWeight: "bold",
    }
})