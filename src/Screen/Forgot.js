import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState ,useEffect} from 'react'
import style from '../style/style'
import { responsiveFontSize,responsiveHeight,responsiveWidth } from 'react-native-responsive-dimensions'

export default function Forgot({navigation}) {
  const [eyeopen, setEyeopen] = useState(false)
  const [eyeopen2, setEyeopen2] = useState(false)
  const [select,setSelect]=useState(null)
  const[showdropdown,setShowDropdown]=useState(false)
  const [phonenumber,setPhoneNumber] = useState('')
  const [otpcolor,setOTPcolor] =useState("#A1A1A1")
  const [otpdropdown,setotpDropDown]=useState(false)
  const [counter, setCounter] = useState(120); 
  const [isResendActive, setIsResendActive] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setIsResendActive(true);
    }
  }, [counter]);

  const handleResend = () => {
    setCounter(120); 
    setIsResendActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  const goBack = () => {
    navigation.goBack();
  };

  const toggledropdown=()=>{
    setotpDropDown(!otpdropdown)
  }

  const handleotpcolor=(text)=>{
    setPhoneNumber(text)

    if( text === ''){
        setOTPcolor("rgba(161, 161, 161, 1)")
    } else {
        setOTPcolor("#08B933")
    }
  }

  const options =['+91','+92','+93',"+94"]
  

  const togglecode=()=>{
    setShowDropdown(!showdropdown)
  }
  const handleoptioncode=(options)=>{
    setSelect(options)
    setShowDropdown(false)

  }
  const toggleEye = () => {
    setEyeopen(!eyeopen)
  }
  const toggleEye2=()=>{
    setEyeopen2(!eyeopen2)
  }
  const handleOtpButtonClick = () => {
    if (phonenumber.length === 10) {
      toggledropdown();
    } else {
      alert("Please enter a valid 10-digit phone number.");
    }
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground style={style.ImageBack} source={require('../Assets/image/sports-stadium.png')}>
          <View style={style.sigview}>
            <Image source={require('../Assets/image/LogoKhelloyar.png')} style={style.Logoimg}/>
            <View style={style.blackborder}>
              <Text style={style.textsty}>PASSWORD</Text>
            </View>

            <View style={style.viewdir2}>
              <View>
                <TouchableOpacity style={style.code}onPress={togglecode}>
                  <Text style={style.textsty9}> {select || '+91'}</Text>
                </TouchableOpacity>
                {showdropdown && (
                  <View style={style.codelist}>
                    {options.map((options,index)=>(
                      <TouchableOpacity onPress={()=>handleoptioncode(options)}key={index}>
                        <Text style={style.textsty9}>{options}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
              <TextInput 
                style={style.phonenumber} 
                placeholder='Enter mobile number' 
                placeholderTextColor={"black"} 
                onChangeText={handleotpcolor}
                keyboardType='numeric'
                maxLength={10}
              />
              <TouchableOpacity 
                style={[style.otp ,{backgroundColor:otpcolor}]} 
                onPress={handleOtpButtonClick}
                disabled={phonenumber.length !== 10}
              >
                <View style={style.viewdir}>
                  <Text style={style.textsty9}>OTP</Text>
                  <Image source={require('../Assets/icon/arrow1.png')}style={style.arrowlogo}/>
                </View>
              </TouchableOpacity>
            </View>
            {otpdropdown && (
              <View>
                <View style={{marginLeft:responsiveWidth(47)}}>
                  <Text style={{color:"rgba(187, 22, 32, 1)",fontSize:responsiveFontSize(1.5),fontWeight:"500",marginLeft:responsiveWidth(21),fontFamily: "Rajdhani-SemiBold"}}>{formatTime(counter)} Sec</Text>
                  <View style={style.viewdir}>
                    <Text style={{color:"black",fontSize: responsiveFontSize(1.5),fontWeight:"500",fontFamily: "Rajdhani-SemiBold"}}>Not received OTP? </Text>
                    <TouchableOpacity onPress={()=>handleResend()} disabled={!isResendActive}>
                      <Text style={{color:"rgba(187, 22, 32, 1)",fontSize:responsiveFontSize(1.5),fontWeight:"500",fontFamily: "Rajdhani-SemiBold"}}>Resend</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View>
                  <TextInput style={style.textinput1} placeholder='Enter OTP' placeholderTextColor={"black"}/>
                  <View style={style.viewdir}>
                    <TextInput style={style.textinput1} placeholder='Enter a new password' placeholderTextColor={"black"} secureTextEntry={!eyeopen}/>
                    <TouchableOpacity onPress={toggleEye}>
                      <Image source={eyeopen ? require('../Assets/icon/eyeopen.png') : require("../Assets/icon/close-eye.png")} style={style.eye}/>
                    </TouchableOpacity>
                  </View>
                  <View style={style.viewdir}>
                    <TextInput style={style.textinput1} placeholder='Confirm new password' placeholderTextColor={"black"} secureTextEntry={!eyeopen2}/>
                    <TouchableOpacity onPress={toggleEye2}>
                      <Image source={eyeopen2 ? require('../Assets/icon/eyeopen.png') : require("../Assets/icon/close-eye.png")} style={style.eye}/>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            <TouchableOpacity style={style.logbtn} activeOpacity={0.9}>
              <Text style={style.textsty5}>Reset password</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goBack}>
              <Text style={style.back}>Back</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
