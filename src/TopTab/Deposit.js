import { View, Text,Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from '../style/style'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default function BankView({navigation}) {
    const formattedDate = new Date().toISOString().slice(0, 10);
    const [modalVisible, setModalVisible] = useState(false);
    const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
  
    const handleBackBtn = () => {
      navigation.goBack("");
    };
    const handleHome = () => {
      navigation.navigate("Home");
    };
    const handleBackFootball = () => {
      navigation.navigate("Football");
    };
    const handleBackTennis = () => {
      navigation.navigate("Tennis");
    };
    const handleBackCasino = () => {
      navigation.navigate("Casino");
    };
    const handleBackCricket = () => {
      navigation.navigate("Cricket");
    };
    const handleBackAviator = () => {
      navigation.navigate("Aviator");
    };
    const handleaddbank=()=>{
        navigation.navigate("AddBank")
    }
    
  return (
    <View style={style.Container}>
      <ScrollView>
      <View style={style.viewdir}>
        <Image source={require('../Assets/image/Khelloyaar-2.png')} style={style.logo2} />
        <Image source={require("../Assets/icon/Shape.png")} style={{ height: responsiveWidth(10), width: responsiveWidth(10), margin: responsiveHeight(1.2), marginLeft: responsiveWidth(15) }} />
        <View>
          <Text style={{ fontSize: responsiveFontSize(1.5), fontWeight: "bold", color: "black", marginTop: responsiveHeight(1.2) }}>Krishnapalpate</Text>
          <Text style={{ fontSize: responsiveFontSize(1.3), fontWeight: "bold", color: "green" }}>Bal:0</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: responsiveFontSize(1.2), marginRight: responsiveWidth(1) }}>{formattedDate}</Text>
            <Text style={{ fontSize: responsiveFontSize(1.2), marginRight: responsiveWidth(1) }}>{formattedTime}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image source={require("../Assets/icon/downarrow2.png")} style={style.downarrow} />
        </TouchableOpacity>
      </View>
      <View style={style.blackviewborder}>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleHome}>
            <Image source={require('../Assets/icon/Home.png')} style={style.Profileicon} />
            <Text style={style.textstyleprofile}>HOME</Text>
          </TouchableOpacity>
        </View>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleBackCricket}>
            <Image source={require('../Assets/icon/sports_cricket.png')} style={style.Profileicon} />
            <Text style={style.textstyleprofile}>CRICKET</Text>
          </TouchableOpacity>
        </View>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleBackFootball}>
            <Image source={require('../Assets/icon/Football.png')} style={style.Profileicon2} />
            <Text style={style.textstyleprofile}>FOOTBALL</Text>
          </TouchableOpacity>
        </View>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleBackTennis}>
            <Image source={require('../Assets/icon/tennis.png')} style={style.Profileicon} />
            <Text style={style.textstyleprofile}>TENNIS</Text>
          </TouchableOpacity>
        </View>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleBackCasino}>
            <Image source={require('../Assets/icon/Casino.png')} style={style.Profileicon} />
            <Text style={style.textstyleprofile}>CASINO</Text>
          </TouchableOpacity>
        </View>
        <View style={style.profilebackview}>
          <TouchableOpacity onPress={handleBackAviator}>
            <Image source={require('../Assets/icon/airplanemode_active.png')} style={style.Profileicon3} />
            <Text style={style.textstyleprofile}>AVIATOR</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.Viewblackborder}>
        <View style={style.borderred}></View>
        <Text style={style.textcasino}>Deposit</Text>
        <Image source={require("../Assets/icon/goldborder.png")} style={style.cupsty2} />

      </View>
      <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn} onPress={handleBackBtn}>
          <Image source={require('../Assets/icon/backarrow.png')} />
          <Text style={style.textstyleprofilebackbtn}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={style.Viewblackborder2}>
        <View>
        <View style={style.Default2}>
            <Text style={style.Defaulttext} >Copy this bank details and make payment</Text>
       </View>
         
       </View> 
       <View style={{margin:responsiveWidth(1),flexDirection:"row"}}>
        
            <Text style={style.Defaulttext4}>Account number</Text>
            <Text style={style.Defaulttext5}>Bank name</Text>           
       </View>
          <View style={{margin:responsiveWidth(1),flexDirection:"row"}}>
            <Text style={style.Defaulttext4}>3035845896478558</Text>
            <Text style={style.Defaulttext4}>Dcb-culcutta trade venture</Text>
          </View>  
            
          <View style={{margin:responsiveWidth(1),flexDirection:"row"}}>
            <Text style={style.Defaulttext4}>Account holder</Text>
            <Text style={style.Defaulttext6}>IFSC code</Text>
          </View>
          
          <View style={{margin:responsiveWidth(1),flexDirection:"row"}}>
            <Text style={style.Defaulttext4}>Calcutta trade venture</Text>
            <Text style={style.Defaulttext4}>DCBL0000187</Text>
          </View>

     </View>
     <View style={style.Viewblackborder2}>
      <View style={style.Default2}>
        <Text style={{color:"white",fontSize:responsiveFontSize(1.5),fontWeight:"bold"}}>Upload Payment Receipt (Maximum Size Of The Image 5MB)</Text></View>
        <Text style={{color:"white",fontSize:responsiveFontSize(1.5),textAlign:"center",marginTop:responsiveHeight(5)}}>Upload file (Clear Image)</Text>
         <Image source={require('../Assets/icon/upload.png')}style={{height:responsiveHeight(3),width:responsiveWidth(5),marginLeft:responsiveWidth(45),marginTop:responsiveHeight(2)}}/>
         <Text style={{color:"white",fontSize:responsiveFontSize(1.5),textAlign:"center",marginTop:responsiveHeight(2)}}>Drop your file to Upload or BROWSER</Text>

     </View>
     </ScrollView>
    </View>
  )
}