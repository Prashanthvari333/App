import { View, Text,StyleSheet,Image,ImageBackground,TouchableOpacity,Button,TextInput } from 'react-native';
import React,{useState} from 'react';

const Login = () => {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);
    return (
      
     <View style={styles.container}>
         {/*<ImageBackground source={cdn.wallpapersafari.com/92/52/rFs7K0.jpg} resizeMode="cover" style={styles.image}></ImageBackground>*/}
         <Text style={styles.text}>user name:</Text>
         <TextInput style={styles.input} placeholder="user-name"></TextInput>
         <Text style={styles.text}>password:</Text>
         <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="password"
        keyboardType="numeric"
      />
         <Button style={styles.button} title="sign-in"></Button>
         <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
     </View>
      
 

    );
}


export default Login;

const styles = StyleSheet.create({

    container: {
      //  paddingTop: 40,
      //  paddingBottom:40,
       paddingHorizontal: 16,
        flex:1,
        justifyContent:'center',
        textAlign: 'center',
        backgroundColor:'#74c69d'
      
    },
    image: {
        flex: 1,
        justifyContent: "center"
      },
    text:{
        fontSize: 40, 
    },
    input:{
        borderColor:'black',
        borderRadius:8,
        borderWidth:1,
        marginBottom:20,
        color:'red',
        fontSize:25,

    },
    button: {
        fontWeight:'bold',
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10
      },
    countContainer: {
        alignItems: "center",
        padding: 10
      }
});