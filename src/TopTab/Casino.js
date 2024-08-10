import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,FlatList ,Dimensions} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import All from './All';
import Ezugi from './Ezugi';
import VivoGaming from './VivoGaming';
import Lucky from './Lucky';
import Mojos from './7_Mojos';

const Tab = createMaterialTopTabNavigator();

export default function Casino() {
 

  return (
    <View style={styles.Container}>
      <View style={styles.View2}>
        <View style={styles.borderred}></View>
        <Text style={styles.textcasino}>Casino</Text>
        <Image source={require("../Assets/image/yellow_cup.png")} style={styles.cupsty} />
        <TextInput style={styles.searchbar} />
        <Image style={styles.searchiconsty} source={require('../Assets/icon/Serchicon2.png')} />
      </View>

     
      
      <View style={styles.title}>
        <Tab.Navigator
          initialRouteName="All"
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'red',
            tabBarLabelStyle: { fontSize: responsiveFontSize(1.5),marginHorizontal:-15,fontWeight:"bold" },
            tabBarStyle: { backgroundColor: 'rgba(235, 235, 240, 5)' ,borderRadius:responsiveWidth(2),marginBottom:responsiveHeight(1.5)},
          }}
        >
          <Tab.Screen name="All" component={All} options={{ title: ". All" }} />
          <Tab.Screen name="Ezugi" component={Ezugi} options={{ title: ". EZugi" }} />
          <Tab.Screen name="VivoGaming" component={VivoGaming} options={{ title: ". Vivo Gaming"}} />
          <Tab.Screen name="Mojos" component={Mojos} options={{ title: ". 7 Mojos" }} />
          <Tab.Screen name="Lucky" component={Lucky} options={{ title: ". Lucky" }} />
        </Tab.Navigator>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  View2: {
    height: responsiveHeight(20),
    width: responsiveWidth(100),
    backgroundColor: "rgba(37, 37, 37, 1)",
  },
  borderred: {
    height: responsiveHeight(5),
    width: responsiveWidth(50),
    backgroundColor: "rgba(187, 22, 32, 1)",
    marginTop: responsiveHeight(3),
  },
  textcasino: {
    fontSize: responsiveFontSize(5),
    fontWeight: "bold",
    color: "white",
    marginLeft: responsiveWidth(28),
    marginTop: responsiveHeight(-6.5),
  },
  cupsty: {
    height: responsiveHeight(13),
    width: responsiveWidth(22),
    marginTop: responsiveWidth(-20.5),
    marginLeft: responsiveWidth(2),
  },
  searchbar: {
    height: responsiveHeight(5),
    width: responsiveWidth(95),
    borderRadius: responsiveWidth(2),
    borderWidth: 1,
    borderColor: "rgba(187, 22, 32, 1)",
    margin: responsiveHeight(1),
    backgroundColor: "white",
  },
  searchiconsty: {
    height: responsiveHeight(2),
    width: responsiveWidth(4),
    marginTop: responsiveHeight(-4.5),
    marginLeft: responsiveWidth(5),
  },
  title: {
    height: responsiveHeight(5),
    width: responsiveWidth(100),
    borderRadius: responsiveWidth(2),
    backgroundColor: "rgba(235, 235, 240, 5)",
    marginTop: responsiveHeight(1),
    flex:1
  },
  texttiltelActive: {
    fontSize: responsiveFontSize(1.5),
    color: "black",
    fontWeight: "bold",
    margin: responsiveWidth(2.5),
  },
  texttiltelInactive: {
    fontSize: responsiveFontSize(1.5),
    color: "red",
    fontWeight: "bold",
    margin: responsiveWidth(2.5),
  },
  renderdotstyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: responsiveHeight(-3)
},
imagedot: {
  backgroundColor: "white",
  height: responsiveWidth(3),
  width: responsiveWidth(3),
  borderRadius: responsiveWidth(1.5),
  marginHorizontal: responsiveWidth(2)
},
});
