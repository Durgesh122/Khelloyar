import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import DateTimePicker from 'react-native-modal-datetime-picker';
import style from '../style/style';

export default function My_Bets({ navigation }) {
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

  const navigateTo = (screen) => {
    navigation.navigate(screen);
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
        <TouchableOpacity>
          <Image source={require("../Assets/icon/downarrow2.png")} style={style.downarrow} />
        </TouchableOpacity>
      </View>

      <View style={style.blackviewborder}>
        {[
          { screen: "Home", icon: require('../Assets/icon/Home.png'), text: "HOME" },
          { screen: "Cricket", icon: require('../Assets/icon/sports_cricket.png'), text: "CRICKET" },
          { screen: "Football", icon: require('../Assets/icon/Football.png'), text: "FOOTBALL" },
          { screen: "Tennis", icon: require('../Assets/icon/tennis.png'), text: "TENNIS" },
          { screen: "Casino", icon: require('../Assets/icon/Casino.png'), text: "CASINO" },
          { screen: "Aviator", icon: require('../Assets/icon/airplanemode_active.png'), text: "AVIATOR" }
        ].map(({ screen, icon, text }) => (
          <View style={style.profilebackview} key={screen}>
            <TouchableOpacity onPress={() => navigateTo(screen)}>
              <Image source={icon} style={style.Profileicon} />
              <Text style={style.textstyleprofile}>{text}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn} onPress={() => navigation.goBack()}>
          <Image source={require('../Assets/icon/backarrow.png')} />
          <Text style={style.textstyleprofilebackbtn}>Back</Text>
        </TouchableOpacity>
        <Text style={style.textstyle2Profile}>My Bets</Text>
        <TouchableOpacity style={style.Profilebackbtn3}>
          <Text style={style.textstyleprofilebackbtn}>Current</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Profilebackbtn4} onPress={() => navigateTo("Past")}>
          <Text style={{ fontSize: responsiveFontSize(1.3), fontWeight: "bold" }}>Past</Text>
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
  );
}
