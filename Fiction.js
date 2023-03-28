import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Fiction extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="Twenty Thousand Leagues Under The Sea By Jules Verne" onPress={()=>Linking.OpenURL("https://www.arvindguptatoys.com/arvindgupta/20000-leagues.pdf")}></Button>
                <Button title="The Mysterious Island By Jules Verne" onPress={()=>Linking.OpenURL("https://www.arvindguptatoys.com/arvindgupta/mysterious-island.pdf")}></Button>
                <Button title="The Daughter Of The Deep by Jules Verne" onPress={()=>Linking.OpenURL("https://fliphtml5.com/esqlo/whey/basic")}></Button>
            </view>
        )

        
    }
}



