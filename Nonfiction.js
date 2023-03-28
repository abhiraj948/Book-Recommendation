import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Nonfiction extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="The DIary Of A Young Girl" onPress={()=>Linking.OpenURL("https://www.englishcenter.dk/Files/Billeder/PDF/pdflongman/PenguinReaders%20Level%204/Diary%20TN.pdf")}></Button>
                <Button title="Ego Is The Enemy" onPress={()=>Linking.OpenURL("https://thereadershub.org/wp-content/uploads/2020/07/Ryan_Holiday_Ego_is_the_Enenmyz-lib.org_.pdf")}></Button>
                <Button title="A Short History Of Nearly Everything" onPress={()=>Linking.OpenURL("http://www.huzheng.org/bookstore/AShortHistoryofNearlyEverything.pdf")}></Button>
            </view>
        )

        
    }
}