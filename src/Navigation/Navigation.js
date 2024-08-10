import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Screen/Login';
import Signup from '../Screen/Signup';
import Forgot from '../Screen/Forgot';
import WithoutLogin from '../Screen/WithoutLogin';
import LoginHomePage from '../Screen/LoginHomePage';
import Profile from '../BottamTab/Profile';
import Today from '../TopTab/Today';
import My_Bets from '../BottamTab/My_Bets';
import Past from '../BottamTab/Past';
import ProfitLoss from '../BottamTab/ProfitLoss';
import Mainodds from '../Screen/odsscreen';
import Transaction from '../TopTab/Transaction';
import BankView from '../TopTab/BankView';
import AddBank from '../TopTab/AddBank';
import Withdrawal from '../TopTab/Withdrawal';
import History from '../TopTab/History';
import Deposit from '../TopTab/Deposit';

const Stack=createStackNavigator()
export default function Navigation() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='WithoutLogin'>
      <Stack.Screen name="Login" component={Login}options={{headerShown:false}}/>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Stack.Screen name="Forgot" component={Forgot} options={{headerShown:false}}/> 
      <Stack.Screen name='WithoutLogin'component={WithoutLogin}options={{headerShown:false}}/>
      <Stack.Screen name='LoginHomePage'component={LoginHomePage}options={{headerShown:false}}/>
      <Stack.Screen name='Profile'component={Profile}options={{headerShown:false}}/>
      <Stack.Screen name='My_Bets'component={My_Bets}options={{headerShown:false}}/>
      <Stack.Screen name='Past'component={Past}options={{headerShown:false}}/>
      <Stack.Screen name='ProfitLoss'component={ProfitLoss}options={{headerShown:false}}/>
      <Stack.Screen name='Mainodds'component={Mainodds}options={{headerShown:false}}/>
      <Stack.Screen name='Transaction'component={Transaction}options={{headerShown:false}}/>
      <Stack.Screen name='BankView'component={BankView}options={{headerShown:false}}/>
      <Stack.Screen name='AddBank'component={AddBank}options={{headerShown:false}}/>
      <Stack.Screen name='Withdrawal'component={Withdrawal}options={{headerShown:false}}/>
      <Stack.Screen name='History'component={History}options={{headerShown:false}}/>
      <Stack.Screen name='Deposit'component={Deposit}options={{headerShown:false}}/>
      

     
      
    </Stack.Navigator>
     </NavigationContainer>
  )
}