import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../style/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import home from '../TopTab/home';
import Cricket from '../TopTab/Cricket';
import Football from '../TopTab/Football';
import Tennis from '../TopTab/Tennis';
import Casino from '../TopTab/Casino';
import Aviator from '../TopTab/Aviator';
import Home from '../TopTab/home';
import { Heightdim } from '../style/uttility';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

const top = createMaterialTopTabNavigator()
export default function WithoutLogin({navigation}) {

    const handleLogin=()=>{
        navigation.navigate("Login")
    }
    const handleSignup=()=>{
        navigation.navigate("Signup")
    }
  return (
    <View style={style.Container}>
        <View style={style.viewdir2}>
            <Image source={require('../Assets/image/Khelloyaar-2.png')}style={style.logo2}/>
            <TouchableOpacity style={style.LoginBtn}onPress={handleLogin}>
                <Text style={style.Loginbtntext}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.RegBtn}onPress={handleSignup}>
                <Text style={style.Loginbtntext2}>REGISTER</Text>
            </TouchableOpacity>
        </View>
        <View style={style.backView}>
            <top.Navigator initialRouteName='Home'
             screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: {fontSize:responsiveFontSize(0.8),fontWeight:"bold",letterSpacing:0.1},
                tabBarStyle: { backgroundColor: "rgba(48, 48, 48, 1)" }
              }}>
            <top.Screen name='Home'component={Home}options={{tabBarIcon:()=>{
        return <View style={style.touchlogo}> 
               <Image source={require('../Assets/icon/Home.png')} style={style.tablogosty1}/>
               </View>
      }}}/>
            <top.Screen name='Cricket'component={Cricket} options={{tabBarIcon:()=>{
        return <View style={style.touchlogo}>
               <Image source={require('../Assets/icon/sports_cricket.png')} style={style.tablogosty1}/>
              </View>
      }}}/>
            <top.Screen name='Football'component={Football} options={{tabBarIcon:()=>{
        return <View style={style.touchlogo}>
            <Image source={require('../Assets/icon/Football.png')} style={style.tablogosty1}/>
            </View>
      }}}/>
            <top.Screen name='Tennis'component={Tennis} options={{tabBarIcon:()=>{
        return <View style={style.touchlogo}> 
            <Image source={require('../Assets/icon/tennis.png')} style={style.tablogosty1} />
            </View>
      }}}/>
            <top.Screen name='Casino'component={Casino} options={{tabBarIcon:()=>{
        return <View style={style.touchlogo}>
            <Image source={require('../Assets/icon/Casino.png')}style={style.tablogosty1} />
            </View>
      }}}/>
            <top.Screen name='Aviator'component={Aviator} options={{tabBarIcon:()=>{
        return  <View style={style.touchlogo}> 
            <Image source={require('../Assets/icon/airplanemode_active.png')} style={style.tablogosty1}/>
               </View> 
      }}}/>
            </top.Navigator>
          
          </View>
      
    </View>
  )
}