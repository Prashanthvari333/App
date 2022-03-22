import { View, Text,TextInput,TouchableOpacity,Button,StyleSheet,KeyboardAvoidingView } from 'react-native';
import React from 'react';

const SingUp = () => {
  return (
   
    <View style={styles.container}>
      <Text style={styles.text}>user-name:</Text>
      <TextInput style={styles.input} placeholder='user-name'></TextInput>
      <Text style={styles.text}>password:</Text>
      <TextInput style={styles.input}  placeholder='password'></TextInput>
      <Text style={styles.text}>confirm-password:</Text>
      <TextInput style={styles.input} placeholder="confirm-password"></TextInput>
      <Text style={styles.text}>Phn no:</Text>
      <TextInput style={styles.input} placeholder='phone no.'></TextInput>
      <Text style={styles.text}>email_id:</Text>
      <TextInput style={styles.input} placeholder='eg. abc@gmail.com'></TextInput>
      <View style={{flex:1,flexDirection:'row',marginHorizontal:1}}>
      <TouchableOpacity style={[styles.button]}>
          <Text style={{color:'red',fontSize:20,textAlign:'center',}}>create account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
          <Text style={{color:'red',fontSize:20,textAlign:'center',}}>cancel</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default SingUp;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        textAlign:'center',
      
        backgroundColor:'#74c69d'
       
    },
    input:{
        borderWidth:1,
        borderColor:'green',
        borderRadius:10,
        color:'black',
        fontSize:20,
        marginHorizontal:20,
        backgroundColor:'white',
        
    },
    text:{
        fontWeight:'600',
        color:'#000',
        marginHorizontal:20,
        fontSize:20,
    },
    button:{
        width:200,
        height:40,
        backgroundColor:'#666',
        color:'white',
        margin:20,
        justifyContent:'center'
    }
});