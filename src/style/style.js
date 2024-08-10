import { StyleSheet } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveWidth } from "react-native-responsive-dimensions"
import { Heightdim } from "./uttility"
import { WidthDim } from "./uttility"
const style = StyleSheet.create({
    Container: {
        flex: 1
    },
    Container2: {
        flex: 1

    },
    ImageBack: {
        height: responsiveHeight(100),
        width: responsiveWidth(100),
        justifyContent: "center",
        alignItems: "center"
    },
    Logview: {
        height: responsiveHeight(75),
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(2),
        backgroundColor: 'rgba(244, 244, 244, 0.6)',
        alignItems: "center",
        justifyContent: "center"

    },
    sigview: {
        width: responsiveWidth(90),
        borderRadius: responsiveWidth(2),
        backgroundColor: 'rgba(244, 244, 244, 0.6)',
        alignItems: "center",
        justifyContent: "center"

    },
    Logoimg: {
        height: responsiveHeight(15),
        width: responsiveHeight(15),
        marginBottom: responsiveHeight(5)
    },
    blackborder: {
        height: responsiveHeight(3),
        width: responsiveWidth(78),
        backgroundColor: "rgba(58, 58, 58, 1)",
        margin: responsiveHeight(2),
        borderRadius: responsiveWidth(1)
    },
    textsty: {
        color: "white",
        fontSize: responsiveFontSize(3.7),
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(-2.5),
        fontWeight: "bold",
    },
    textinput1: {
        width: responsiveWidth(78),
        height: responsiveHeight(6),
        backgroundColor: "white",
        margin: responsiveHeight(1.5),
        borderRadius: 5,
        paddingLeft: responsiveWidth(4),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2),
        },
    textinput2: {
        height: Heightdim * 0.055,
        width: WidthDim * 0.780,
        backgroundColor: "white",
        margin: Heightdim * 0.02,
        borderRadius: 5,
        paddingLeft: WidthDim * 0.040,
        fontFamily: "Rajdhani-SemiBold",
        fontSize: WidthDim * 0.040



    },
    eye: {
        height: responsiveHeight(3),
        width: responsiveWidth(6),
        marginLeft: responsiveWidth(-13),
        marginTop: responsiveHeight(2.5)
    },
    Forgotsty: {
        marginLeft: responsiveWidth(50)

    },
    viewdir: {
        flexDirection: "row",
    },
    viewdir2: {
        flexDirection: "row",
        alignItems: "center",

    },
    viewdir3: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "Center",
        marginRight: responsiveWidth(49.5)
    },
    viewdir4: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "Center",
        marginRight: responsiveWidth(37.5)
    },
    textsty2: {
        color: "black",
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)

    },
    back: {
        color: "black",
        marginLeft: responsiveWidth(70),
        fontWeight: "500",
        borderBottomWidth: responsiveWidth(0.2),
        margin: responsiveHeight(0.8),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)

    },
    checkbox: {
        // marginRight:WidthDim>400 ? 20 :(WidthDim <350 ? 15 :175 ),
    },
    textsty3: {
        color: "black",
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)
    },
    checkbox2: {
        marginLeft: -WidthDim > 500 ? "100%" : "10%",

    },
    textsty4: {
        color: "black",
        margin: Heightdim * 0.01,
        marginTop: Heightdim * 0.002,
        fontFamily: "Rajdhani-SemiBold",
        fontSize: Heightdim * 0.020
    },
    logbtn: {
        width: responsiveWidth(78),
        height: responsiveHeight(5),
        backgroundColor: "rgba(187, 22, 32, 1)",
        margin: responsiveHeight(3),
        borderRadius: responsiveWidth(3)
    },
    textsty5: {
        color: "white",
        textAlign: "center",
        margin: responsiveHeight(1),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)
    },
    textsty6: {
        color: "black",
        margin: responsiveHeight(2),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)
    },
    textsty7: {
        color: "rgba(187, 22, 32, 1)",
        borderBottomWidth: responsiveWidth(0.2),
        borderColor: "rgba(187, 22, 32, 1)",
        marginLeft: responsiveWidth(-2),
        margin: responsiveHeight(2),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2),

    },
    textsty9: {
        color: "white",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(1),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2),
    },
    textsty12: {
        color: "white",
        marginTop: responsiveHeight(1.5),
        marginLeft: responsiveWidth(2),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2),
    },
    textsty10: {
        color: "white",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        padding: responsiveHeight(1)
    },
    Loginbtntext: {
        color: "white",
        textAlign: "center",
        padding: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
        fontFamily: "Rajdhani-SemiBold",
        letterSpacing: 1

    },
    Loginbtntext2: {
        color: "black",
        textAlign: "center",
        padding: responsiveHeight(1),
        fontSize: responsiveFontSize(2),
        fontFamily: "Rajdhani-SemiBold",
        letterSpacing: 1


    },

    RegBtn: {

        height: responsiveHeight(5),
        width: responsiveWidth(27),
        borderRadius: responsiveWidth(2),
        borderColor: 'rgba(187, 22, 32, 1)',
        marginLeft: responsiveWidth(3),
        borderWidth: responsiveWidth(0.3)
    },
    code: {
        height: responsiveHeight(6),
        width: responsiveWidth(10),
        borderTopLeftRadius: responsiveWidth(1),
        borderBottomLeftRadius: responsiveWidth(1),
        backgroundColor: "rgba(28, 119, 255, 1)",
        margin: responsiveWidth(3),
        marginTop:responsiveHeight(1.8)

    },
    codelist: {
        width: responsiveWidth(10),
        height: responsiveHeight(17),
        backgroundColor: "rgba(28, 119, 255, 1)",
        marginTop: responsiveHeight(-18.5),
        margin: responsiveHeight(1.5),
        borderRadius: responsiveWidth(1)
    },
    phonenumber: {
        height: responsiveHeight(6),
        width: responsiveWidth(50),
        backgroundColor: "white",
        margin: responsiveHeight(1),
        marginLeft: responsiveWidth(-3),
        paddingLeft: responsiveWidth(2),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2)

    },
    otp: {
        height: responsiveHeight(6),
        width: responsiveWidth(18),
        margin: responsiveHeight(1),
        marginLeft: responsiveWidth(-2),
        borderTopRightRadius: responsiveWidth(1),
        borderBottomRightRadius: responsiveWidth(1),
    },
    logo2: {
        height: responsiveHeight(5),
        width: responsiveWidth(30),
        margin: responsiveWidth(2)
    },
    arrowlogo: {
        margin:12


    },
    LoginBtn: {
        height: responsiveHeight(5),
        width: responsiveWidth(27),
        borderRadius: responsiveWidth(2),
        backgroundColor: 'rgba(187, 22, 32, 1)',
        marginLeft: responsiveWidth(5)

    },
    backView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    HomeLogo: {
        height: 49,
        width: 58,
        borderWidth: 1,
        borderColor: "rgba(82, 82, 82, 1)",
        marginLeft: 5,


    },
    tablogosty1: {
        height: responsiveHeight(2.3),
        width: responsiveWidth(4.3),
        marginBottom: responsiveHeight(1.3)
    },

    touchlogo: {
        height: responsiveHeight(6.9),
        width: responsiveWidth(15),
        backgroundColor: "rgba(82, 82, 82, 1)",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: responsiveWidth(-4.5),
        marginTop: responsiveHeight(-0.5)

    },
    touchlogo2: {
        height: Heightdim * 7 / 100,
        width: WidthDim * 16 / 100,
        backgroundColor: "rgba(82, 82, 82, 1)",
        borderRadius: 5,
        marginTop: -5,
        alignItems: "center",
        marginLeft: -20

    },
    imageslide: {
        height: Heightdim,
        width: WidthDim

    },
    imagedot: {
        backgroundColor: "white",
        height: responsiveWidth(3),
        width: responsiveWidth(3),
        borderRadius: responsiveWidth(1.5),
        marginHorizontal: responsiveWidth(2)
    },
    renderdotstyle: {
        justifyContent: "center",
        flexDirection: "row",
        marginTop: responsiveHeight(-3)
    },
    searchsty: {
        height: responsiveHeight(4),
        width: responsiveWidth(95),
        borderWidth: responsiveWidth(0.3),
        borderRadius: responsiveWidth(1),
        margin: responsiveHeight(2),
        marginLeft: responsiveWidth(2.5),
        borderColor: "rgba(187, 22, 32, 1)",
        paddingLeft: responsiveHeight(5),
        padding: responsiveHeight(1)

    },
    serachicon: {
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(-4.8)
    },
    tabcontainer: {
        flex: 1,
        margin: responsiveHeight(1.5),
        marginLeft: responsiveWidth(-2),
        flexDirection: "row"
    },
    andartabview: {
        flexDirection: 'row',
        width: responsiveWidth(95),
        backgroundColor: "rgba(187, 22, 32, 1)",
        marginLeft: responsiveWidth(5),


    },
    andertext: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        marginLeft: responsiveWidth(1)




    },
    Cricketborder: {
        width: responsiveWidth(100),
        backgroundColor: 'rgba(187, 22, 32, 1)',
        margin: responsiveHeight(0.5),
        marginLeft: responsiveWidth(5)


    },
    Touchbaletab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(1),
        height: responsiveHeight(4.4),
        width: responsiveWidth(2),
        marginTop: responsiveHeight(0.3),
        marginRight: responsiveWidth(3)




    },
    inlinetext: {
        flex: 1,
        textAlign: 'center',
        lineHeight: responsiveHeight(5),
        color: "white",
        marginLeft: responsiveWidth(-5),
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500"
    },
    borderbox: {
        width: responsiveWidth(94),
        borderColor: "rgba(187, 22, 32, 1)",
        borderWidth: responsiveWidth(0.2),
        flexDirection: 'row',
        marginLeft: responsiveWidth(5),
        backgroundColor:"rgba(242, 245, 260, 1)"
    },
    borderbox2: {
        width: responsiveWidth(94),
        borderColor: "rgba(187, 22, 32, 1)",
        borderWidth: responsiveWidth(0.2),
        flexDirection: 'row',
        marginLeft: responsiveWidth(5),
        marginTop: 5
    }
    , borderboxtext: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 10,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext1: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 70,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext4: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 53,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext2: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 9,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext5: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 19,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext3: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 76,
        margin: 2,
        textAlign: "center"
    },
    borderboxtext6: {
        color: "black",
        fontSize: 12,
        fontWeight: "500",
        marginHorizontal: 65,
        margin: 2,
        textAlign: "center"
    },
    boxes: {
        height: responsiveHeight(11.5),
        width: responsiveWidth(94),
        marginLeft: responsiveWidth(5),
        borderRadius: 5,
        margin: WidthDim > 400 ? 3 : (WidthDim < 350 ? 2 : 2)
    },
    andarbox: {
        height: responsiveHeight(4),
        width: responsiveWidth(95),
        backgroundColor: "rgba(219, 219, 230, 2)",
        borderBottomLeftRadius: 5,
        flexDirection: "row",
        marginLeft: responsiveWidth(5),
        marginTop: responsiveHeight(1)

    },
    timezone: {
        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        marginHorizontal: responsiveWidth(10),
        margin: responsiveWidth(1),
        textAlign: "center"
    },
    timezone2: {
        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        marginHorizontal: responsiveWidth(8),
        margin: responsiveHeight(0.5),
        textAlign: "center"
    },
    timezone3: {
        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        marginHorizontal: 70,
        margin: 5,
        textAlign: "center"
    },
    north: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(1),
        margin: responsiveWidth(1),
        textAlign: "center",
        marginLeft: responsiveWidth(2)

    },
    the_bla: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(2.5),
        margin: responsiveWidth(1),
        textAlign: "center"
    },
    the_bla2: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(2),
        margin: responsiveHeight(0.5),
        textAlign: "center"
    },
    the_bla3: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(-11),
        margin: responsiveHeight(0.5),
        textAlign: "center"
    },
    the_bla4: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(2),
        margin: responsiveHeight(0.5),
        textAlign: "center",
        marginLeft:responsiveWidth(51)
    },
    the_bla5: {

        color: "black",
        fontSize: responsiveFontSize(1.5),
        fontWeight: "bold",
        marginHorizontal: responsiveWidth(2),
        margin: responsiveHeight(0.5),
        textAlign: "center",
        marginLeft:responsiveWidth(57)
    },
    inplaybox: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        backgroundColor: "rgba(187, 22, 32, 1)",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: responsiveHeight(1),
        justifyContent: "center",
        marginLeft: responsiveWidth(5)

    },
    inplaybox12: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: responsiveHeight(1),
        justifyContent: "center",
        marginLeft: responsiveWidth(5)

    },
    inplaybox113: {
        height: responsiveHeight(6),
        width: responsiveWidth(12),
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: responsiveHeight(1),
        justifyContent: "center",
        marginLeft: responsiveWidth(5)

    },
    inplayboxtext: {
        fontSize: responsiveFontSize(1.2),
        color: "white",
        textAlign: 'center'

    },
    inplayboxtext2: {
        fontSize: responsiveFontSize(1.2),
        color: "black",
        textAlign: 'center'
    },
    
    inplaysaidtext: {
        fontSize: responsiveFontSize(1.2),
        color: "white",
        textAlign: 'center'
    },
    inplaysaidtext6: {
        fontSize: responsiveFontSize(1.2),
        color: "white",
        textAlign: 'center',
        marginLeft:responsiveWidth(20)
    },
    inplaysaidbox: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(3),
        backgroundColor: "rgba(166, 216, 255, 1)",
        justifyContent: "center",


    },
    inplaysaidbox14: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(29),
        backgroundColor: "rgba(166, 216, 255, 1)",
        justifyContent: "center",


    },

    inplaysaidbox1: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        backgroundColor: "rgba(250, 201, 209, 1)",
        justifyContent: "center",



    },
    inplaysaidbox2: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(3),
        backgroundColor: "rgba(163, 163, 163, 1)",
        justifyContent: "center",



    },
    inplaysaidbox6: {

        height: Heightdim > 800 ? 50 : (Heightdim < 600 ? 40 : 45),
        width: WidthDim > 400 ? 50 : (WidthDim < 350 ? 40 : 45),
        backgroundColor: "rgba(166, 216, 255, 1)",
        marginTop: Heightdim > 800 ? 12 : (Heightdim < 600 ? 8 : 10),
        justifyContent: "center",
        marginLeft: WidthDim > 400 ? 12 : (WidthDim < 350 ? 7 : 10),
    },
    inplaysaidbox7: {
        height: Heightdim > 800 ? 50 : (Heightdim < 600 ? 40 : 45),
        width: WidthDim > 400 ? 50 : (WidthDim < 350 ? 40 : 45),
        backgroundColor: "rgba(166, 216, 255, 1)",
        marginTop: Heightdim > 800 ? 12 : (Heightdim < 600 ? 8 : 10),
        justifyContent: "center",
        marginLeft: WidthDim > 400 ? 7 : (WidthDim < 350 ? 4 : 5),
    },
    inplaysaidbox3: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        backgroundColor: "rgba(163, 163, 163, 1)",
        justifyContent: "center",



    },
    inplaysaidbox4: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(3),
        backgroundColor: "rgba(166, 216, 255, 1)",
        justifyContent: "center",



    },
    inplaysaidbox5: {
        height: responsiveHeight(6),
        width: responsiveWidth(11),
        marginTop: responsiveHeight(1),
        marginLeft: responsiveWidth(2),
        backgroundColor: "rgba(250, 201, 209, 1)",
        justifyContent: "center",



    },
    inplaysaidtext: {
        color: "black",
        fontWeight: "500",
        textAlign: "center"
    },
    inplaysaidtext2: {
        color: "black",

        fontWeight: "500",
        textAlign: "center",
        fontSize: 9
    },
    Bottombaneer: {
        width: responsiveWidth(100),
        backgroundColor: "rgba(15, 18, 19, 1)",
        marginLeft: responsiveWidth(5),
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        margin: responsiveWidth(2.5)

    },
    logo3view: {
        alignItems: "center",
        borderBottomWidth: 2,
        borderColor: "rgba(39, 40, 40, 1)"
    },
    logo3imagsty: {
        height: 45,
        width: 140,
        margin: 10
    },
    banerteaxt: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginTop: 20
    },
    banerteaxt2: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
        marginTop: 20,
        marginLeft: 15,
        marginHorizontal: 50
    },
    banerteaxt3: {
        fontSize: 15,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 15,
        marginHorizontal: 40
    },
    banerteaxt4: {
        fontSize: 15,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 35,
    },
    Gcimage: {
        height: Heightdim * 5 / 100,
        width: WidthDim * 30 / 100,
        marginLeft: 130
    },
    banerteaxt5: {
        fontSize: 15,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 150,

    },
    banerteaxt6: {
        fontSize: 15,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 65,

    },
    banerteaxt7: {
        fontSize: 15,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 150,

    },
    banerteaxt8: {
        fontSize: 20,
        color: "rgba(160, 160, 160, 1)",
        fontWeight: "400",
        marginTop: 20,
        marginLeft: 15,

    },
    soimage: {
        height: Heightdim * 4 / 100,
        width: WidthDim * 25 / 100,
        marginLeft: 10,
        marginHorizontal: 15
    },
    soimage2: {
        height: Heightdim * 5 / 100,
        width: WidthDim * 10 / 100,
        marginLeft: 10,
    },
    textsty11: {
        textAlign: "center",
        color: "rgba(164, 164, 164, 1)",
        fontSize: 9,


    },
    BottomTabsty: {
        width: responsiveWidth(100),
        height: responsiveHeight(10),
        backgroundColor: "rgba(33, 33, 33, 0.9)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",

    },
    Bottomicon: {
        height: responsiveHeight(2.8),
        width: responsiveWidth(5.5),
        marginBottom: responsiveHeight(1)


    },
    bottomlogotext2: {
        color: "white",
        fontSize: responsiveFontSize(1.5),
        letterSpacing: (1)

    },
    homeiconeborder1: {
        borderColor: "white",
        // borderWidth:1,
        alignItems: "center",
        justifyContent: "center",
        height: responsiveHeight(8),
        width: responsiveWidth(17),
        borderRadius: responsiveWidth(2)



    },
    homeiconeborder2: {
        borderColor: "white",
        // borderWidth:1,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: responsiveWidth(3),
        height: responsiveHeight(8),
        width: responsiveWidth(17),
        borderRadius: responsiveWidth(2)
    },


    downarrow: {
        height: responsiveHeight(1),
        width: responsiveWidth(3),
        marginTop: responsiveHeight(2.5),
        marginLeft: responsiveWidth(2)
    },
    viewdir5: {
        alignItems: "center",
        justifyContent:"center"},

    blackviewborder: {
        height: responsiveHeight(9),
        width: responsiveWidth(100),
        flexDirection: "row",
        backgroundColor: "rgba(48, 48, 48, 1)",
        justifyContent: "center",
        alignItems: "center"
    },
    profilebackview: {
        height: responsiveHeight(6.9),
        width: responsiveWidth(15),
        backgroundColor: "rgba(82, 82, 82, 1)",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: responsiveWidth(0.8),
        marginTop: responsiveHeight(-0.5),
        marginRight: responsiveWidth(0.8)


    },
    textstyleprofile: {
        fontSize: responsiveFontSize(1.2),
        fontWeight: "500",
        color: "white",
        textAlign:"center"
    },
    textstyleprofilebackbtn: {
        fontSize: responsiveFontSize(1.2),
        fontWeight: "500",
        color: "white",
        textAlign:"center",
        padding:responsiveHeight(1)
    },
    textstyleprofilebackbtn3: {
        fontSize: responsiveFontSize(1.2),
        fontWeight: "500",
        color: "white",
        textAlign:"center",
        marginTop:responsiveHeight(1.5)
    },
    textstyleprofilebackbtn4: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        color: "rgba(187, 22, 32, 1)",
        textAlign:"center",
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(25)
    },
    textstyleprofilebackbtn5: {
        fontSize: responsiveFontSize(1.5),
        fontWeight: "500",
        color: "rgba(187, 22, 32, 1)",
        textAlign:"center",
        marginTop:responsiveHeight(3.4),
    },
    textstyleprofilebackbtn2: {
        fontSize: responsiveFontSize(1.2),
        fontWeight: "500",
        color: "black",
        textAlign:"center",
        padding:responsiveHeight(1)
    },
    Profileicon: {
        height: responsiveHeight(2.3),
        width: responsiveWidth(4.3),
        marginBottom: responsiveHeight(1.3),
        marginLeft: responsiveWidth(1.5)

    },
    Profileicon2: {
        height: responsiveHeight(2.3),
        width: responsiveWidth(4.3),
        marginBottom: responsiveHeight(1.3),
        marginLeft: responsiveWidth(4)


    },
    Profileicon3: {
        height: responsiveHeight(2.3),
        width: responsiveWidth(4.3),
        marginBottom: responsiveHeight(1.3),
        marginLeft: responsiveWidth(3)


    },
    Profileborder: {
       backgroundColor:"rgba(233, 233, 240, 1)",
       height:responsiveHeight(88),
       width:responsiveWidth(95),
       marginTop:responsiveHeight(1),
       borderRadius:responsiveWidth(2.5),
       marginBottom:responsiveHeight(5)
       
    },
    Crickescreen:{
        backgroundColor:"rgba(187, 22, 32, 1)",
        height:responsiveHeight(5),
        width:responsiveWidth(94),
        margin:responsiveHeight(1.5),
        alignItems:"center",
        flexDirection:"row"

    },
    Crickescreen2:{
        backgroundColor:"rgba(187, 22, 32, 1)",
        height:responsiveHeight(7),
        width:responsiveWidth(94),
        margin:responsiveHeight(1.5),
        marginTop:responsiveHeight(-1)

    },
    crickettesxtsty:{
        fontSize:responsiveFontSize(1.5),
        // marginLeft:responsiveWidth(5),
        color:"white",
        fontWeight:"500",
        

    },
    crickettesxtsty2:{
        fontSize:responsiveFontSize(1.5),
        marginLeft:responsiveWidth(-2),
        color:"white",
        fontWeight:"500"

    },
    activeborder1:{
        height:responsiveHeight(4),
        width:responsiveWidth(20),
        borderWidth:1,
        alignItems:"center",
        marginLeft:responsiveWidth(15),
        paddingTop:5,
        borderRadius:5

    },
    activeborder2:{
        height:responsiveHeight(4),
        width:responsiveWidth(20),
        borderWidth:1,
        alignItems:"center",
        marginLeft:responsiveWidth(2),
        paddingTop:5,
        borderRadius:5

    },
    activeborder3:{
        height:responsiveHeight(4),
        width:responsiveWidth(20),
        borderWidth:1,
        alignItems:"center",
        marginLeft:responsiveWidth(2),
        paddingTop:5,
        borderRadius:5

    },
    Profilebackbtn:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5)
    },
    Profilebackbtn7:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        borderWidth:1,
        marginLeft:responsiveWidth(53.5)
    },
    Profilebackbtn10:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        borderWidth:1,
        marginLeft:responsiveWidth(8)
    },
    Profilebackbtn15:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        borderWidth:1,
        marginLeft:responsiveWidth(21)
    },
    Profilebackbtn11:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        backgroundColor:"rgba(187, 22, 32, 1)",
        marginLeft:responsiveWidth(1)
    },
    Profilebackbtn14:{
        height:responsiveHeight(5),
        width:responsiveWidth(30),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        backgroundColor:"rgba(187, 22, 32, 1)",
        marginLeft:responsiveWidth(1)
    },
    Profilebackbtn9:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        borderWidth:1,
        marginLeft:responsiveWidth(48)
    },
    Profilebackbtn12:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(5),
        borderWidth:1,
        marginLeft:responsiveWidth(48)
    },
    Profilebackbtn8:{
        height:responsiveHeight(5),
        width:responsiveWidth(26),
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        marginLeft:responsiveWidth(2),
        backgroundColor:"rgba(187, 22, 32, 1)"
    },
    Profilebackbtn13:{
        height:responsiveHeight(5),
        width:responsiveWidth(26),
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(5),
        marginLeft:responsiveWidth(2),
        backgroundColor:"rgba(187, 22, 32, 1)"
    },
    Profilebackbtn3:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:"rgba(127, 127, 127, 1)",
        margin:responsiveWidth(2),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        marginLeft:responsiveWidth(9.5)
    },
    Profilebackbtn5:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:"rgba(213, 213, 213, 1)",
        margin:responsiveWidth(2),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        marginLeft:responsiveWidth(9.5)
    },
    Profilebackbtn4:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:"rgba(213, 213, 213, 1)",
        margin:responsiveWidth(2),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        marginLeft:responsiveWidth(-2)
    },
    Profilebackbtn6:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        backgroundColor:"rgba(127, 127, 127, 1)",
        margin:responsiveWidth(2),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        marginTop:responsiveHeight(1.5),
        marginLeft:responsiveWidth(-2)
    },
    Profilebackbtn2:{
        height:responsiveHeight(5),
        width:responsiveWidth(20),
        borderWidth:responsiveWidth(0.3),
        borderColor:"rgba(187, 22, 32, 1)",
        margin:responsiveWidth(2),
        borderRadius:responsiveWidth(1),
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white",
        marginLeft:responsiveWidth(24),
        marginTop:responsiveHeight(1.5)
    },
    textstyle2Profile:{
        margin:responsiveHeight(2),
        fontSize:responsiveFontSize(2.5),
        color:"rgba(187, 22, 32, 1)",
        marginLeft:responsiveWidth(1.5)
    },
    textstylprofile2:{
        color:"black",
        fontSize:responsiveFontSize(2.5),
        margin:responsiveHeight(2),
        fontWeight:"bold"
    },
    textinputProfile: {
        width: responsiveWidth(89),
        height: responsiveHeight(6),
        backgroundColor: "white",
        margin: responsiveHeight(1.5),
        borderRadius: 5,
        paddingLeft: responsiveWidth(4),
        fontFamily: "Rajdhani-SemiBold",
        fontSize: responsiveFontSize(2),
        borderWidth:1,
        borderColor:"rgba(187, 190, 190, 1)"
        },

        bollsty:{
            margin:responsiveHeight(0.5),
            marginTop:responsiveHeight(2.5)
        },
        crickettoods:{
            backgroundColor:"rgba(28, 119, 255, 1)",
            height:responsiveHeight(5),
            width:responsiveWidth(35),
            marginLeft:responsiveWidth(3),
            borderTopRightRadius:responsiveWidth(2),
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center"
        },
        textcri:{
            color:"white",
            fontWeight:"500",
            margin:5,
            fontSize:responsiveFontSize(1.7)
        },
        backlay:{
            height:responsiveHeight(3),
            width: responsiveWidth(15),
            marginLeft:responsiveWidth(21),
            marginTop:responsiveHeight(2),
            backgroundColor:"rgba(166, 216, 255, 1)"
           
        },
        backlay2:{
            height:responsiveHeight(3),
            width: responsiveWidth(15),
            marginLeft:responsiveWidth(0.5),
            marginTop:responsiveHeight(2),
            backgroundColor:"rgba(250, 201, 209, 1)"
           
        },
        cricketbackbtnborder: {
            fontSize: responsiveFontSize(1.7),
            fontWeight: "500",
            color: "black",
            textAlign:"center",
        },
        cricketbackbtnborder1: {
            fontSize: responsiveFontSize(1.5),
            fontWeight: "500",
            color: "black",
            textAlign:"center",
            marginLeft:responsiveWidth(-35)
        },
        backlayno:{
            height:responsiveHeight(4),
            width: responsiveWidth(23),
            marginLeft:responsiveWidth(7),
            marginTop:responsiveHeight(0.3),
            backgroundColor:"rgba(166, 216, 255, 1)"
           
        },
        backlayno1:{
            height:responsiveHeight(4),
            width: responsiveWidth(23),
            marginLeft:responsiveWidth(0.4),
            marginTop:responsiveHeight(0.3),
            backgroundColor:"rgba(250, 201, 209, 1)"
           
        },
        backlayno2:{
            height:responsiveHeight(4),
            width: responsiveWidth(23),
            marginLeft:responsiveWidth(27),
            marginTop:responsiveHeight(0.3),
            backgroundColor:"rgba(166, 216, 255, 1)"
           
        },
        viewcri:{
            flexDirection:"row",
            marginTop:responsiveHeight(-2.5),
            marginLeft:responsiveWidth(3)
        },
        modalstyle:{

            backgroundColor:"white",
            marginLeft:responsiveWidth(12.5), 
            height:responsiveHeight(30), 
            width:responsiveWidth(100),
            marginRight:49,
        },
        modalstyle1:{

            backgroundColor:"white",
            height:responsiveHeight(50), 
            width:responsiveWidth(94),
            marginRight:49,
            borderRadius:responsiveWidth(1),
            backgroundColor:"rgba(214, 27, 94, 1)"

            
        },
        modalstyle3:{

            backgroundColor:"white",
            height:responsiveHeight(8), 
            width:responsiveWidth(90),
            marginRight:49,
            borderRadius:responsiveWidth(1),
            backgroundColor:"rgba(255, 214, 214, 1)",
            margin:responsiveWidth(2)

            
        },
        modalview:{
            height:responsiveHeight(5),
            width:responsiveWidth(100),
            backgroundColor:"rgba(64, 64, 64, 1)",
        },
        modalview2:{
            height:responsiveHeight(5),
            width:responsiveWidth(100),
            backgroundColor:"rgba(254, 233, 238, 1)"
        },
        modalview5:{
            height:responsiveHeight(5),
            width:responsiveWidth(100),
            backgroundColor:"rgba(219, 239, 255, 1)"
        },
        modalview3:{
            height:responsiveHeight(5),
            width:responsiveWidth(100),
            backgroundColor:"rgba(250, 201, 209, 1)",
            flexDirection:"row"
        },
        modalview6:{
            height:responsiveHeight(5),
            width:responsiveWidth(100),
            backgroundColor:"rgba(166, 216, 255, 1)",
            flexDirection:"row"
        },
        modeltext:{
            color:"white",
            fontSize:responsiveFontSize(1.5),
            fontWeight:"bold",
            textAlign:"left",
            margin:responsiveHeight(1),
            marginLeft:responsiveWidth(3)
        },
        modeltext2:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            fontWeight:"bold",
            textAlign:"left",
            margin:responsiveHeight(1),
            marginLeft:responsiveWidth(3)
        },
        modeltext3:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            fontWeight:"bold",
            textAlign:"left",
            margin:responsiveHeight(1.2),
            marginLeft:responsiveWidth(-1.5),
            marginTop:responsiveHeight(2.2)
        },
        textmodal:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(3)
         },
         textmodal2:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(21)
         },
         textmodal3:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(15)
         },
         textmodal5:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(16)
         },
         textmodal6:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(12)
         },
         textmodal4:{
            color:"black",
            fontSize:responsiveFontSize(1.5),
            margin:responsiveWidth(2),
            marginLeft:responsiveWidth(1)
         },
         dropdown:{
            borderColor:"rgba(223, 223, 223, 1)",
            borderWidth:1,
            height:responsiveHeight(4.2),
            width:responsiveWidth(20),
            margin:responsiveHeight(1),
            alignItems:"center",
            justifyContent:"center",
            marginLeft:responsiveWidth(-0.5)
         },
         dropdown1:{
            borderColor:"rgba(223, 223, 223, 1)",
            borderWidth:1,
            height:responsiveHeight(4.2),
            width:responsiveWidth(20),
            margin:responsiveHeight(1),
            alignItems:"center",
            justifyContent:"center",
            marginLeft:responsiveWidth(1.5)
         },
         Downarrow2:{
        
         },
         Dropdonbtn:{
            height:responsiveHeight(2),
            width:responsiveWidth(5),
            borderWidth:1,
            alignItems:"center",
            justifyContent:"center",
            // marginLeft:responsiveWidth(20),
            borderColor:"rgba(223, 223, 223, 1)",
            marginTop:responsiveHeight(1),
            marginLeft:responsiveWidth(-2)
         },
         Dropdonbtn2:{
            height:responsiveHeight(2),
            width:responsiveWidth(5),
            borderWidth:1,
            alignItems:"center",
            justifyContent:"center",
            // marginLeft:responsiveWidth(),
            borderColor:"rgba(223, 223, 223, 1)",
            marginTop:responsiveHeight(0.2),
            marginLeft:responsiveWidth(-2)
         },
         CanbtnView:{
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
        
    


         },
         canclebtn:{
            height:responsiveHeight(4),
            width:responsiveWidth(20),
            backgroundColor:"rgba(216, 216, 216, 1)",
            margin:responsiveHeight(1),

         },
         cancalbtntext:{
            fontSize:responsiveFontSize(1.5),
            textAlign:"center",
            padding:responsiveHeight(1),
            color:"black",
            fontWeight:"500"
         },
         canclebtn2:{
            height:responsiveHeight(4),
            width:responsiveWidth(20),
            backgroundColor:"rgba(187, 22, 32, 1)",
            margin:responsiveHeight(1),
            marginLeft:responsiveWidth(53)
        

         },
         cancalbtntext2:{
            fontSize:responsiveFontSize(1.5),
            textAlign:"center",
            padding:responsiveHeight(1),
            color:"white",
            fontWeight:"500"
         },
         textmybets:{
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(2)
            
         },
         textmybets6:{
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(2)
            
         },
         textmybets7:{
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(5)
            
         },
         textmybets2:{
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(1),
            marginLeft:responsiveWidth(6.5)
            
         },
         textmybets3:{
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(3),
            marginLeft:responsiveWidth(40)
            
         },
         calender:{
            borderWidth:1,
            height:responsiveHeight(5),
            width:responsiveWidth(40),
            marginTop:responsiveHeight(2),
            borderColor:"rgba(187, 190, 190, 1)",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            
         },
         calender3:{
            borderWidth:1,
            height:responsiveHeight(5),
            width:responsiveWidth(45),
            borderColor:"rgba(187, 190, 190, 1)",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginLeft:responsiveWidth(2)
            
         },
         calender2:{
            borderWidth:1,
            height:responsiveHeight(5),
            width:responsiveWidth(40),
            borderColor:"rgba(187, 190, 190, 1)",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            
         },
         calender4:{
            borderWidth:1,
            height:responsiveHeight(5),
            width:responsiveWidth(45),
            borderColor:"rgba(187, 190, 190, 1)",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            marginLeft:responsiveWidth(5.5)
            
         },
         claimg:{
            height:responsiveHeight(2),
            width:responsiveWidth(3.5),
            marginRight:responsiveWidth(2)
         },
         datetext:{
            fontSize:responsiveFontSize(1.5),
            fontWeight:"500",
            marginLeft:responsiveWidth(2)
         },
         searchbtn:{
            height:responsiveHeight(5),
            width:responsiveWidth(25),
            margin:responsiveHeight(2),
            marginLeft:responsiveWidth(20),
            backgroundColor:"rgba(187, 22, 32, 1)",
            borderRadius:responsiveWidth(1)
         },
         searchbtn2:{
            height:responsiveHeight(5),
            width:responsiveWidth(25),
            margin:responsiveHeight(2),
            marginLeft:responsiveWidth(52),
            backgroundColor:"rgba(187, 22, 32, 1)",
            borderRadius:responsiveWidth(1)
         },
         EventData:{
            height:responsiveHeight(20),
            width:responsiveWidth(95),
            margin:responsiveHeight(1.2),
            marginTop:responsiveHeight(3),
            backgroundColor:"rgba(187, 22, 32, 1)",
            borderRadius:responsiveWidth(1),
         },
         EventData2:{
            height:responsiveHeight(15),
            width:responsiveWidth(95),
            margin:responsiveHeight(1.2),
            marginTop:responsiveHeight(3),
            backgroundColor:"rgba(187, 22, 32, 1)",
            borderRadius:responsiveWidth(1),
         },
         eventtext:{
            fontSize:responsiveFontSize(1.5),
            color:"white",
            fontWeight:"bold",
            margin:responsiveHeight(1.5)
         },
         eventtext4:{
            fontSize:responsiveFontSize(1.5),
            color:"white",
            fontWeight:"bold",
            margin:responsiveHeight(1.5),
            marginLeft:responsiveWidth(25.5)
         },
         eventtext7:{
            fontSize:responsiveFontSize(1.5),
            color:"white",
            fontWeight:"bold",
            margin:responsiveHeight(1.5),
            marginLeft:responsiveWidth(24)
         },
         eventtext2:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7)
         },
         eventtext9:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            marginTop:responsiveHeight(-2),
            marginLeft:responsiveWidth(3.3)
         },
         eventtext5:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7),
            marginLeft:responsiveWidth(1)
         },
         eventtext6:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7),
            marginLeft:responsiveWidth(-0.5)
         },
         eventtext3:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7),
            marginLeft:responsiveWidth(18)
         },
         eventtext8:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7),
            marginLeft:responsiveWidth(17)
         },
         eventtext10:{
            fontSize:responsiveFontSize(1.4),
            color:"white",
            fontWeight:"300",
            margin:responsiveHeight(1.7),
            marginLeft:responsiveWidth(12.5)
         },

         eventView:{
            flexDirection:"row",
            marginTop:responsiveHeight(-2)
         },
         modaldrowar:{
            backgroundColor:"black",
            height:responsiveHeight(82.5),
            width:responsiveWidth(60),
            marginTop:responsiveHeight(7.5),
            marginLeft:responsiveWidth(50),
            borderRadius:responsiveWidth(5)

        },
        gameborder:{
            height:responsiveHeight(5),
            width:responsiveWidth(95),
            backgroundColor:"rgba(233, 233, 240, 1)",
            margin:responsiveHeight(2),
            marginLeft:responsiveWidth(2),
            borderColor:"rgba(0, 0, 0, 0.31)",
            borderBottomWidth:1,
            justifyContent:"center",
            alignItems:"center"
        },
        gameborder2:{
            height:responsiveHeight(34),
            width:responsiveWidth(95),
            backgroundColor:"rgba(233, 233, 240, 1)",
            marginLeft:responsiveWidth(2),
            borderColor:"rgba(0, 0, 0, 0.31)",
            borderBottomWidth:1,
            marginTop:responsiveHeight(-2),
            alignItems:"center",
        },
        Totalpro:{
            height:responsiveHeight(5),
            width:responsiveWidth(60),
            borderWidth:1,
            marginTop:responsiveHeight(1),
            borderColor:"rgba(0, 0, 0, 0.14)",
            borderRadius:responsiveWidth(1.5)
        },
        borderbottm:{
            height:responsiveHeight(5),
            width:responsiveWidth(95),
            borderBottomWidth:1,
            borderColor:"rgba(0, 0, 0, 0.14)",
            marginTop:responsiveHeight(2),
            justifyContent:"space-between",
            flexDirection:"row",
        
        },
        textgame :{
            fontWeight:"bold",
            color:"black",
            textAlign:"center",
            marginTop:responsiveWidth(1.5),
            marginHorizontal:responsiveWidth(5)
        },
        textgame2 :{
            fontWeight:"bold",
            color:"black",
            textAlign:"center",
            marginTop:responsiveWidth(1.5),
            marginHorizontal:responsiveWidth(5)
        },
        drrawr :
        {
            backgroundColor:"white",
            height:responsiveHeight(5),
            width:responsiveWidth(45),
            margin:responsiveHeight(2),
            marginLeft:responsiveWidth(2.5),
            borderRadius:responsiveWidth(1),
            flexDirection:"row",
            justifyContent:"space-between",
            marginBottom:responsiveHeight(-1)
        },
        textgame6 :{
            fontWeight:"bold",
            color:"black",
            textAlign:"center",
            marginTop:responsiveWidth(2),
            marginHorizontal:responsiveWidth(5)
        },
        drewertext:{
            color:"white",
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(3.3),
            fontWeight:"bold"

        },
        drewertext2:{
            color:"white",
            margin:responsiveWidth(2),
            marginTop:responsiveHeight(2),
            fontWeight:"bold"

        },
        Logoutbtn:{
            height:responsiveHeight(5),
            width:responsiveWidth(45),
            margin:responsiveWidth(2),
            backgroundColor:"rgba(187, 22, 32, 1)",
            borderRadius:responsiveWidth(1.2),
            marginLeft:responsiveWidth(3),
            marginTop:responsiveHeight(-0.5)
        },
        filterby:{
            width:responsiveWidth(50),
            justifyContent:"center",
            marginLeft:responsiveWidth(2)
        },
        placebet:{
            height:responsiveHeight(7),
            width:responsiveWidth(94),
            margin:responsiveHeight(1),
            marginLeft:responsiveWidth(5),
            justifyContent:"center",
            backgroundColor:"rgba(166, 216, 255, 1)"
        },
        cancelplacebtn:{
             height:responsiveHeight(4),
             width:responsiveWidth(13.5),
             marginLeft:responsiveWidth(3),
             justifyContent:"center",
             alignItems:"center",
             borderRadius:responsiveWidth(1),
             backgroundColor:"rgba(219, 219, 219, 1)"
        },
        cancelplacebtn3:{
            height:responsiveHeight(4),
            width:responsiveWidth(13.5),
            marginLeft:responsiveWidth(3),
            alignItems:"center",
            borderRadius:responsiveWidth(1),
            backgroundColor:"rgba(243, 157, 1, 1)",
       },
        cancelplacebtntext:{
            color:"black",
            fontWeight:"400",
            fontSize:responsiveFontSize(1.5)
        },
        oddstextinput:{
            height:responsiveHeight(4),
            width:responsiveWidth(13.5),
            marginLeft:responsiveWidth(3),
            borderRadius:responsiveWidth(1),
            backgroundColor:"white",
            paddingTop:responsiveHeight(-2),
            padding:responsiveWidth(1)
       },
       cancelplacebtntext1:{
        color:"black",
        fontWeight:"bold",
        fontSize:responsiveFontSize(1.2)
    },cancelplacebtntext2:{
        color:"black",
        fontWeight:"400",
        fontSize:responsiveFontSize(1)
    },
    betsbox:{height:responsiveHeight(5),
        width:responsiveWidth(17),
        backgroundColor:"white",
        marginTop:responsiveHeight(2),
        borderRadius:responsiveWidth(1),
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"rgba(138, 158, 197, 0.97)"

    },
    betsbox2:{height:responsiveHeight(5),
        width:responsiveWidth(17.2),
        backgroundColor:"white",
        marginTop:responsiveHeight(2),
        borderRadius:responsiveWidth(1),
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"rgba(138, 158, 197, 0.97)",
        marginLeft:responsiveWidth(1)

    },
    modadlbox:{
      height:responsiveHeight(10),
      width:responsiveWidth(90),
      backgroundColor:"white",
      marginTop:responsiveHeight(2),
      borderRadius:responsiveWidth(1) ,
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"row",
    },
    Viewblackborder: {
        height: responsiveHeight(12),
        width: responsiveWidth(100),
        backgroundColor: "rgba(37, 37, 37, 1)",
      },
      Viewblackborder2: {
        height: responsiveHeight(27),
        width: responsiveWidth(96),
        backgroundColor: "rgba(37, 37, 37, 1)",
        marginTop:responsiveHeight(3),
        marginLeft:responsiveWidth(2)
      },
      borderred: {
        height: responsiveHeight(5),
        width: responsiveWidth(50),
        backgroundColor: "rgba(187, 22, 32, 1)",
        marginTop: responsiveHeight(3),
      },
      textcasino: {
        fontSize: responsiveFontSize(5),
        fontWeight: "bold",
        color: "white",
        marginLeft: responsiveWidth(28),
        marginTop: responsiveHeight(-6.5),
      },
      cupsty: {
        height: responsiveHeight(8),
        width: responsiveWidth(15),
        marginTop: responsiveWidth(-15),
        marginLeft: responsiveWidth(5),
        borderRadius:responsiveWidth(1)
      },
      cupsty2: {
        height: responsiveHeight(8),
        width: responsiveWidth(15),
        marginTop: responsiveWidth(-13),
        marginLeft: responsiveWidth(3),
        borderRadius:responsiveWidth(1)
      },
      textcasino2: {
        fontSize: responsiveFontSize(4),
        fontWeight: "bold",
        color: "white",
        marginLeft: responsiveWidth(25),
        marginTop: responsiveHeight(-5.5),
      },
      Default:{
        height:responsiveHeight(5),
        width:responsiveWidth(40),
        backgroundColor:"rgba(214, 27, 94, 1)",
        marginTop:responsiveHeight(2),
        flexDirection:"row"
    
      },
      Default2:{
        height:responsiveHeight(5),
        width:responsiveWidth(96),
        backgroundColor:"rgba(214, 27, 94, 1)",
        justifyContent:"center",
        alignItems:"center"
    
      },
      Defaulttext:{
        color:"white",
        fontWeight:"bold",
        margin:responsiveHeight(1)
    },
    Defaulttext2:{
        color:"white",
        fontWeight:"bold",
        margin:responsiveHeight(1.5),
        marginTop:responsiveHeight(2)
    },
    Defaulttext3:{
        color:"white",
        fontWeight:"bold",
        margin:responsiveHeight(1.5),
        marginLeft:responsiveWidth(15),
        marginTop:responsiveHeight(-1)
    },
    Defaulttext4:{
        color:"white",
        fontWeight:"bold",
        marginLeft:responsiveWidth(5),
        marginTop:responsiveHeight(1)
    },
    Defaulttext5:{
        color:"white",
        fontWeight:"bold",
        marginLeft:responsiveWidth(10),
        marginTop:responsiveHeight(1)
    },
    Defaulttext6:{
        color:"white",
        fontWeight:"bold",
        marginLeft:responsiveWidth(14),
        marginTop:responsiveHeight(1)
    },
    Deletebtn:{
        height:responsiveHeight(5),
        width:responsiveWidth(10),
        backgroundColor:"rgba(237, 59, 59, 1)",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:responsiveWidth(46),
        borderBottomLeftRadius:responsiveWidth(6)
    },
    bankname:{
        height:responsiveHeight(6),
        width:responsiveWidth(96),
        borderWidth:1,
        borderColor:"gray",
        margin:responsiveHeight(1),
        marginTop:responsiveHeight(0.2),
        borderRadius:responsiveWidth(2),
        paddingLeft:responsiveWidth(5)
    }



        












})
export default style