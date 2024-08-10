import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from '../style/style'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'

export default function Signup({ navigation }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState('')
  const [eyeopen, setEyeopen] = useState(false)
  const [select, setSelect] = useState(null)
  const [showdropdown, setShowDropdown] = useState(false)
  const [phonenumber, setPhoneNumber] = useState('')
  const [otpcolor, setOTPcolor] = useState("#A1A1A1")
  const [otpdropdown, setotpDropDown] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [otp, setOtp] = useState('')
  const [otpimage, setOTPimage] = useState(false)

  const backtolog = () => {
    navigation.goBack()
  }

  const toggledropdown = () => {
    setotpDropDown(!otpdropdown)
  }

  const handleotpcolor = (text) => {
    setPhoneNumber(text)

    if (text.length === 10) {
      setShowDropdown(true);
      setOTPcolor("#08B933");
    } else {
      setShowDropdown(false);
      setOTPcolor("#A1A1A1");
    }
  }

  const options = ['+91', '+92', '+93', '+94']

  const togglecode = () => {
    setShowDropdown(!showdropdown)
  }

  const handleoptioncode = (option) => {
    setSelect(option)
    setShowDropdown(false)
  }

  const toggleEye = () => {
    setEyeopen(!eyeopen)
  }

  const toggleotp = () => {
    
  }

  const handleOtpButtonClick = () => {
    if (phonenumber.length === 10) {
      toggledropdown();
    } else {
    
      Alert.alert("Invalid Phone Number", "Please enter a valid 10-digit phone number.");
    }
  };

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

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground style={style.ImageBack} source={require('../Assets/image/sports-stadium.png')}>
          <View style={style.sigview}>
            <Image source={require('../Assets/image/LogoKhelloyar.png')} style={style.Logoimg} />
            <View style={style.blackborder}>
              <Text style={style.textsty}>SIGNUP</Text>
            </View>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={150}>
              <TextInput
                style={style.textinput1}
                placeholder='Create username'
                placeholderTextColor={"black"}
                onChangeText={(text) => setUsername(text)}
              />
              <View style={style.viewdir}>
                <TextInput
                  style={style.textinput1}
                  placeholder='Create password'
                  placeholderTextColor={"black"}
                  secureTextEntry={!eyeopen}
                  onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity onPress={toggleEye}>
                  <Image source={eyeopen ? require('../Assets/icon/eyeopen.png') : require("../Assets/icon/close-eye.png")} style={style.eye} />
                </TouchableOpacity>
              </View>
              <View style={[style.viewdir2, { marginTop: -10 }]}>
                <View>
                  <TouchableOpacity style={style.code} onPress={togglecode}>
                    <Text style={style.textsty9}>{select || '+91'}</Text>
                  </TouchableOpacity>
                  {showdropdown && (
                    <View style={style.codelist}>
                      {options.map((option, index) => (
                        <TouchableOpacity key={index} onPress={() => handleoptioncode(option)}>
                          <Text style={style.textsty9}>{option}</Text>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </View>
                <TextInput
                  style={[style.phonenumber, { marginTop: 10 }]}
                  placeholder='Enter mobile number'
                  placeholderTextColor={"black"}
                  keyboardType='phone-pad'
                  onChangeText={handleotpcolor}
                />
                <TouchableOpacity
                  style={[style.otp, { backgroundColor: otpcolor, marginTop: 10 }]}
                  onPress={handleOtpButtonClick}
                  disabled={phonenumber.length !== 10}
                >
                  <View style={style.viewdir}>
                    <Text style={style.textsty12}>OTP</Text>
                    <Image source={require('../Assets/icon/arrow1.png')} style={style.arrowlogo} />
                  </View>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
            {otpdropdown && (
              <View>
                <View style={{ marginLeft: responsiveWidth(47) }}>
                  <Text style={{ color: "rgba(187, 22, 32, 1)", fontSize: responsiveFontSize(1.5), fontWeight: "500", marginLeft: responsiveWidth(21), fontFamily: "Rajdhani-SemiBold" }}>{formatTime(counter)} Sec</Text>
                  <View style={style.viewdir}>
                    <Text style={{ color: "black", fontSize: responsiveFontSize(1.5), fontWeight: "500", fontFamily: "Rajdhani-SemiBold" }}>Not received OTP? </Text>
                    <TouchableOpacity onPress={() => handleResend()} disabled={!isResendActive}>
                      <Text style={{ color: "rgba(187, 22, 32, 1)", fontSize: responsiveFontSize(1.5), fontWeight: "500", fontFamily: "Rajdhani-SemiBold" }}>Resend</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={15}>
                  <TextInput
                    style={style.textinput1}
                    placeholder='Enter OTP'
                    placeholderTextColor={"black"}
                    onChangeText={(text) => setOtp(text)}
                  />
                  <TextInput
                    style={style.textinput1}
                    placeholder='First name'
                    placeholderTextColor={"black"}
                    onChangeText={(text) => setFirstName(text)}
                  />
                  <TextInput
                    style={style.textinput1}
                    placeholder='Last name'
                    placeholderTextColor={"black"}
                    onChangeText={(text) => setLastName(text)}
                  />
                  <TextInput
                    style={style.textinput1}
                    placeholder='Email'
                    placeholderTextColor={"black"}
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}
                  />
                </KeyboardAvoidingView>
              </View>
            )}
            <TouchableOpacity style={style.logbtn} activeOpacity={0.9}>
              <Text style={style.textsty5}>Submit</Text>
            </TouchableOpacity>
            <View style={style.viewdir}>
              <Text style={style.textsty6}>Already a member?</Text>
              <TouchableOpacity onPress={backtolog}>
                <Text style={style.textsty7}>CLICK HERE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
