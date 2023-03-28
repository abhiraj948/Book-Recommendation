import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/Homescreen';
import LoginScreen from './Screens/loginscreen';
import AcademicReading from'./Screens/AcademicReading';
import GeneralReading from './Screens/GeneralReading';
import {createAppContainer,createSwitchNavigator} from "react-navigation";
import Biographies from './Screens/Biographies';
import Thriller from'./Screens/ThrillerBooks';
import Fantasy from './Screens/Fantasy';
import Fiction from './Screens/Fiction';
import Nonfiction from './Screens/Nonfiction';
import Romantic from './Screens/Romantic';
import Scholary from './Screens/Scholary';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

var Appnavigator=createSwitchNavigator({
  LoginScreen:LoginScreen,
  HomeScreen :HomeScreen,
  AcademicReading:AcademicReading,
    GeneralReading:GeneralReading,
    Biographies:Biographies,
    Thriller:Thriller,
    Fantasy:Fantasy,
    Fiction:Fiction,
    Nonfiction:Nonfiction,
    Romantic:Romantic,
    Scholary:Scholary
})

const AppContainer=createAppContainer(Appnavigator);
