import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import DateTimePicker from 'react-native-modal-datetime-picker';
import style from '../style/style';

export default function Past({navigation}) {
  const formattedDate = new Date().toISOString().slice(0, 10);
  const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });

  const [datetimepickerVisible, setDatetimePickerVisible] = useState(false);
  const [currentPicker, setCurrentPicker] = useState(null);
  const [fromDate, setFromDate] = useState('Date');
  const [toDate, setToDate] = useState('Date');

  const showDatePicker = (picker) => {
    setCurrentPicker(picker);
    setDatetimePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatetimePickerVisible(false);
  };

  const handleConfirm = (date) => {
    const selectedDate = date.toISOString().slice(0, 10);
    if (currentPicker === 'from') {
      setFromDate(selectedDate);
    } else if (currentPicker === 'to') {
      setToDate(selectedDate);
    }
    hideDatePicker();
  };
    const handlbackbtn=()=>{
      navigation.goBack("")
  
    }
    const handlHome=()=>{
      navigation.navigate("Home") 
    }
    const handlbackFootball=()=>{
      navigation.navigate("Football")
    }
    const handlbackTennis=()=>{
      navigation.navigate("Tennis")
    }
    const handlbackCasino=()=>{
      navigation.navigate("Casino")
    }
    const handlbackcricket=()=>{
      navigation.navigate("Cricket")
    }
    const handlbackAviator=()=>{
      navigation.navigate("Aviator")
    }
    const handlbackCurrent=()=>{
        navigation.goBack("")
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
                <TouchableOpacity>
                    <Image source={require("../Assets/icon/downarrow2.png")} style={style.downarrow} />
                </TouchableOpacity>
            </View>
            <View style={style.blackviewborder}>
              <View style={style.profilebackview}>
                <TouchableOpacity onPress={()=>handlHome()}>
              <Image source={require('../Assets/icon/Home.png')} style={style.Profileicon} />
              <Text style={style.textstyleprofile}>HOME</Text>
              </TouchableOpacity>

              </View>

              <View style={style.profilebackview}>
                <TouchableOpacity onPress={()=>handlbackcricket()}>
              <Image source={require('../Assets/icon/sports_cricket.png')} style={style.Profileicon} />
              <Text style={style.textstyleprofile}>CRICKET</Text>
              </TouchableOpacity>

              </View>
              <View style={style.profilebackview}>
              <TouchableOpacity onPress={()=>handlbackFootball()}>
              <Image source={require('../Assets/icon/Football.png')} style={style.Profileicon2} />
              <Text style={style.textstyleprofile}>FOOTBALL</Text>
              </TouchableOpacity>

              </View>
              <View style={style.profilebackview}>
                <TouchableOpacity onPress={()=>handlbackTennis()}>
              <Image source={require('../Assets/icon/tennis.png')} style={style.Profileicon} />
              <Text style={style.textstyleprofile}>TENNIS</Text>
              </TouchableOpacity>

              </View>
              <View style={style.profilebackview}>
                <TouchableOpacity onPress={()=>handlbackCasino()}>
              <Image source={require('../Assets/icon/Casino.png')} style={style.Profileicon} />
              <Text style={style.textstyleprofile}>CASINO</Text>
              </TouchableOpacity>

              </View>
              <View style={style.profilebackview}>
                <TouchableOpacity onPress={()=>handlbackAviator()}>              
                  <Image source={require('../Assets/icon/airplanemode_active.png')} style={style.Profileicon3} />
                  <Text style={style.textstyleprofile}>AVIATOR</Text>
                 </TouchableOpacity>
              </View>
             </View>
             <View style={style.viewdir}>
              <TouchableOpacity style={style.Profilebackbtn} onPress={()=>handlbackbtn()}>
              <Image source={require('../Assets/icon/backarrow.png')}/>
              <Text style={style.textstyleprofilebackbtn}>Back</Text>
             </TouchableOpacity>
             <Text style={style.textstyle2Profile}>My Bets</Text>
           <TouchableOpacity style={style.Profilebackbtn5}onPress={()=>handlbackCurrent()}>
            <Text style={style.textstyleprofilebackbtn}>Current</Text>
           </TouchableOpacity>
           <TouchableOpacity style={style.Profilebackbtn6}>
            <Text style={{fontSize:responsiveFontSize(1.3),fontWeight:"bold"}}>Past</Text>
           </TouchableOpacity>
            
             </View>
             <View style={style.viewdir}>
        <Text style={style.textmybets}>From</Text>
        <View style={style.calender}>
          <Text style={style.datetext}>{fromDate}</Text>
          <TouchableOpacity onPress={() => showDatePicker('from')}>
            <Image source={require("../Assets/icon/Calender.png")} style={style.claimg} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={style.searchbtn}>
          <Text style={style.textstyleprofilebackbtn3}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={style.viewdir}>
        <Text style={style.textmybets2}>To</Text>
        <View style={style.calender2}>
          <Text style={style.datetext}>{toDate}</Text>
          <TouchableOpacity onPress={() => showDatePicker('to')}>
            <Image source={require("../Assets/icon/Calender.png")} style={style.claimg} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => { setFromDate('Date'); setToDate('Date'); }}>
          <Text style={style.textstyleprofilebackbtn4}>Reset dates</Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        isVisible={datetimepickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <ScrollView>
      <View style={style.EventData}>
        <View style={style.viewdir}> 
        <Text style={style.eventtext}>Event</Text>
        <Text style={style.eventtext2}>Sunrisers Hyderabad v Royal Challengers Bengaluru</Text>
        </View>
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Date</Text>
        <Text style={style.eventtext2}>  {fromDate}, 3:12 PM</Text>
        <Text style={style.eventtext}>Type</Text>
        <Text style={style.eventtext3}>Bookmaker</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Market</Text>
        <Text style={style.eventtext5}>Sunrisers Hyderabad</Text>
        <Text style={style.eventtext}>Selection</Text>
        <Text style={style.eventtext3}>  Back</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Odds</Text>
        <Text style={style.eventtext2}>1.7</Text>
        <Text style={style.eventtext4}>Stake</Text>
        <Text style={style.eventtext3}>           100</Text>
        </View>
         
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Liability</Text>
        <Text style={style.eventtext6}>1.33</Text>
        <Text style={style.eventtext7}>Potential Profit</Text>
        <Text style={style.eventtext8}>1</Text>
        </View>

      </View>
      <View style={style.EventData}>
        <View style={style.viewdir}> 
        <Text style={style.eventtext}>Event</Text>
        <Text style={style.eventtext2}>Sunrisers Hyderabad v Royal Challengers Bengaluru</Text>
        </View>
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Date</Text>
        <Text style={style.eventtext2}>  {fromDate}, 3:12 PM</Text>
        <Text style={style.eventtext}>Type</Text>
        <Text style={style.eventtext3}>Bookmaker</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Market</Text>
        <Text style={style.eventtext5}>Sunrisers Hyderabad</Text>
        <Text style={style.eventtext}>Selection</Text>
        <Text style={style.eventtext3}>  Back</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Odds</Text>
        <Text style={style.eventtext2}>1.7</Text>
        <Text style={style.eventtext4}>Stake</Text>
        <Text style={style.eventtext3}>           100</Text>
        </View>
         
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Liability</Text>
        <Text style={style.eventtext6}>1.33</Text>
        <Text style={style.eventtext7}>Potential Profit</Text>
        <Text style={style.eventtext8}>1</Text>
        </View>

      </View>
      <View style={style.EventData}>
        <View style={style.viewdir}> 
        <Text style={style.eventtext}>Event</Text>
        <Text style={style.eventtext2}>Sunrisers Hyderabad v Royal Challengers Bengaluru</Text>
        </View>
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Date</Text>
        <Text style={style.eventtext2}>  {fromDate}, 3:12 PM</Text>
        <Text style={style.eventtext}>Type</Text>
        <Text style={style.eventtext3}>Bookmaker</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Market</Text>
        <Text style={style.eventtext5}>Sunrisers Hyderabad</Text>
        <Text style={style.eventtext}>Selection</Text>
        <Text style={style.eventtext3}>  Back</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Odds</Text>
        <Text style={style.eventtext2}>1.7</Text>
        <Text style={style.eventtext4}>Stake</Text>
        <Text style={style.eventtext3}>           100</Text>
        </View>
         
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Liability</Text>
        <Text style={style.eventtext6}>1.33</Text>
        <Text style={style.eventtext7}>Potential Profit</Text>
        <Text style={style.eventtext8}>1</Text>
        </View>

      </View>
      <View style={style.EventData}>
        <View style={style.viewdir}> 
        <Text style={style.eventtext}>Event</Text>
        <Text style={style.eventtext2}>Sunrisers Hyderabad v Royal Challengers Bengaluru</Text>
        </View>
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Date</Text>
        <Text style={style.eventtext2}>  {fromDate}, 3:12 PM</Text>
        <Text style={style.eventtext}>Type</Text>
        <Text style={style.eventtext3}>Bookmaker</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Market</Text>
        <Text style={style.eventtext5}>Sunrisers Hyderabad</Text>
        <Text style={style.eventtext}>Selection</Text>
        <Text style={style.eventtext3}>  Back</Text>
        </View>

        <View style={style.eventView}> 
        <Text style={style.eventtext}>Odds</Text>
        <Text style={style.eventtext2}>1.7</Text>
        <Text style={style.eventtext4}>Stake</Text>
        <Text style={style.eventtext3}>           100</Text>
        </View>
         
        <View style={style.eventView}> 
        <Text style={style.eventtext}>Liability</Text>
        <Text style={style.eventtext6}>1.33</Text>
        <Text style={style.eventtext7}>Potential Profit</Text>
        <Text style={style.eventtext8}>1</Text>
        </View>

      </View>


      </ScrollView>
      
    </View>
  )
}