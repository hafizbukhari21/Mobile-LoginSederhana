import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet, Button, Alert, BackHandler} from 'react-native'

export default function App(){
  const [data, setData] = useState({
    username:"",
    password:""
  })

  function HandleSubmit(){
    const {username, password} = data
    username==="hafiz" && password ==="hafiz"?
      Alert.alert("Judul Alert", "Success"):
      Alert.alert("Judul Alert", "fail")
    
  }
 
  return(
    <>
        <View style={myStyle.container}>
          <View style={myStyle.card}>
            <TextInput
              placeholder="username"
              style = {myStyle.inputStyle}
              onChangeText = {e=>{
                setData({...data,username:e})
                console.log(data)
              }
             }
            />
            <TextInput
              placeholder="password"
              style = {myStyle.inputStyle}
              onChangeText = {e=>{
                setData({...data,password:e})
                console.log(data)
              }
             }
            />
            <Button
              title="Submit"
              onPress={HandleSubmit}
            />
          </View>
        </View>
    </>
  )
}

const myStyle = StyleSheet.create({
  inputStyle:{
    padding:5,
    fontSize:15,
    marginVertical:45,
    margin:"auto",
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"blue"
  },
  card:{
    display:"flex",
    justifyContent:"center",
    width:250,
    height:350,
    backgroundColor:'white'
  }
})