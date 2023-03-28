import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Thriller extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="Keeper of the Lost Cities by Shannon Messenger" onPress={()=>Linking.OpenURL("https://www.13stream.com/wp-content/uploads/2022/11/Keeper-Of-The-Lost-Cities-PDFDrive-.pdf")}></Button>
                <Button title="Gone Girl by GIllian Fynn" onPress={()=>Linking.OpenURL("https://icrrd.com/media/15-05-2021-082725Gone-Girl-Gillian-Flynn.pdf")}></Button>
                <Button title="The Island by ADrian Mckinty" onPress={()=>Linking.OpenURL("https://links.ajpdf.com/pdf-the-island-by-adrian-mckinty/")}></Button>
            </view>
        )

        
    }
}



