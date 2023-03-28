import React,{Component} from 'react'
import {View,Button,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
export default class GeneralReading extends Component{
constructor(props){
    super(props)
}
    render(){
        return(
<View style={styles .container}>
    <ScrollView>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Fiction")}>
        <Text style={styles.subtxt}>
        Fiction
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Nonfiction")}>
        <Text style={styles.subtxt}>
        Non-fiction
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Fantasy")}>
        <Text style={styles.subtxt}>
        Fantasy
        </Text>
    </TouchableOpacity>
  <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Thriller")}>
        <Text style={styles.subtxt}>
        Thriller
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Romantic")}>
        <Text style={styles.subtxt}>
        Romantic
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Biographies")}>
        <Text style={styles.subtxt}>
        Biographies
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress={()=>this.props.navigation.navigate("Scholary")}>
        <Text style={styles.subtxt}>
        Scholary
        </Text>
    </TouchableOpacity>
    </ScrollView>
</View>

        )
    }
    
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F0BCE1"
    },
    subject:{
        width:20,
        height:20,
        backgroundColor:"blue",
        marginTop:20
   
   },
   subtxt:{
    justifyContent:"center",
    color:"white"
   }
})