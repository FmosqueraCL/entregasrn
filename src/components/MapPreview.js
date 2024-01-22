import { StyleSheet,Image} from 'react-native'
import React from 'react'
import { googleApi } from '../firebase/googleApi'

const MapPreview = ({latitude,longitude}) => {

    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}
    &zoom=15
    &size=700x300
    &maptype=roadmap
    &markers=color:blue%7Clabel:D%7C${latitude},${longitude}
    &key=${googleApi.mapStatic}`

  return (
    <Image source={latitude ? {uri:mapPreviewUrl} : require("../../assets/map.png")} style={styles.image}/>
  )
}

export default MapPreview

const styles = StyleSheet.create({
    image:{
        width:300,
        height:300   
     }
})