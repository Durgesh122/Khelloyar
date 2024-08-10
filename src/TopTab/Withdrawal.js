import { View, Text,Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from '../style/style'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { SelectList } from 'react-native-dropdown-select-list';


export default function Withdrawal({navigation}) {
    const[selectbank,setSelectBank]=useState("")
    const formattedDate = new Date().toISOString().slice(0, 10);
    const [modalVisible, setModalVisible] = useState(false);
    const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });
    const data = [
        { key: "0", value: "Select account" },
        { key: "1", value: "State Bank of India" },
        { key: "2", value: "Punjab National Bank" },
        { key: "3", value: "Bank of Baroda" },
        { key: "4", value: "Canara Bank" },
        { key: "5", value: "Union Bank of India" },
        { key: "6", value: "Bank of India" },
        { key: "7", value: "Indian Bank" },
        { key: "8", value: "Central Bank of India" },
        { key: "9", value: "Indian Overseas Bank" },
        { key: "10", value: "UCO Bank" },
        { key: "11", value: "Bank of Maharashtra" },
        { key: "12", value: "Punjab & Sind Bank" },
        { key: "13", value: "HDFC Bank" },
        { key: "14", value: "ICICI Bank" },
        { key: "15", value: "Axis Bank" },
        { key: "16", value: "Kotak Mahindra Bank" },
        { key: "17", value: "IndusInd Bank" },
        { key: "18", value: "Yes Bank" },
        { key: "19", value: "IDFC First Bank" },
        { key: "20", value: "Federal Bank" },
        { key: "21", value: "South Indian Bank" },
        { key: "22", value: "RBL Bank" },
        { key: "23", value: "Bandhan Bank" },
        { key: "24", value: "City Union Bank" },
        { key: "25", value: "Karur Vysya Bank" },
        { key: "26", value: "Dhanlaxmi Bank" },
        { key: "27", value: "Karnataka Bank" },
        { key: "28", value: "Tamilnad Mercantile Bank" },
        { key: "29", value: "Jammu & Kashmir Bank" },
        { key: "30", value: "IDBI Bank" },
        { key: "31", value: "Au Small Finance Bank" },
        { key: "32", value: "Capital Small Finance Bank" },
        { key: "33", value: "Equitas Small Finance Bank" },
        { key: "34", value: "Suryoday Small Finance Bank" },
        { key: "35", value: "Ujjivan Small Finance Bank" },
        { key: "36", value: "Utkarsh Small Finance Bank" },
        { key: "37", value: "ESAF Small Finance Bank" },
        { key: "38", value: "Fincare Small Finance Bank" },
        { key: "39", value: "Jana Small Finance Bank" },
        { key: "40", value: "North East Small Finance Bank" },
        { key: "41", value: "Shivalik Small Finance Bank" },
        { key: "42", value: "Unity Small Finance Bank" },
        { key: "43", value: "India Post Payments Bank" },
        { key: "44", value: "Fino Payments Bank" },
        { key: "45", value: "Paytm Payments Bank" },
        { key: "46", value: "Airtel Payments Bank" },
        { key: "47", value: "Andhra Pragathi Grameena Bank" },
        { key: "48", value: "Andhra Pradesh Grameena Vikas Bank" },
        { key: "49", value: "Arunachal Pradesh Rural Bank" },
        { key: "50", value: "Aryavart Bank" },
        { key: "51", value: "Assam Gramin Vikash Bank" },
        { key: "52", value: "Bangiya Gramin Vikas Bank" },
        { key: "53", value: "Baroda Gujarat Gramin Bank" },
        { key: "54", value: "Baroda Rajasthan Kshetriya Gramin Bank" },
        { key: "55", value: "Baroda UP Bank" },
        { key: "56", value: "Chaitanya Godavari Grameena Bank" },
        { key: "57", value: "Chhattisgarh Rajya Gramin Bank" },
        { key: "58", value: "Dakshin Bihar Gramin Bank" },
        { key: "59", value: "Ellaquai Dehati Bank" },
        { key: "60", value: "Himachal Pradesh Gramin Bank" },
        { key: "61", value: "J&K Grameen Bank" },
        { key: "62", value: "Jharkhand Rajya Gramin Bank" },
        { key: "63", value: "Karnataka Gramin Bank" },
        { key: "64", value: "Karnataka Vikas Grameena Bank" },
        { key: "65", value: "Kerala Gramin Bank" },
        { key: "66", value: "Madhya Pradesh Gramin Bank" },
        { key: "67", value: "Madhyanchal Gramin Bank" },
        { key: "68", value: "Maharashtra Gramin Bank" },
        { key: "69", value: "Manipur Rural Bank" },
        { key: "70", value: "Meghalaya Rural Bank" },
        { key: "71", value: "Mizoram Rural Bank" },
        { key: "72", value: "Nagaland Rural Bank" },
        { key: "73", value: "Odisha Gramya Bank" },
        { key: "74", value: "Paschim Banga Gramin Bank" },
        { key: "75", value: "Prathama UP Gramin Bank" },
        { key: "76", value: "Puduvai Bharathiar Grama Bank" },
        { key: "77", value: "Punjab Gramin Bank" },
        { key: "78", value: "Rajasthan Marudhara Gramin Bank" },
        { key: "79", value: "Saptagiri Grameena Bank" },
        { key: "80", value: "Sarva Haryana Gramin Bank" },
        { key: "81", value: "Saurashtra Gramin Bank" },
        { key: "82", value: "Tamil Nadu Grama Bank" },
        { key: "83", value: "Telangana Grameena Bank" },
        { key: "84", value: "Tripura Gramin Bank" },
        { key: "85", value: "Utkal Grameen Bank" },
        { key: "86", value: "Uttar Bihar Gramin Bank" },
        { key: "87", value: "Uttarakhand Gramin Bank" },
        { key: "88", value: "Uttarbanga Kshetriya Gramin Bank" },
        { key: "89", value: "Vidharbha Konkan Gramin Bank" }
      ];
      
  
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
    const handleviewbank=()=>{
        navigation.navigate("BankView")
    }
    const handleHistory=()=>{
        navigation.navigate("History")
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
        <Text style={style.textcasino}>Withdrawal</Text>
        <Image source={require("../Assets/icon/Greenmoney.png")} style={style.cupsty2} />
      </View>
      <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn} onPress={handleBackBtn}>
          <Image source={require('../Assets/icon/backarrow.png')} />
          <Text style={style.textstyleprofilebackbtn}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Profilebackbtn10}onPress={()=>handleaddbank()} >
            <Text style={{color:"black",fontWeight:"400",fontSize:responsiveFontSize(1.5)}}>Add Bank</Text>
             </TouchableOpacity>
             <TouchableOpacity style={style.Profilebackbtn11}onPress={()=>handleviewbank()} >
            <Text style={style.textstyleprofilebackbtn}>View bank</Text>
             </TouchableOpacity>
             <TouchableOpacity style={style.Profilebackbtn11}onPress={()=>handleHistory()} >
            <Text style={style.textstyleprofilebackbtn}>History</Text>
             </TouchableOpacity>
      </View>
      <View>
      <Text style={style.textmybets7}>Enter withdrawal amount</Text>
      <TextInput style={style.bankname} placeholder='Enter withdrawal amount'/>
       <Text style={style.textmybets}>Select account</Text>
       <View style={{width:responsiveWidth(96),marginLeft:responsiveWidth(2)}}>
        <SelectList 
         setSelected ={setSelectBank}
         data={data}
         defaultOption={{ key: "0", value: "Select account" }}
        />
        <Image source={require('../Assets/icon/arrowdown.png')}style={{height:responsiveHeight(1),width:responsiveWidth(3.5),marginTop:responsiveHeight(-3.5),marginLeft:responsiveWidth(86.5)}}/>
       </View>
       <View style={style.viewdir}>
        <TouchableOpacity style={style.Profilebackbtn12}>
          <Text style={{color:"black",fontWeight:"400"}}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.Profilebackbtn13}>
          <Text style={{color:"white",fontWeight:"400"}}>Add account</Text>
        </TouchableOpacity>
        </View>
       
       </View>
       
     
    </View>
  )
}