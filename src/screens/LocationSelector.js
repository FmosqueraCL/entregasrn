import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddButton from '../components/AddButton'
import * as Location from 'expo-location'
import MapPreview from '../components/MapPreview'
import { googleApi } from '../firebase/googleApi'
import {usePostUserLocationMutation } from '../app/services/shopServices'
import { useSelector } from 'react-redux'

const LocationSelector = ({navigation}) => {

    const localId = useSelector(state => state.auth.value.localId)
    const [location,setLocation] = useState({latitude:"",longitude:""})
    const [address,setAddress] = useState("")
    const [errorMsg, setErrorMsg] = useState(null)
    const [triggerPostUserLocation] = usePostUserLocationMutation()


    useEffect(()=>{
        (async ()=>{
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied')
                return
              }
              let location = await Location.getCurrentPositionAsync({}) 
              setLocation({
                latitude:location.coords.latitude,
                longitude:location.coords.longitude
            })                 
        })()
    },[])

    useEffect(()=>{
      (async ()=>{
        try {
          if(location.latitude){
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleApi.mapStatic}`)

            const data = await response.json()
            setAddress(data.results[0].formatted_address)
          }
      
        } catch (error) {
          setErrorMsg(error.message)
        }
      })()
    },[location])

    const onConfirmAddress = async () => {
      try {
        const locationFormatted = {
          address,
          ...location
        }
        const data =  await triggerPostUserLocation({localId,locationFormatted})
        console.log(data)
        navigation.goBack()
      } catch (error) {
        setErrorMsg(error.message)
      }

    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{address} </Text>
      <MapPreview latitude={location.latitude} longitude={location.longitude}/>
      <AddButton title="Confirmar Localizacion" onPress={onConfirmAddress}/>
    </View>
  )
}

export default LocationSelector

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        marginTop:40,
        gap:20
    },
    text:{
        fontSize:16
    }
})