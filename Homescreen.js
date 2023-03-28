import React,{Component} from 'react'
import {View,Button,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
export default class HomeScreen extends Component{
constructor(props){
    super(props)
}
render(){
return(
    <View style={styles.container}>
        <Image styles={styles.logo}source={require("../assets/logo.jpg")}>

        </Image>
        <Text style={styles.titletext}>Book Refferer</Text>
        <TouchableOpacity style={styles.GeneralReading}
        onPress={
            this.props.navigation.navigate("GeneralReading")
        }
        >
            <Text style={styles.g1}>General Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.AcademicReading}
        onPress={
            this.props.navigation.navigate("AcademicReading")
        }
        >
            <Text style={styles.g2}>Academic Reading</Text>
        </TouchableOpacity>
    </View>
)
 
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0BCE1"
    },
    titletext:{
     textAlign:"center",
     fontSize:20
},
     GeneralReading:{
     width:20,
     height:20,
     backgroundColor:"blue",
     marginTop:20

},
    AcademicReading:{
    width:20,
    height:20,
    backgroundColor:"blue",
    marginTop:20

},
g1:{
    justifyContent:"center",
    color:"white",

},
g2:{
    justifyContent:"center",
    color:"white",
    
},
logo:{
    width:200,
    height:200
}
})