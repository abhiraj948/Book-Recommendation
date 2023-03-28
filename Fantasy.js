import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Fantasy extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="The name of the Wind by PAtrick Rothfuss" onPress={()=>Linking.OpenURL("https://www.allfreenovel.com/Page/Story/10060/page-1-of-The-Name-of-the-Wind--The-Kingkiller-Chronicle-1-/1/79")}></Button>
                <Button title="The Way of The Kings by Brandon Sanderson" onPress={()=>Linking.Open4URL("https://www.brandonsanderson.com/wp-content/uploads/2020/07/The-Way-of-Kings-Prime-by-Brandon-Sanderson_web.pdf")}></Button>
                <Button title="A wizard Of Earthsea by Ursula K.Le Guin" onPress={()=>Linking.OpenURL("https://cornerstones--live.s3.eu-west-2.amazonaws.com/uploads/2020/03/05084947/A-Wizard-of-Earthsea-Ursula-Le-Guin.pdf")}></Button>
            </view>
        )

        
    }
}