import React,{Component} from 'react'
import {View,Button,Text,StyleSheet,Image,TouchableOpacity,ScrollView} from 'react-native'
export default class AcademicReading extends Component{
constructor(props){
    super(props)
}
    render(){
        return(
<View style={styles .container}>
    <ScrollView>
    <TouchableOpacity style={styles.subject}onPress="https://ncert.nic.in/textbook/pdf/jesc1dd.zip">
        <Text style={styles.subtxt}>
        Physics
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress="https://scert.telangana.gov.in/pdf/publication/ebooks2019/x%20biology%20em.pdf">
        <Text style={styles.subtxt}>
        Biology
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress=":https://www.pdfdrive.com/download.pdf?id=176372001&h=97416422143c270892206d7b88ca9286&u=cache&ext=pdf">
        <Text style={styles.subtxt}>
        Chemistry
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress="https://drive.google.com/uc?id=1XCjSFGAPhJwzq9zLMY9I8Ta_XWdpELgv&export=download">
        <Text style={styles.subtxt}>
        Mathematics
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress="https://drive.google.com/uc?id=1dmHB95MwXUCNKWKkbs3O9J6O7izYBJub&export=download">
        <Text style={styles.subtxt}>
        English
        </Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.subject}onPress="https://www.jagranjosh.com/articles/ncert-book-class-10-hindi-kritika-free-pdf-download-1601304607-1">
        <Text style={styles.subtxt}>
        Hindi
        </Text>
</TouchableOpacity>
        <TouchableOpacity style={styles.subject}onPress="https://cbseacademic.nic.in/web_material/doc/2014/12_ICT-X.pdf">
        <Text style={styles.subtxt}>
        Computer Science
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