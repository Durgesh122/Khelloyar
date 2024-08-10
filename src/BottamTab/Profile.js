import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, TextInput } from 'react-native';
import React, { useState } from 'react';
import style from '../style/style';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';

export default function Profile({ navigation }) {
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
  const handleProfile = () => {
  };
  const handleMybets = () => {

  };
  const handleExchange = () => {
    
  };
  const handleLogout = () => {
  };

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
      <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn} onPress={handleBackBtn}>
          <Image source={require('../Assets/icon/backarrow.png')} />
          <Text style={style.textstyleprofilebackbtn}>Back</Text>
        </TouchableOpacity>
        <Text style={style.textstyle2Profile}>Personal</Text>
      </View>
      <ScrollView>
        <View style={style.viewdir5}>
          <View style={style.Profileborder}>
            <View style={style.viewdir}>
              <Text style={style.textstylprofile2}>Profile</Text>
              <TouchableOpacity style={style.Profilebackbtn2}>
                <Text style={style.textstyleprofilebackbtn2}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={style.Profilebackbtn}>
                <Text style={style.textstyleprofilebackbtn}>Save</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: responsiveHeight(1) }}>
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>Account Name</Text>
              <TextInput style={style.textinputProfile} />
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>Full Name</Text>
              <TextInput style={style.textinputProfile} />
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>Mobile Number</Text>
              <TextInput style={style.textinputProfile} />
              <Text style={style.textstylprofile2}>Profile</Text>
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>Current Password</Text>
              <TextInput style={style.textinputProfile} secureTextEntry />
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>New Password</Text>
              <TextInput style={style.textinputProfile} secureTextEntry />
              <Text style={{ marginLeft: responsiveWidth(3.5) }}>Confirm Password</Text>
              <TextInput style={style.textinputProfile} secureTextEntry />
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="fade"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={style.Container}>
            <View style={style.modaldrowar}>
              <View style={style.drrawr}>
                <Text style={style.textgame6}>Bal</Text>
                <Text style={[style.textgame6, { color: "green" }]}>0.00</Text>
              </View>
              <View style={style.drrawr}>
                <Text style={style.textgame6}>Net Exposure</Text>
                <Text style={[style.textgame6, { color: "red" }]}>0</Text>
              </View>
              <TouchableOpacity onPress={handleProfile}>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/Personal.png')} style={{ height: responsiveHeight(3), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(3) }} />
                  <Text style={style.drewertext}>Personal</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
              <TouchableOpacity>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/Transaction.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                  <Text style={style.drewertext2}>Transaction</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
              <TouchableOpacity onPress={handleMybets}>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/My_Bets.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                  <Text style={style.drewertext2}>My Bets</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
              <TouchableOpacity onPress={handleExchange}>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/profit.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                  <Text style={style.drewertext2}>Profit & Loss</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={style.Logoutbtn} onPress={handleLogout}>
                <Text style={{ color: "white", fontWeight: "bold", marginTop: responsiveHeight(1), textAlign: "center" }}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}
