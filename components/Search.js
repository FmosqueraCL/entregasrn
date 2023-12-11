import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { useState } from 'react'
import { colors } from '../global/colors'
import { AntDesign } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Search = ({onSearch}) => { 
    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const search = () => { 
        console.log(input)
        const expression = /\d/;
        if (expression.test(input)){
            setError('Usa Solo letras')
        } else {
            setError('')
            onSearch(input)
        }
    }
    const removeInput = () => {
        setInput('')
        setError('')
    }
  return (
    <View style = {styles.container}>
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder='Buscar Religion...'
            />
            <Pressable onPress={search}> 
                <AntDesign name='search1' size={25} color ='black' />
            </Pressable>
            <Pressable onPress={removeInput}>
                <Entypo name="circle-with-cross" size={25} color="black"/>
            </Pressable>
        </View>
        {error ? <Text style={styles.errorText}>{error}</Text> : null }
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        width: '80%',
        paddingTop:10,
    },
    input: {
        color: colors.green3,
        backgroundColor: 'white', 
        borderRadius:8,
        padding: 10,
        borderWidth:1,
        borderColor:colors.lightGray,
        width: '97%',
        fontSize: 20,
    },
    errorText:{
        color:'red'
    }
})
