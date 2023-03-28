import React,{component} from "react"
import {View,Text,Button,StyleSheet,Image,TouchableOpacity,ScrollView, Linking} from  "react-native"
import GeneralReading from "./GeneralReading"
export default class Romantic extends GeneralReading{
    constructor(props){
        super(props)
            this.state={
                username:""
                


            
        }
    }
    render(){
        return(
            <view style={styles.container}>
                <Button title="The Fault In Our Stars by John Greene" onPress={()=>Linking.OpenURL("https://books-library.website/files/books-library.online-12292230Vr3R6.pdf")}></Button>
                <Button title="Fifty Shades Of Grey By E.L.James" onPress={()=>Linking.OpenURL("https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxhcnRpc2FubGFkeTgxfGd4OjhkYmEyMzQ1NDc4ODgw")}></Button>
                <Button title="Red,White and Royal Blue" onPress={()=>Linking.OpenURL("https://ettron.com/wp-content/uploads/2022/07/Red-White-And-Royal-Blue-pdf-free-download.pdf")}></Button>
            </view>
        )

        
    }
}



