import { View, Text, ScrollView, Image, TouchableOpacity, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';
import React, { useState, useEffect } from 'react';
import style from '../style/style';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

export default function Tomorrow({ navigation }) {
  const [tomorrowTime, setTomorrowTime] = useState('');
  const [tomorrowDate, setTomorrowDate] = useState('');
  const [modalvisibal, setModalVisibal] = useState(false)

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      now.setDate(now.getDate() + 1);
      const day = now.getDate();
      const monthIndex = now.getMonth();
      const year = now.getFullYear();
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'
      ];
      const monthName = monthNames[monthIndex];
      const formattedDay = day.toString().padStart(2, '0');
      const formattedYear = year.toString().slice(-4);
      const formattedDate = `${formattedDay} ${monthName} ${formattedYear}`;

      // Time
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedTime = `Tomorrow ${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;

      setTomorrowDate(formattedDate);
      setTomorrowTime(formattedTime);
    };

    const interval = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={style.Container}>
      <View style={style.Cricketborder}>
        <Text style={style.textsty10}>Cricket</Text>
      </View>
      <ScrollView>
        <View style={style.borderbox}>
          <Text style={style.borderboxtext}>Coming up</Text>
          <Text style={style.borderboxtext1}>1</Text>
          <Text style={style.borderboxtext3}>2</Text>
        </View>

        <View>
          <TouchableOpacity>
            <View style={style.andarbox}>
              <Text style={style.north}>Delhi Capitals</Text>
              <Text style={style.the_bla4}>Gujrat Titans</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.viewdir}>
          <View style={style.inplaybox113}>
            <Text style={style.inplayboxtext2}>Tomorrow 19:30</Text>
          </View>

          <View style={style.inplaysaidbox14}>
            <Text style={style.inplaysaidtext}>1.44</Text>
            <Text style={style.inplaysaidtext2}>84.48</Text>
          </View>


          <View style={style.inplaysaidbox1}>
            <Text style={style.inplaysaidtext}>1.5</Text>
            <Text style={style.inplaysaidtext2}>19.43</Text>
          </View>

          <View style={style.inplaysaidbox4}>
            <Text style={style.inplaysaidtext}>3</Text>
            <Text style={style.inplaysaidtext2}>9.71</Text>
          </View>

          <View style={style.inplaysaidbox5}>
            <Text style={style.inplaysaidtext}>3.3</Text>
            <Text style={style.inplaysaidtext2}>36.86</Text>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <View style={style.andarbox}>
              <Text style={style.north}>DP World Lions</Text>
              <Text style={style.the_bla5}>Titans</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={style.viewdir}>
          <View style={style.inplaybox113}>
            <Text style={style.inplayboxtext2}>Tomorrow 21:30</Text>
          </View>

          <View style={style.inplaysaidbox14}>
            <Text style={style.inplaysaidtext}>1.44</Text>
            <Text style={style.inplaysaidtext2}>84.48</Text>
          </View>


          <View style={style.inplaysaidbox1}>
            <Text style={style.inplaysaidtext}>1.5</Text>
            <Text style={style.inplaysaidtext2}>19.43</Text>
          </View>

          <View style={style.inplaysaidbox4}>
            <Text style={style.inplaysaidtext}>3</Text>
            <Text style={style.inplaysaidtext2}>9.71</Text>
          </View>

          <View style={style.inplaysaidbox5}>
            <Text style={style.inplaysaidtext}>3.3</Text>
            <Text style={style.inplaysaidtext2}>36.86</Text>
          </View>
        </View>
        <View style={style.placebet}>
          <View style={style.viewdir}>
            <View>
              <Text style={{ fontSize: responsiveFontSize(1.5), color: "black", fontWeight: "400", marginLeft: responsiveWidth(2) }}>Back (Bet For)</Text>
              <Text style={{ color: "black", fontWeight: "500", marginLeft: responsiveWidth(2), fontSize: responsiveFontSize(1.2) }}>The Draw-Match Odds</Text>
            </View>
            <TouchableOpacity style={style.cancelplacebtn}>
              <Text style={style.cancelplacebtntext}>Cancal</Text>
            </TouchableOpacity>
            <TextInput style={style.oddstextinput} placeholder='odds' textAlign='center' />
            <TextInput style={style.oddstextinput} placeholder='Stake' textAlign='center' />
            <TouchableOpacity style={style.cancelplacebtn3} onPress={() => setModalVisibal(true)}>
              <Text style={style.cancelplacebtntext1}>Place bet</Text>
              <Text style={style.cancelplacebtntext2}>Profit 0.00</Text>
            </TouchableOpacity>
          </View>

        </View>
        <Modal
          transparent={true}
          visible={modalvisibal}
          animationType="fade"
          onRequestClose={() => setModalVisibal(false)}>
          <TouchableWithoutFeedback onPress={() => setModalVisibal(false)}>
            <View style={{ flex: 1, justifyContent: "flex-end", marginLeft: responsiveWidth(3), marginBottom: responsiveHeight(10) }}>
              <View style={style.modalstyle1}>
                <View style={style.modalstyle3}>
                  <View style={style.viewdir}>
                    <Text style={{ color: "rgba(32, 57, 116, 1)", fontSize: responsiveFontSize(1.5), fontWeight: "bold", margin: responsiveWidth(1.5) }}>The Draw</Text>
                    <Text style={{ color: "rgba(53, 73, 94, 1)", letterSpacing: 1, marginLeft: responsiveWidth(41), fontSize: responsiveFontSize(1.5), margin: responsiveWidth(1.5) }}>MAX BET </Text>
                    <Text style={{ color: "rgba(32, 57, 116, 1)", fontSize: responsiveFontSize(1.5), margin: responsiveWidth(1.5) }}> :400,008</Text>
                  </View>
                  <View style={style.viewdir}>
                    <Text style={{ color: "rgba(53, 73, 94, 1)", letterSpacing: 1, fontSize: responsiveFontSize(1.5), margin: responsiveWidth(1.5), fontWeight: "bolo" }} >Hvidovre v Lyngby</Text>
                    <Text style={{ color: "rgba(53, 73, 94, 1)", letterSpacing: 1, marginLeft: responsiveWidth(23), fontSize: responsiveFontSize(1.5), margin: responsiveWidth(1.5) }}>MAX MKT</Text>
                    <Text style={{ color: "rgba(32, 57, 116, 1)", fontSize: responsiveFontSize(1.5), margin: responsiveWidth(1.5) }}>:1,800,000</Text>

                  </View>
                  <View style={style.viewdir}>
                    <Text style={{ color: "rgba(32, 57, 116, 1)", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(2),fontWeight:"bold" }}>Odds</Text>
                    <Text style={{ color: "rgba(32, 57, 116, 1)", fontSize: responsiveFontSize(1.5), marginTop: responsiveHeight(2),fontWeight:"bold",marginLeft:responsiveWidth(31) }}>Stake</Text>

                  </View>
                  <View style={style.viewdir}>
                    <TouchableOpacity>
                    <View style={{ height: responsiveHeight(5), width: responsiveWidth(8), backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                      <Text style={{color:"white",fontWeight:"bold"}}>-</Text>
                    </View>
                    </TouchableOpacity>

                    <TextInput keyboardType="number-pad" style={{ height: responsiveHeight(5), width: responsiveWidth(20), backgroundColor: "white" }}></TextInput>
                     <TouchableOpacity>
                    <View style={{ height: responsiveHeight(5), width: responsiveWidth(8), backgroundColor: "black", justifyContent: "center", alignItems: "center" }}>
                      <Text style={{color:"white",fontWeight:"bold"}}>+</Text>
                    </View>
                    </TouchableOpacity>
                    <TextInput placeholder='Min:50.00'textAlign='center' keyboardType="number-pad" style={{ height: responsiveHeight(5), width: responsiveWidth(30),marginLeft:responsiveWidth(2),borderRadius:responsiveWidth(1), backgroundColor: "white" }}></TextInput>
                   <View style={{ marginTop:responsiveHeight(-2),borderTopLeftRadius:responsiveWidth(1),borderBottomLeftRadius:responsiveWidth(1),height: responsiveHeight(7), width: responsiveWidth(20), backgroundColor: "rgba(255, 214, 214, 1)", alignItems: "center",marginLeft:responsiveWidth(4),justifyContent:"center" }}>
                    <Text>Liability</Text>
                    <Text style={{color:"green"}}>0.00</Text>  
                  </View>
                  </View>

                  <View style={style.viewdir}>
                    <TouchableOpacity>
                    <View style={style. betsbox}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+50</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                    <View style={style. betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+100</Text>
                      </View>
                      </TouchableOpacity>
                      <TouchableOpacity>
                    <View style={style. betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+500</Text>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style. betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+1000</Text>

                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style. betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+5000</Text>

                    </View>
                    </TouchableOpacity>

                  </View>
                  <View style={{justifyContent:"center",alignItems:"center",flexDirection:"row"}}>
                    <TouchableOpacity>
                    <View style={style.betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+10000</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style.betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>+50000</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style.betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>Clear</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style.betsbox2}>
                      <Text style={{color:"black",fontWeight:"bold"}}>Edit Stake</Text>
                      
                    </View>
                    </TouchableOpacity>

                  </View>
                  <View style={style.modadlbox}>
                    <TouchableOpacity style={{height:responsiveHeight(5),width:responsiveWidth(30),borderWidth:1,borderRadius:responsiveWidth(1),borderColor:"rgba(100, 100, 104, 1)",justifyContent:"center",alignItems:"center",}}>
                      <View style={style.viewdir}>
                        <Image source={require('../Assets/icon/Delete.png')} style={{height:responsiveHeight(2.5),width:responsiveWidth(5)}}/>
                        <Text style={{marginLeft:responsiveWidth(2)}}>Cancal order</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height:responsiveHeight(5),width:responsiveWidth(30),backgroundColor:"rgba(190, 197, 208, 1)",borderRadius:responsiveWidth(1),borderColor:"rgba(100, 100, 104, 1)",justifyContent:"center",alignItems:"center",marginLeft:responsiveWidth(27)}}>
                      <View style={style.viewdir}>
                        <Image source={require('../Assets/icon/check.png')} style={{height:responsiveHeight(2.5),width:responsiveWidth(5)}}/>
                        <Text style={{marginLeft:responsiveWidth(2),color:"white"}}>Place Bet</Text>
                        </View>
                    </TouchableOpacity>

                  </View>
                </View>


              </View>

            </View>

          </TouchableWithoutFeedback>

        </Modal>




        <View style={style.Bottombaneer}>
          <View style={style.logo3view}>
            <Image style={style.logo3imagsty} source={require('../Assets/image/Khelloyaar3.png')} />
          </View>
          <View>
            <Text style={style.banerteaxt}>Certification Information</Text>
            <Image source={require('../Assets/image/Gc.png')} style={style.Gcimage} />
          </View>
          <View style={style.viewdir}>
            <Text style={style.banerteaxt2}>Casino</Text>
            <Text style={style.banerteaxt2}>Sports</Text>
            <Text style={style.banerteaxt2}>About us</Text>
          </View>
          <View style={style.viewdir}>
            <Text style={style.banerteaxt3}>Live Casino</Text>
            <Text style={style.banerteaxt3}>Cricket</Text>
            <Text style={style.banerteaxt4}>Contact us</Text>
          </View>
          <View style={style.viewdir}>
            <Text style={style.banerteaxt5}>Football</Text>
            <Text style={style.banerteaxt6}>Download APP</Text>
          </View>
          <View>
            <Text style={style.banerteaxt7}>Tennis</Text>
            <Text style={style.banerteaxt7}>Aviator</Text>
          </View>
          <View>
            <Text style={style.banerteaxt2}>Support/Legal</Text>
            <Text style={style.banerteaxt3}>General Rules</Text>
            <Text style={style.banerteaxt3}>Cricket & Virtual Cricket Betting Rules</Text>
            <Text style={style.banerteaxt3}>Hit Or Miss & Big Hitters Cricket Betting Rules</Text>
            <Text style={style.banerteaxt3}>Kabaddi & Virtual Kabaddi Betting Rules</Text>
            <Text style={style.banerteaxt3}>Virtual Football Betting Rules</Text>
            <Text style={style.banerteaxt3}>Footballbook Betting Rules</Text>
            <Text style={style.banerteaxt3}>Privacy and Cookie Policy</Text>
            <Text style={style.banerteaxt3}>Responsible Gaming</Text>
            <Text style={style.banerteaxt8}>T&Cs</Text>
            <Text style={style.banerteaxt8}>FAQs</Text>
          </View>
          <View style={{ borderTopWidth: 2, borderColor: "rgba(39, 40, 40, 1)", marginTop: 20 }}>
            <Text style={style.banerteaxt2}>Join Our Community</Text>
          </View>
          <View style={[style.viewdir, { marginTop: 10 }]}>
            <Image source={require('../Assets/image/Twitter.png')} style={style.soimage}></Image>
            <Image source={require('../Assets/image/Instagram.png')} style={style.soimage}></Image>
            <Image source={require('../Assets/image/Fb.png')} style={style.soimage}></Image>
          </View>
          <View style={{ borderTopWidth: 2, borderColor: "rgba(39, 40, 40, 1)", marginTop: 20, marginBottom: 20 }}>
            <Text style={style.banerteaxt2}>Supported Currencies</Text>
            <View style={[style.viewdir, { marginTop: 10 }]}>
              <Image source={require("../Assets/image/Timage.png")} style={style.soimage2} />
              <Image source={require("../Assets/image/Rupay.png")} style={style.soimage2} />
            </View>
            <View style={{ borderTopWidth: 2, borderColor: "rgba(39, 40, 40, 1)", marginTop: 20, marginBottom: 20 }}>
              <View style={{ marginTop: 20 }}>
                <Text style={style.textsty11}>Please play responsibly and enjoy our sports and gaming experience.</Text>
                <Text style={style.textsty11}>COPYRIGHT © 2023 96 Group All Rights Reserved.</Text>
                <Text style={style.textsty11}>version:2024-04-23 08:38</Text>
                <Text style={style.textsty11}>60006001</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
