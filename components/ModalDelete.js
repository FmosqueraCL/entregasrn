import {Modal, View, Text, Button, StyleSheet} from 'react-native'

const ModalDelete =({user, visible, onClose, onDelete}) =>{
    return <Modal
                visible ={visible}
            >
            <View style={StyleSheet.modalContainer}>
                <View style ={StyleSheet.modalContent}>
                    <Text style={styles.modalText}>¿Estas seguro que quieres borrar?</Text>
                    <Text style={StyleSheet.modalText}>{user.mail}</Text>
                    <Button title='Confirmar' onPress={onDelete}/>
                    <Button title='Cerrar' onPress={()=>onClose(false)}/>
                </View>
            </View>            
            </Modal>
}
const styles = StyleSheet.create ({
    modalContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    modalContent:{
        width:'80%',
        borderWidth:2,
        padding:10,
        gap:10
    },
    modalText:{
        textAlign:'center'
    }
})
export default ModalDelete