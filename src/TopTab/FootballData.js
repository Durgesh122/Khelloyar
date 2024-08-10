import { View, Text, ScrollView, Image, TouchableOpacity, Modal, TouchableNativeFeedback ,TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import style from '../style/style';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';



export default function FootballData({ navigation }) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState(1.5);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [value2, setValue2] = useState(1.44);
  
  const incrementValue = (setter) => {
    setter((prevValue) => (parseFloat(prevValue) + 0.01).toFixed(2));
  };

  const decrementValue = (setter) => {
    setter((prevValue) => {
      const newValue = parseFloat(prevValue) - 0.01;
      return newValue > 0 ? newValue.toFixed(2) : '0.00';
    });
  };

  const handleNavigateToCricket = () => {
    navigation.navigate('Cricket');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
      setCurrentDate(formattedDate);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedTime = `Today ${formattedHours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')} ${ampm}`;

      setCurrentTime(formattedTime);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={style.Container}>
      <View style={style.Cricketborder}>
        <Text style={style.textsty10}>Football</Text>
      </View>
      <ScrollView>
        <View style={style.borderbox}>
          <Text style={style.borderboxtext}>In-Play</Text>
          <Text style={style.borderboxtext1}>1</Text>
          <Text style={style.borderboxtext2}>X</Text>
          <Text style={style.borderboxtext3}>2</Text>
        </View>

        <View>
          <TouchableOpacity onPress={handleNavigateToCricket}>
            <View style={style.andarbox}>
              <Text style={style.north}>Northern Diam...</Text>
              <Text style={style.timezone}>{currentTime}</Text>
              <Text style={style.the_bla}>The Blaze</Text>
            </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox}>
              <Text style={style.inplayboxtext}>In-Play</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox}>
                <Text style={style.inplaysaidtext}>1.44</Text>
                <Text style={style.inplaysaidtext2}>84.48</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox1}>
                <Text style={style.inplaysaidtext}>1.5</Text>
                <Text style={style.inplaysaidtext2}>19.43</Text>
              </View>
            </TouchableOpacity>
            <View style={style.inplaysaidbox2}>
            <Image source={require("../Assets/icon/Lock.png")}style={{height:responsiveHeight(5),width: responsiveWidth(6),marginLeft:responsiveWidth(2.5)}}/>

            </View>
            <View style={style.inplaysaidbox3}>
            <Image source={require("../Assets/icon/Lock.png")}style={{height:responsiveHeight(5),width: responsiveWidth(6),marginLeft:responsiveWidth(2.5)}}/>

            </View>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox4}>
                <Text style={style.inplaysaidtext}>3</Text>
                <Text style={style.inplaysaidtext2}>9.71</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox5}>
                <Text style={style.inplaysaidtext}>3.3</Text>
                <Text style={style.inplaysaidtext2}>36.86</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <View style={style.andarbox}>
              <Text style={style.north}>Central Coast M...</Text>
              <Text style={style.timezone2}>{currentTime}</Text>
              <Text style={style.the_bla2}>FC Abdish-Ata</Text>
            </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox}>
              <Text style={style.inplayboxtext}>In-Play</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox}>
                <Text style={style.inplaysaidtext}>2.3</Text>
                <Text style={style.inplaysaidtext2}>84.48</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox1}>
                <Text style={style.inplaysaidtext}>1.5</Text>
                <Text style={style.inplaysaidtext2}>19.43</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox4}>
                <Text style={style.inplaysaidtext}>1.44</Text>
                <Text style={style.inplaysaidtext2}>84.48</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox1}>
                <Text style={style.inplaysaidtext}>1.5</Text>
                <Text style={style.inplaysaidtext2}>19.43</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox4}>
                <Text style={style.inplaysaidtext}>3</Text>
                <Text style={style.inplaysaidtext2}>9.71</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox5}>
                <Text style={style.inplaysaidtext}>3.3</Text>
                <Text style={style.inplaysaidtext2}>36.86</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={style.borderbox2}>
          <Text style={style.borderboxtext}>Coming up</Text>
          <Text style={style.borderboxtext4}>1</Text>
          <Text style={style.borderboxtext5}>X</Text>
          <Text style={style.borderboxtext6}>2</Text>
        </View>

        <View>
          <TouchableOpacity>
            <View style={style.andarbox}>
              <Text style={style.north}>Central Coast M..</Text>
              <Text style={style.timezone}>{currentTime}</Text>
              <Text style={style.the_bla}>The Blaze</Text>
            </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox12}>
              <Text style={style.inplayboxtext2}>{currentDate}</Text>
            </View>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox}>
                <Text style={style.inplaysaidtext}>2.3</Text>
                <Text style={style.inplaysaidtext2}>84.48</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox1}>
                <Text style={style.inplaysaidtext}>1.5</Text>
                <Text style={style.inplaysaidtext2}>19.43</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox4}>
                <Text style={style.inplaysaidtext}>1.44</Text>
                <Text style={style.inplaysaidtext2}>84.48</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox1}>
                <Text style={style.inplaysaidtext}>1.5</Text>
                <Text style={style.inplaysaidtext2}>19.43</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible2(true)}>
              <View style={style.inplaysaidbox4}>
                <Text style={style.inplaysaidtext}>3</Text>
                <Text style={style.inplaysaidtext2}>9.71</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={style.inplaysaidbox5}>
                <Text style={style.inplaysaidtext}>3.3</Text>
                <Text style={style.inplaysaidtext2}>36.86</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text>Update Value</Text>
            <View style={style.valueContainer}>
              <TouchableOpacity onPress={() => decrementValue(setValue)}>
                <Text style={style.incrementButton}>-</Text>
              </TouchableOpacity>
              <Text style={style.valueText}>{value}</Text>
              <TouchableOpacity onPress={() => incrementValue(setValue)}>
                <Text style={style.incrementButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableNativeFeedback onPress={() => setModalVisible(false)}>
              <View style={style.button}>
                <Text style={style.buttonText}>Close</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Modal>

      <Modal visible={modalVisible2} transparent={true} animationType="slide">
        <View style={style.modalContainer}>
          <View style={style.modalContent}>
            <Text>Update Value</Text>
            <View style={style.valueContainer}>
              <TouchableOpacity onPress={() => decrementValue(setValue2)}>
                <Text style={style.incrementButton}>-</Text>
              </TouchableOpacity>
              <Text style={style.valueText}>{value2}</Text>
              <TouchableOpacity onPress={() => incrementValue(setValue2)}>
                <Text style={style.incrementButton}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableNativeFeedback onPress={() => setModalVisible2(false)}>
              <View style={style.button}>
                <Text style={style.buttonText}>Close</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
}
