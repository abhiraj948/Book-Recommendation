import React,{Component} from 'react'
import {View,Text,StyleSheet,Button,TextInput,Image} from "react-native"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default class Navigatorscreen extends Component {
render(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="GeneralReading" component={GeneralReading}/>
            <Stack.Screen name="AcademicReading" component={AcademicReading}/>
        </Stack.Navigator>
    )
}
}

