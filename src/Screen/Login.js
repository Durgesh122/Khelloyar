import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';
import React, { useState } from 'react';
import style from '../style/style';
import CheckBox from 'react-native-check-box';
import Toast from 'react-native-simple-toast';

export default function Login({ navigation }) {
  const [logid, setLogid] = useState("");
  const [password, setPassword] = useState('');
  const [eyeopen, setEyeopen] = useState(false);
  const [togglecheckbox, setToggleCheckbox] = useState(false);
  const [togglecheckbox2, setToggleCheckbox2] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');

  const handleLoinpage = () => {
    navigation.navigate("LoginHomePage");
  };

  const toggleEye = () => {
    setEyeopen(!eyeopen);
  };

  const handlesignup = () => {
    navigation.navigate('Signup');
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    let valid = true;

    if (!logid.trim()) {
      setEmailError(<Text style={{color:"rgba(187, 22, 32, 1)"}}>'Please enter your email'</Text>);
      valid = false;
    } else if (!validateEmail(logid)) {
      setEmailError(<Text style={{color:"rgba(187, 22, 32, 1)"}}>'Please enter a valid email address'</Text>);
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password.trim()) {
      setPasswordError(<Text style={{color:"rgba(187, 22, 32, 1)"}} >'Please enter your password'</Text>);
      valid = false;
    } else if (password.length < 8) {
      setPasswordError(<Text style={{color:"rgba(187, 22, 32, 1)"}}>'Password must be at least 8 characters long'</Text>);
      valid = false;
    } else {
      setPasswordError('');
    }

    if (!togglecheckbox2) {
      setCheckboxError(<Text style={{color:"rgba(187, 22, 32, 1)"}}>'You must be over 18 years old to login'</Text>);
      valid = false;
    } else {
      setCheckboxError('');
    }

    if (valid) {
      showToast('Login successful!');
      handleLoinpage();
    } else {
      if (emailError) showToast('Please fix email errors.');
      if (passwordError) showToast('Please fix password errors.');
      if (checkboxError) showToast('Please fix checkbox errors.');
    }
  };

  const showToast = (message) => {
    Toast.show(message, Toast.SHORT);
  };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <ImageBackground style={style.ImageBack} source={require('../Assets/image/sports-stadium.png')}>
          <View style={style.Logview}>
            <Image source={require('../Assets/image/LogoKhelloyar.png')} style={style.Logoimg} />

            <View style={style.blackborder}>
              <Text style={style.textsty}>LOGIN</Text>
            </View>

            <TextInput
              style={[style.textinput1, { borderColor: emailError ? 'red' : 'transparent' }]}
              placeholder='User ID'
              placeholderTextColor={"black"}
              onChangeText={(text) => setLogid(text)}
              onFocus={() => setEmailError('')}
              keyboardType="email-address"
            />
            {emailError ? <Text style={style.errorMessage}>{emailError}</Text> : null}

            <View style={style.viewdir}>
              <TextInput
                style={[style.textinput1, { borderColor: passwordError ? 'red' : 'transparent' }]}
                placeholder='Password'
                placeholderTextColor={"black"}
                secureTextEntry={!eyeopen}
                onChangeText={(text) => setPassword(text)}
                onFocus={() => setPasswordError('')}
              />
              <TouchableOpacity onPress={toggleEye}>
                <Image source={eyeopen ? require('../Assets/icon/eyeopen.png') : require("../Assets/icon/close-eye.png")} style={style.eye} />
              </TouchableOpacity>
            </View>
            {passwordError ? <Text style={style.errorMessage}>{passwordError}</Text> : null}

            <View style={style.Forgotsty}>
              <TouchableOpacity activeOpacity={0.5} onPress={handleForgot}>
                <Text style={style.textsty2}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>

            <View style={style.viewdir3}>
              <CheckBox
                isChecked={togglecheckbox}
                onClick={() => setToggleCheckbox(!togglecheckbox)}
              />
              <Text style={style.textsty3}>Remember me</Text>
            </View>

            <View style={style.viewdir4}>
              <CheckBox
                isChecked={togglecheckbox2}
                onClick={() => setToggleCheckbox2(!togglecheckbox2)}
              />
              <Text style={style.textsty3}>I am over 18 years old</Text>
            </View>
            {checkboxError ? <Text style={style.errorMessage}>{checkboxError}</Text> : null}

            <TouchableOpacity style={style.logbtn} activeOpacity={0.9} onPress={handleLogin}>
              <Text style={style.textsty5}>Login</Text>
            </TouchableOpacity>

            <View style={style.viewdir}>
              <Text style={style.textsty6}>Not able to Login?</Text>
              <TouchableOpacity onPress={handlesignup}>
                <Text style={style.textsty7}>CLICK HERE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
