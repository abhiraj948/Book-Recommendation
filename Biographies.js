import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Biographies extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="My Inventions:the Autobiographies of Nikola Tesla" onPress={()=>Linking.OpenURL("http://commons.princeton.edu/josephhenry/wp-content/uploads/sites/71/2019/08/The_Inventions_of_Tesla.pdf")}></Button>
                <Button title="The Illustrated Long Walk To Freedon by Nelson Mandela" onPress={()=>Linking.OpenURL("https://zelalemkibret.files.wordpress.com/2012/01/the-autobiography-of-nelson-mandela.pdf")}></Button>
                <Button title="Autobiographical notes by james baldwin" onPress={()=>Linking.OpenURL("https://www.cusd80.com/cms/lib/AZ01001175/Centricity/Domain/1073/Autobiographical_Notes_full_text.pdf")}></Button>
            </view>
        )

        
    }
}



