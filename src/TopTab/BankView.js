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
        <Text style={style.textcasino}>View bank</Text>
        <Image source={require("../Assets/icon/BankImage.png")} style={style.cupsty} />
      </View>
      <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn} onPress={handleBackBtn}>
          <Image source={require('../Assets/icon/backarrow.png')} />
          <Text style={style.textstyleprofilebackbtn}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Profilebackbtn7}onPress={()=>handleaddbank()} >
            <Text style={{color:"black",fontWeight:"400"}}>Add Bank</Text>
             </TouchableOpacity>
      </View>
      <View style={style.Viewblackborder2}>
        <View style={style.viewdir}>
        <View style={style.Default}>
            <Text style={style.Defaulttext} >Default Account</Text>
       </View>
         <TouchableOpacity style={style.Deletebtn}>
            <Image source={require('../Assets/icon/Delete2.png')} style={{height:responsiveHeight(2),width:responsiveWidth(5)}}/>

         </TouchableOpacity>
       </View> 
       <View style={style.viewdir}>
                <Image style={{height:responsiveHeight(3),width:responsiveWidth(6),margin:responsiveHeight(1.5)}} source={require('../Assets/icon/Bank.png')}/>
               <Text style={style.Defaulttext2}>Bank account</Text>
            </View> 
            <Text style={style.Defaulttext3}>Bank name : Demo</Text>
            <Text style={style.Defaulttext3}>Account holder name : Demo</Text>
            <Text style={style.Defaulttext3}>Account no : 102448547874575</Text>
            <Text style={style.Defaulttext3}>IFSC code : D0909</Text>
            

     </View>
    </View>
  )
}