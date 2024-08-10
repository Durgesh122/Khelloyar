import { View, Text, ScrollView, Image, TouchableOpacity,Modal, TouchableNativeFeedback } from 'react-native'
import React, { useState, useEffect } from 'react'
import style from '../style/style'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { TextInput } from 'react-native-gesture-handler';

export default function TennisData({navigation}) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [modalvisible,setModalVisible]=useState("")
  const [value, setValue] = useState(1.5);
  const [modalvisible2,setModalVisible2]=useState("")
  const [value1, setValue2] = useState(1.44);

  const increment = () => {
    setValue((prevValue) => (parseFloat(prevValue) + 0.01).toFixed(2));
  };

  const decrement = () => {
    setValue((prevValue) => {
      const newValue = parseFloat(prevValue) - 0.01;
      return newValue > 0 ? newValue.toFixed(2) : '0.00';
    });
  };
  

  
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
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
        <Text style={style.textsty10}>Tennis</Text>
      </View>
      <ScrollView>
        <View style={style.borderbox}>
          <Text style={style.borderboxtext}>In-Play</Text>
          <Text style={style.borderboxtext1}>1</Text>
          <Text style={style.borderboxtext2}>X</Text>
          <Text style={style.borderboxtext3}>2</Text>
        </View>

        <View>
        <TouchableOpacity>
          <View style={style.andarbox}>
         
            <Text style={style.north}>Northern Diam...</Text>
            <Text style={style.timezone}>{currentTime}</Text>
            <Text style={style.the_bla}> The Blaze</Text>
          </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox}>
              <Text style={style.inplayboxtext}>In-Play</Text>
            </View>
             <TouchableOpacity onPress={()=>setModalVisible2(true)} >
               <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>1.44</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setModalVisible(true)}>
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
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox4}>
              <Text style={style.inplaysaidtext}>3</Text>
              <Text style={style.inplaysaidtext2}>9.71</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModalVisible()}>
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
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>2.3</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox1}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox4}>
              <Text style={style.inplaysaidtext}>1.44</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>

             <TouchableOpacity style={()=>setModalVisible()}>
            <View style={style.inplaysaidbox1}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox4}>
              <Text style={style.inplaysaidtext}>3</Text>
              <Text style={style.inplaysaidtext2}>9.71</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible()}>
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
           <TouchableOpacity >
          <View style={style.andarbox}>

            <Text style={style.north}>Central Coast M..</Text>
            <Text style={style.timezone}>{currentTime}</Text>
            <Text style={style.the_bla}> The Blaze</Text>
          </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox12}>
              <Text style={style.inplayboxtext2}>{currentDate}</Text>
            </View>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>2.3</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox1}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>1.44</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox5}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
              <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox4}>
              <Text style={style.inplaysaidtext}>3</Text>
              <Text style={style.inplaysaidtext2}>9.71</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible()}>
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
      
            <Text style={style.north}>Persik Kediri</Text>
            <Text style={style.timezone3}>{currentTime}</Text>
            <Text style={style.the_bla3}>FC Abdish-Ata</Text>
          </View>
          </TouchableOpacity>
          <View style={style.viewdir}>
            <View style={style.inplaybox12}>
              <Text style={style.inplayboxtext2}>{currentDate}</Text>
            </View>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>2.3</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>
              <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox1}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible2()}>
            <View style={style.inplaysaidbox}>
              <Text style={style.inplaysaidtext}>1.44</Text>
              <Text style={style.inplaysaidtext2}>84.48</Text>
            </View>
            </TouchableOpacity>

             <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox1}>
              <Text style={style.inplaysaidtext}>1.5</Text>
              <Text style={style.inplaysaidtext2}>19.43</Text>
            </View>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>setModalVisible2()}>            
              <View style={style.inplaysaidbox4}>
              <Text style={style.inplaysaidtext}>3</Text>
              <Text style={style.inplaysaidtext2}>9.71</Text>
            </View>
            </TouchableOpacity>

             <TouchableOpacity onPress={()=>setModalVisible()}>
            <View style={style.inplaysaidbox5}>
              <Text style={style.inplaysaidtext}>3.3</Text>
              <Text style={style.inplaysaidtext2}>36.86</Text>
            </View>
            </TouchableOpacity>

          </View>
        </View>
        <View style={style.Bottombaneer}>
          <View style={style.logo3view}>
            <Image style={style.logo3imagsty}source={require('../Assets/image/Khelloyaar3.png')}/>
          </View>
          <View>

            <Text style={style.banerteaxt}>Certification Information</Text>
            <Image source={require('../Assets/image/Gc.png')}style={style.Gcimage}/>
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

           <View style={{borderTopWidth:2,borderColor:"rgba(39, 40, 40, 1)",marginTop:20}}>
            <Text style={style.banerteaxt2}>Join Our Community</Text>
            </View>
            <View style={[style.viewdir,{marginTop:10}]}> 
            <Image source={require('../Assets/image/Twitter.png')}style={style.soimage}></Image>
            <Image source={require('../Assets/image/Instagram.png')}style={style.soimage}></Image>
            <Image source={require('../Assets/image/Fb.png')}style={style.soimage}></Image>
           </View>

           <View style={{borderTopWidth:2,borderColor:"rgba(39, 40, 40, 1)",marginTop:20,marginBottom:20}}>
            <Text style={style.banerteaxt2}>Supported Currencies</Text>
            <View style={[style.viewdir,{marginTop:10}]}>
              <Image source={require("../Assets/image/Timage.png")}style={style.soimage2}/>
              <Image source={require("../Assets/image/Rupay.png")}style={style.soimage2}/>
            </View>
            <View style={{borderTopWidth:2,borderColor:"rgba(39, 40, 40, 1)",marginTop:20,marginBottom:20}}>
              <View style={{marginTop:20}}>
              <Text style={style.textsty11}>Please play responsibly and enjoy our sports and gaming experience.</Text>
              <Text style={style.textsty11}>COPYRIGHT © 2023 96 Group All Rights Reserved.</Text>
              <Text style={style.textsty11}>version:2024-04-23 08:38</Text>
              <Text style={style.textsty11}>60006001</Text>
              </View>

            </View>
          
            
            </View>

       </View>
       
       </ScrollView>
       <Modal 
       visible={modalvisible}
       animationType="slide"
       transparent={true}>
        <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
         <View style={style.modalstyle}>
          <View style={style.modalview}>
            <Text style={style.modeltext}>Betsilp</Text>
            <View style={style.modalview2}>
              <Text style={style.modeltext2}>United Arab Emirates Women v Ireland Women - Match Odds</Text>
            </View>
            <View style={style.modalview3}>
              <Text style={style.textmodal}>Yes</Text>
              <Text style={style.textmodal2}>Points</Text>
              <Text style={style.textmodal3}>Backer's stake</Text>
              <Text style={style.textmodal4}>Your liability</Text>
           </View>
           <View style={style.viewdir}>

            <Image source={require("../Assets/icon/Button.png")}style={{margin:responsiveWidth(3),marginTop:responsiveHeight(2.5)}}/>
             <Text style={style.modeltext3}>Ireland Women</Text>
             <View style={style.dropdown}>
             <TextInput
              style={{padding:2}}
              value={String(value)}
              keyboardType="numeric"
              onChangeText={(text) => setValue(text)}
               />
            </View>
            <View>
            <TouchableOpacity style={style.Dropdonbtn} onPress={()=>increment()}>
              <Image source={require("../Assets/icon/UpArrow.png")}style={style.Downarrow2}/>
              </TouchableOpacity>
              <TouchableOpacity  style={style.Dropdonbtn2}onPress={()=>decrement()}>
              <Image source={require("../Assets/icon/DownArrow1.png")}/>
              </TouchableOpacity>
            </View>
            <View style={style.dropdown1}>
             <Text style={style.textmodal}>211</Text>
            </View>
            <View style={style.dropdown}>
              <Text style={style.textmodal}>50.64</Text>
              </View>
           </View>
           <View style={style.viewdir}>
            
           <Text style={{marginLeft:responsiveWidth(63),fontSize:responsiveFontSize(1.5)}}>Liability:</Text>
           <Text style={{marginLeft:responsiveWidth(10.5),fontSize:responsiveFontSize(1.5)}}>50.64</Text>
          </View>
          <View style={{borderTopWidth:1,borderColor:"rgba(231, 231, 231, 1)",marginTop:responsiveHeight(1)}}></View>
           
           <View style={style.CanbtnView}>
            <TouchableOpacity style={style.canclebtn}onPress={()=>setModalVisible(false)}>
              <Text style={style.cancalbtntext}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.canclebtn2}>
              <Text style={style.cancalbtntext2}>Place bets</Text>
            </TouchableOpacity>
           </View>
          </View>

         </View>

        </View>
        </Modal>

        <Modal 
       visible={modalvisible2}
       animationType="slide"
       transparent={true}>
        <View style={{flex:1,justifyContent:"flex-end",alignItems:"center"}}>
         <View style={style.modalstyle}>
          <View style={style.modalview}>
            <Text style={style.modeltext}>Betsilp</Text>
            <View style={style.modalview5}>
              <Text style={style.modeltext2}>United Arab Emirates Women v Ireland Women - Match Odds</Text>
            </View>
            <View style={style.modalview6}>
              <Text style={style.textmodal}>No</Text>
              <Text style={style.textmodal2}>Points</Text>
              <Text style={style.textmodal5}>stake</Text>
              <Text style={style.textmodal6}>Profit</Text>
           </View>
           <View style={style.viewdir}>

            <Image source={require("../Assets/icon/Button.png")}style={{margin:responsiveWidth(3),marginTop:responsiveHeight(2.5)}}/>
             <Text style={style.modeltext3}>United Arab....</Text>
             <View style={style.dropdown}>
             <TextInput
              style={{padding:2}}
              value={String(value1)}
              keyboardType="numeric"
              onChangeText={(text) => setValue2(text)}
               />
            </View>
            <View>
            <TouchableOpacity style={style.Dropdonbtn} onPress={()=>increment()}>
              <Image source={require("../Assets/icon/UpArrow.png")}style={style.Downarrow2}/>
              </TouchableOpacity>
              <TouchableOpacity  style={style.Dropdonbtn2}onPress={()=>decrement()}>
              <Image source={require("../Assets/icon/DownArrow1.png")}/>
              </TouchableOpacity>
            </View>
            <View style={style.dropdown1}>
             <Text style={style.textmodal}>211</Text>
            </View>
            <View style={style.dropdown}>
              <Text style={style.textmodal}>50.64</Text>
              </View>
           </View>
           <View style={style.viewdir}>
            
           <Text style={{marginLeft:responsiveWidth(63),fontSize:responsiveFontSize(1.5)}}>Liability:</Text>
           <Text style={{marginLeft:responsiveWidth(10.5),fontSize:responsiveFontSize(1.5)}}>50.64</Text>
          </View>
          <View style={{borderTopWidth:1,borderColor:"rgba(231, 231, 231, 1)",marginTop:responsiveHeight(1)}}></View>
           
           <View style={style.CanbtnView}>
            <TouchableOpacity style={style.canclebtn}onPress={()=>setModalVisible2(false)}>
              <Text style={style.cancalbtntext}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.canclebtn2}>
              <Text style={style.cancalbtntext2}>Place bets</Text>
            </TouchableOpacity>
           </View>
          </View>

         </View>

        </View>


       </Modal>


    </View>
  )
}