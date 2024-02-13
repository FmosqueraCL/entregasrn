import { Pressable, StyleSheet, Text, Image, useWindowDimensions } from 'react-native';
import { colors } from '../global/colors';

const religionItem = ({ religion, navigation, route }) => {
  const { id , name, image } = religion; 
  const { width } = useWindowDimensions(); 
  return (
    <Pressable
      style={styles.container}
      onPress={() => {
        navigation.navigate('Religion', { id }); 
      }}
    >
      <Text style={width > 350 ? styles.text : styles.textMin}>{name}</Text>
      {image ? ( 
        <Image style={styles.image} resizeMode="cover" source={{ uri: image }} />
      ) : null}
    </Pressable>
  );
};


export default religionItem;

    const styles = StyleSheet.create({
      container:{
           width:"80%",
           height:100,
           backgroundColor:colors.green1,
           marginHorizontal:"10%",
           marginVertical:10,
           paddingHorizontal:10,
           paddingVertical:15,
           borderRadius:5,
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"space-between",
           gap:30
       },
       text:{
         width:"60%",
         textAlign:"center",
         fontSize:20
       },
       textMin:{
         width:"60%",
         textAlign:"center",
         fontSize:15
       },
       image:{
           minWidth:90,
           height:90,
           width:"30%"
       }
   })