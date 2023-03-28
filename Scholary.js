import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Scholary extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="The Greart Gatsby by F.Scott Fitzgerald" onPress={()=>Linking.OpenURL("https://www.wsfcs.k12.nc.us/cms/lib/NC01001395/Centricity/Domain/7935/Gatsby_PDF_FullText.pdf")}></Button>
                <Button title="Fahrenheit 451 by Ray Bradbury" onPress={()=>Linking.OpenURL("https://jghsenglish.edublogs.org/files/2015/02/Fahrenheit-451.pdf")}></Button>
                <Button title="The New Jim Crow by Michelle Alexander" onPress={()=>Linking.OpenURL("https://static1.squarespace.com/static/5e0185311e0373308494e5b6/t/5e0833e3afc7590ba079bbb4/1577595881870/the_new_jim_crow.pdf")}></Button>
            </view>
        )

        
    }
}



