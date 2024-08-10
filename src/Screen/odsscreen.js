import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert, FlatList, TextInput, Dimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import style from '../style/style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../TopTab/home';
import Cricket from '../TopTab/Cricket';
import Football from '../TopTab/Football';
import Tennis from '../TopTab/Tennis';
import Casino from '../TopTab/Casino';
import Aviator from '../TopTab/Aviator';
import Profile from '../BottamTab/Profile';
import { Heightdim } from '../style/uttility';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Top = createMaterialTopTabNavigator();

export default function Mainodds({ navigation }) {
  const formattedDate = new Date().toISOString().slice(0, 10);
  const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
  const [modalvisibal, setModalVisibal] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const [oddsvisibal,setoddsvisibal] = useState(false)
  const [oddsvisibal2,setoddsvisibal2] = useState(false)
  const [oddsvisibal3,setoddsvisibal3] = useState(false)
  const [oddsvisibal4,setoddsvisibal4] = useState(false)
  const [oddsvisibal5,setoddsvisibal5] = useState(false)


  const toggleoddsvisibal=()=>{
    setoddsvisibal(!oddsvisibal)
  }
  const toggleoddsvisibal2=()=>{
    setoddsvisibal2(!oddsvisibal2)
  }
  const toggleoddsvisibal3=()=>{
    setoddsvisibal3(!oddsvisibal3)
  }
  const toggleoddsvisibal4=()=>{
    setoddsvisibal4(!oddsvisibal4)
  }
  const toggleoddsvisibal5=()=>{
    setoddsvisibal5(!oddsvisibal5)
  }

  const handaletommorrow = () => {
    navigation.navigate("Tomorrow")
  }

  const imageData = [
    {
      id: "01",
      image: require('../Assets/image/cricket-bat-ball.png')
    },
    {
      id: "02",
      image: require('../Assets/image/crowd.png')
    },
    {
      id: "03",
      image: require('../Assets/image/players.png')
    },
  ];

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDot = (index) => {
    return (
      <View key={index} style={[style.imagedot, index === activeIndex ? { backgroundColor: 'rgba(187, 22, 32, 1)' } : null]}></View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ height: responsiveHeight(25), width: responsiveWidth(100) }} />
      </View>
    );
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

  const getTabColor = (tabName) => {
    return tabName === activeTab ? 'rgba(187, 22, 32, 1)' : 'transparent';
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const handleMybets = () => {
    navigation.navigate("My_Bets");
  };

  const handlecasino = () => {
    navigation.navigate("Casino");
  };

  const handleHome1 = () => {
    navigation.navigate("Home");
  };

  const handleexchange = () => {
    navigation.navigate("ProfitLoss");
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "No",
          onPress: () => console.log("Logout cancelled"),
          style: "cancel"
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("Logging out");
            navigation.navigate("Login");
          }
        }
      ]
    );
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
        <TouchableOpacity onPress={() => setModalVisibal(true)}>
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
      <View>
        <FlatList
          data={imageData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          onScroll={handleScroll}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={style.renderdotstyle}>
        {imageData.map((dot, index) => renderDot(index))}
      </View>
      <TextInput style={style.searchsty} placeholder='Enter your search' />
      <Image style={style.serachicon} source={require('../Assets/icon/serachicon.png')} />
      <View style={style.Crickescreen}>
        <Text style={{ color: "white", fontSize: responsiveFontSize(1.5), fontWeight: "500", marginLeft: responsiveWidth(1.5) }}>In-Play</Text>
        <TouchableOpacity style={{ height: responsiveHeight(4), width: responsiveWidth(20), backgroundColor: "white", justifyContent: "center", alignItems: "center", marginLeft: responsiveWidth(10), borderRadius: responsiveWidth(1.5) }}>
          <Text style={{ color: "black", fontSize: responsiveFontSize(1.5), fontWeight: "500" }}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handaletommorrow()} style={{ height: responsiveHeight(4), width: responsiveWidth(20), justifyContent: "center", alignItems: "center", marginLeft: responsiveWidth(5), borderRadius: responsiveWidth(1.5) }}>
          <Text style={{ color: "white", fontSize: responsiveFontSize(1.5), fontWeight: "500" }}>Tomorrow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: responsiveHeight(4), width: responsiveWidth(20), justifyContent: "center", alignItems: "center", marginLeft: responsiveWidth(5), borderRadius: responsiveWidth(1.5) }}>
          <Text style={{ color: "white", fontSize: responsiveFontSize(1.5), fontWeight: "500" }}>Upcoming</Text>
        </TouchableOpacity>


      </View>
 
      <View style={style.Crickescreen2}>
        <View style={style.viewdir}>
          <Image source={require("../Assets/icon/Boll.png")} style={style.bollsty} />
          <Text style={style.textcri}>United Arab Emirates Women v Ireland Women</Text>
        </View>
        <Text style={{ color: "white", fontSize: responsiveFontSize(1.5), marginLeft: responsiveWidth(8.5), marginTop: responsiveHeight(-1.5) }}>hii</Text>
      </View>
      <ScrollView>
        <View style={style.viewdir}>
          <View style={style.crickettoods}>
            <Image source={require("../Assets/icon/star.png")} style={{ height: 15, width: 15 }} />
            <Text style={style.textcri}>Match Odds</Text>
            <TouchableOpacity onPress={toggleoddsvisibal}>
            <Image source={!oddsvisibal ? require("../Assets/icon/Plus.png"):require("../Assets/icon/minus.png")}
            style={{height:responsiveWidth(4),width:responsiveWidth(4)}} />
            </TouchableOpacity>
          </View>
          {oddsvisibal && (
            <View>
            <View style={style.viewdir}>
            <View style={style.backlay}>
            <Text style={style.cricketbackbtnborder}>Back</Text>
            </View>
            <View style={style.backlay2}>
            <Text style={style.cricketbackbtnborder}>Lay</Text>
            </View>
            </View>
            <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>United Arab Emirates Women</Text>
          <View style={style.backlayno}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
          </View>
          <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "green"}}>211.00</Text>
        </View>
        <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>Ireland Women</Text>
          <View style={style.backlayno2}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
        </View>
        <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "red" }}>-50.00</Text>
        </View>
        </View>
         )}
        </View>
        <View style={style.viewdir}>
          <View style={style.crickettoods}>
            <Image source={require("../Assets/icon/star.png")} style={{ height: 15, width: 15 }} />
            <Text style={style.textcri}>Bookmaker</Text>
            <TouchableOpacity onPress={toggleoddsvisibal2}>
            <Image source={!oddsvisibal2 ? require("../Assets/icon/Plus.png"):require("../Assets/icon/minus.png")}
            style={{height:responsiveWidth(4),width:responsiveWidth(4),marginLeft:responsiveWidth(1)}} />
            </TouchableOpacity>
          </View>
          {oddsvisibal2 && (
            <View>
            <View style={style.viewdir}>
            <View style={style.backlay}>
            <Text style={style.cricketbackbtnborder}>Back</Text>
            </View>
            <View style={style.backlay2}>
            <Text style={style.cricketbackbtnborder}>Lay</Text>
            </View>
            </View>
            <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>United Arab Emirates Women</Text>
          <View style={style.backlayno}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
          </View>
          <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "green"}}>211.00</Text>
        </View>
        <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>Ireland Women</Text>
          <View style={style.backlayno2}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
        </View>
        <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "red" }}>-50.00</Text>
        </View>
        </View>
         )}
        </View>
        <View style={style.viewdir}>
          <View style={style.crickettoods}>
            <Image source={require("../Assets/icon/star.png")} style={{ height: 15, width: 15}} />
            <Text style={style.textcri}>Fancy</Text>
            <TouchableOpacity onPress={toggleoddsvisibal3}>
            <Image source={!oddsvisibal3 ? require("../Assets/icon/Plus.png"):require("../Assets/icon/minus.png")}
            style={{height:responsiveWidth(4),width:responsiveWidth(4),marginLeft:responsiveWidth(9.5)}} />
            </TouchableOpacity>
          </View>
          {oddsvisibal3 && (
            <View>
            <View style={style.viewdir}>
            <View style={style.backlay}>
            <Text style={style.cricketbackbtnborder}>Back</Text>
            </View>
            <View style={style.backlay2}>
            <Text style={style.cricketbackbtnborder}>Lay</Text>
            </View>
            </View>
            <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>United Arab Emirates Women</Text>
          <View style={style.backlayno}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
          </View>
          <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "green"}}>211.00</Text>
        </View>
        <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>Ireland Women</Text>
          <View style={style.backlayno2}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
        </View>
        <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "red" }}>-50.00</Text>
        </View>
        </View>
         )}
        </View>
        <View style={style.viewdir}>
          <View style={style.crickettoods}>
            <Image source={require("../Assets/icon/star.png")} style={{ height: 15, width: 15 }} />
            <Text style={style.textcri}>Sessions</Text>
            <TouchableOpacity onPress={toggleoddsvisibal4}>
            <Image source={!oddsvisibal4 ? require("../Assets/icon/Plus.png"):require("../Assets/icon/minus.png")}
            style={{height:responsiveWidth(4),width:responsiveWidth(4),marginLeft:responsiveWidth(4.5)}} />
            </TouchableOpacity>
          </View>
          {oddsvisibal4 && (
            <View>
            <View style={style.viewdir}>
            <View style={style.backlay}>
            <Text style={style.cricketbackbtnborder}>Back</Text>
            </View>
            <View style={style.backlay2}>
            <Text style={style.cricketbackbtnborder}>Lay</Text>
            </View>
            </View>
            <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>United Arab Emirates Women</Text>
          <View style={style.backlayno}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
          </View>
          <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "green"}}>211.00</Text>
        </View>
        <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>Ireland Women</Text>
          <View style={style.backlayno2}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
        </View>
        <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "red" }}>-50.00</Text>
        </View>
        </View>
         )}
        </View>
        <View style={style.viewdir}>
          <View style={style.crickettoods}>
            <Image source={require("../Assets/icon/star.png")} style={{ height: 15, width: 15 }} />
            <Text style={style.textcri}>Match Odds</Text>
            <TouchableOpacity onPress={toggleoddsvisibal5}>
            <Image source={!oddsvisibal5 ? require("../Assets/icon/Plus.png"):require("../Assets/icon/minus.png")}
            style={{height:responsiveWidth(4),width:responsiveWidth(4)}} />
            </TouchableOpacity>
          </View>
          {oddsvisibal5 && (
            <View>
            <View style={style.viewdir}>
            <View style={style.backlay}>
            <Text style={style.cricketbackbtnborder}>Back</Text>
            </View>
            <View style={style.backlay2}>
            <Text style={style.cricketbackbtnborder}>Lay</Text>
            </View>
            </View>
            <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>United Arab Emirates Women</Text>
          <View style={style.backlayno}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
          </View>
          <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "green"}}>211.00</Text>
        </View>
        <View style={style.viewdir}>
          <Text style={style.cricketbackbtnborder1}>Ireland Women</Text>
          <View style={style.backlayno2}>
            <Text style={style.cricketbackbtnborder}>5.1</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>3139</Text>
          </View>
          <View style={style.backlayno1}>
            <Text style={style.cricketbackbtnborder}>5.6</Text>
            <Text style={{ color: "black", fontSize: responsiveHeight(1), textAlign: "center" }}>4145</Text>
          </View>
        </View>
        <View style={style.viewcri}>
          <Text style={{ color: "black", fontWeight: "bold",marginLeft:responsiveWidth(-38) }}>»</Text>
          <Text style={{ color: "red" }}>-50.00</Text>
        </View>
        </View>
         )}
        </View>
       
     
      
        
        

             </ScrollView>

      <View style={style.BottomTabsty}>
        <TouchableOpacity style={[style.homeiconeborder1, { backgroundColor: getTabColor('Profile') }]} >
          <Image source={require('../Assets/icon/Profile.png')} style={style.Bottomicon} />
          <Text style={style.bottomlogotext2}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.homeiconeborder2, { backgroundColor: getTabColor('Casino') }]} onPress={handlecasino}>
          <Image source={require('../Assets/icon/Casino.png')} style={style.Bottomicon} />
          <Text style={style.bottomlogotext2}>Casino</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.homeiconeborder2, { backgroundColor: getTabColor('Home') }]} onPress={handleHome}>
          <Image source={require('../Assets/icon/Home.png')} style={style.Bottomicon} />
          <Text style={style.bottomlogotext2}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.homeiconeborder2, { backgroundColor: getTabColor('Exchange') }]} >
          <Image source={require('../Assets/icon/Exchange.png')} style={style.Bottomicon} />
          <Text style={style.bottomlogotext2}>Exchange</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[style.homeiconeborder2, { backgroundColor: getTabColor('My bets') }]} >
          <Image source={require('../Assets/icon/Mybets.png')} style={style.Bottomicon} />
          <Text style={style.bottomlogotext2}>My bets</Text>
        </TouchableOpacity>
      </View>


      <Modal
        animationType="fade"
        visible={modalvisibal}
        transparent={true}
        onRequestClose={() => setModalVisibal(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisibal(false)}>
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
                </View >
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
              <TouchableOpacity onPress={handleMybets}>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/My_Bets.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                  <Text style={style.drewertext2}>My Bets</Text>
                </View>
              </TouchableOpacity>
              <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
              <TouchableOpacity onPress={handleexchange}>
                <View style={style.viewdir}>
                  <Image source={require('../Assets/icon/profit.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                  <Text style={style.drewertext2}>profit & Loss</Text>
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
