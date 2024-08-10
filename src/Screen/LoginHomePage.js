import { View, Text, Image, TouchableOpacity, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
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

export default function WithoutLogin({ navigation }) {
    const formattedDate = new Date().toISOString().slice(0, 10);
    const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
    const [modalvisibal, setModalVisibal] = useState(false);
    const [activeTab, setActiveTab] = useState('Home');

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

    const handleHome = () => {
        navigation.navigate("Home");
    };

    const handleexchange = () => {
        navigation.navigate("ProfitLoss");
    };
    const handleviewbank=()=>{
        navigation.navigate("BankView")
    }
    const handlwithdrawal=()=>{
        navigation.navigate("Withdrawal")
    }
    const handleDeposit=()=>{
        navigation.navigate("Deposit")
    }

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
    const handleTransaction=()=>{
        navigation.navigate("Transaction")
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
                <TouchableOpacity onPress={() => setModalVisibal(true)}>
                    <Image source={require("../Assets/icon/downarrow2.png")} style={style.downarrow} />
                </TouchableOpacity>
            </View>
            <View style={style.backView}>
                <Top.Navigator initialRouteName='Home'
                    screenOptions={{
                        tabBarActiveTintColor: 'rgba(187, 22, 32, 1)',
                        tabBarInactiveTintColor: 'white',
                        tabBarLabelStyle: { fontSize: Heightdim > 800 ? 11 : (Heightdim < 600 ? 6 : 7) },
                        tabBarStyle: { backgroundColor: "rgba(48, 48, 48, 1)" }
                    }}>
                    <Top.Screen name='Home' component={Home} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/Home.png')} style={style.tablogosty1} /></View> } }} />
                    <Top.Screen name='Cricket' component={Cricket} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/sports_cricket.png')} style={style.tablogosty1} /></View> } }} />
                    <Top.Screen name='Football' component={Football} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/Football.png')} style={style.tablogosty1} /></View> } }} />
                    <Top.Screen name='Tennis' component={Tennis} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/tennis.png')} style={style.tablogosty1} /></View> } }} />
                    <Top.Screen name='Casino' component={Casino} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/Casino.png')} style={style.tablogosty1} /></View> } }} />
                    <Top.Screen name='Aviator' component={Aviator} options={{ tabBarIcon: () => { return <View style={style.touchlogo}><Image source={require('../Assets/icon/airplanemode_active.png')} style={style.tablogosty1} /></View> } }} />
                </Top.Navigator>
            </View>
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
                            <TouchableOpacity onPress={handleTransaction}>
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
                            <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
                            <TouchableOpacity onPress={handleviewbank}>
                                <View style={style.viewdir}>
                                    <Image source={require('../Assets/icon/Bank.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                                    <Text style={style.drewertext2}>View Bank</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
                            <TouchableOpacity onPress={handlwithdrawal}>
                                <View style={style.viewdir}>
                                    <Image source={require('../Assets/icon/withdrawal.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                                    <Text style={style.drewertext2}>Withdrawal</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{ color: "white", fontSize: responsiveFontSize(2) }}>.............................................</Text>
                            <TouchableOpacity onPress={handleDeposit}>
                                <View style={style.viewdir}>
                                    <Image source={require('../Assets/image/deposit.png')} style={{ height: responsiveHeight(2.5), width: responsiveWidth(5), margin: responsiveHeight(2), marginTop: responsiveHeight(2) }} />
                                    <Text style={style.drewertext2}>Deposit</Text>
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
