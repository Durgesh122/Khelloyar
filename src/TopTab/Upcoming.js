import { View, Text,ScrollView,TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import style from '../style/style'

export default function Upcoming() {
  return (
    <View style={style.Container}>
      <View style={style.Cricketborder}>
        <Text style={style.textsty10}>Cricket</Text>
      </View>
    <ScrollView>
        <View style={style.borderbox}>
          <Text style={style.borderboxtext}>UpComing</Text>
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
              <Text style={style.inplayboxtext2}>UpComing...</Text>
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
              <Text style={style.inplayboxtext2}>UpComing...</Text>
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
  )
}