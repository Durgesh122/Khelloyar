import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { responsiveWidth, responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';
import DateTimePicker from 'react-native-modal-datetime-picker';
import style from '../style/style';
import { SelectList } from 'react-native-dropdown-select-list';

export default function Transaction({ navigation }) {
  const formattedDate = new Date().toISOString().slice(0, 10);
  const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });

  const [datetimepickerVisible, setDatetimePickerVisible] = useState(false);
  const [currentPicker, setCurrentPicker] = useState(null);
  const [fromDate, setFromDate] = useState('Date');
  const [toDate, setToDate] = useState('Date');
  const [selected, setSelected] = useState("");

  const Data = [
    { key: "1", value: "All" },
    { key: "2", value: "option2" },
    { key: "3", value: "option3" },
    { key: "4", value: "option4" },
  ];

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
        <Text style={style.textstyle2Profile}>Account Statement</Text>
      </View>
      
      <View>
        <Text style={style.textmybets}>Filter by</Text>
        <View style={style.filterby}>
          <SelectList
            
            setSelected={setSelected}
            data={Data}
            defaultOption={{ key: "1", value: "All" }}
          />
        </View>
      </View>
      <View style={style.viewdir}>
      <Text style={style.textmybets}>From</Text>
      <Text style={style.textmybets3}>To</Text>
      </View>
      <View style={style.viewdir}>
        <View style={style.calender3}>
          <Text style={style.datetext}>{fromDate}</Text>
          <TouchableOpacity onPress={() => showDatePicker('from')}>
            <Image source={require("../Assets/icon/Calender.png")} style={style.claimg} />
          </TouchableOpacity>
        </View>
        <View style={style.calender4}>
          <Text style={style.datetext}>{toDate}</Text>
          <TouchableOpacity onPress={() => showDatePicker('to')}>
            <Image source={require("../Assets/icon/Calender.png")} style={style.claimg} />
          </TouchableOpacity>
        </View>
       
      </View>

      <View style={style.viewdir}>
        
        <TouchableOpacity style={style.searchbtn2}>
          <Text style={style.textstyleprofilebackbtn3}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setFromDate('Date'); setToDate('Date'); }}>
          <Text style={style.textstyleprofilebackbtn5}>Reset dates</Text>
        </TouchableOpacity>
      </View>

      <DateTimePicker
        isVisible={datetimepickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      
      <ScrollView>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
        <View style={style.EventData2}>
          <View style={style.viewdir}>
            <Text style={style.eventtext}>Description</Text>
            <View>
            <Text style={style.eventtext2}>Cricket / N/A / Sunrisers Hyderabad v Royal</Text>
            <Text style={style.eventtext9}>Challengers Bengaluru / Match Odds</Text>
            </View>
          </View>
          
          <View style={style.eventView}>
            <Text style={style.eventtext}>Time</Text>
            <Text style={style.eventtext10}>April 25th 2024, 11:21:36 pm</Text>
            <Text style={style.eventtext}>Credit</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
          <View style={style.eventView}>
            <Text style={style.eventtext}>Debit</Text>
            <Text style={style.eventtext10}>70</Text>
            <Text style={style.eventtext}>Balance</Text>
            <Text style={style.eventtext2}>100</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
