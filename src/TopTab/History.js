import { View, Text, Image, TouchableOpacity, ScrollView, Modal, TouchableWithoutFeedback, TextInput } from 'react-native'
import React, { useState } from 'react'
import style from '../style/style'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions';
import { SelectList } from 'react-native-dropdown-select-list';
import DateTimePicker from 'react-native-modal-datetime-picker';


export default function History({ navigation }) {
    const [selectbank, setSelectBank] = useState("")
    const [selectbank1, setSelectBank1] = useState("")
    const formattedDate = new Date().toISOString().slice(0, 10);
    const [modalVisible, setModalVisible] = useState(false);
    const formattedTime = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' });

    const [datetimepickerVisible, setDatetimePickerVisible] = useState(false);
    const [currentPicker, setCurrentPicker] = useState(null);
    const [fromDate, setFromDate] = useState('Date');
    const [toDate, setToDate] = useState('Date');
    const data = [
        { key: "0", value: "All" },
        { key: "1", value: "Deposit" },
        { key: "2", value: "Withdrawal" },
    ];
    const data2 = [
        { key: "0", value: "All" },
        { key: "1", value: "Processed" },
        { key: "2", value: "Rejected" },
        { key: "3", value: "Failed" },
        { key: "4", value: "Started" },
        { key: "5", value: "Pending" },
        { key: "6", value: "Approved" },
        { key: "7", value: "Reverted" },
        { key: "8", value: "Time out" },
        { key: "9", value: "initiated" },



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
    const handleaddbank = () => {
        navigation.navigate("AddBank")
    }
    const handleviewbank = () => {
        navigation.navigate("BankView")
    }
    const handleHistory = () => {
        navigation.navigate("History")
    }
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
                <Text style={style.textcasino}>History</Text>
                <Image source={require("../Assets/image/Clock.png")} style={style.cupsty2} />
            </View>
            <View style={style.viewdir}>
                <TouchableOpacity style={style.Profilebackbtn} onPress={handleBackBtn}>
                    <Image source={require('../Assets/icon/backarrow.png')} />
                    <Text style={style.textstyleprofilebackbtn}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.Profilebackbtn15} >
                    <Text style={{ color: "black", fontWeight: "400", fontSize: responsiveFontSize(1.5) }}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.Profilebackbtn14} >
                    <Text style={style.textstyleprofilebackbtn}>Submit</Text>
                </TouchableOpacity>

            </View>
            <View style={style.viewdir}>
                <View>
                    <Text style={style.textmybets}>Payment mode</Text>
                    <View style={{ width: responsiveWidth(47), marginLeft: responsiveWidth(2) }}>
                        <SelectList
                            setSelected={setSelectBank}
                            data={data}
                            defaultOption={{ key: "0", value: "All" }}
                        />
                    </View>
                </View>
                <View>
                    <Text style={style.textmybets}>Type</Text>
                    <View style={{ width: responsiveWidth(47), marginLeft: responsiveWidth(2) }}>
                        <SelectList
                            setSelected={setSelectBank1}
                            data={data2}
                            defaultOption={{ key: "0", value: "All" }}
                        />
                    </View>
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
                <DateTimePicker
                    isVisible={datetimepickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />


            </View>
            <ScrollView>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>
                <View style={style.EventData2}>
                    <View style={style.viewdir}>
                        <Text style={style.eventtext}>Reference no</Text>
                        <View>
                            <Text style={style.eventtext2}>17452589635412514782</Text>
                        </View>
                    </View>

                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Date</Text>
                        <Text style={style.eventtext10}>     24-May-2024 4:52 PM</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Type</Text>
                        <Text style={style.eventtext10}>    DEPOSIT</Text>
                        <Text style={style.eventtext} >     Description</Text>
                        <Text style={style.eventtext2}>     DEPOSIT</Text>
                    </View>
                    <View style={style.eventView}>
                        <Text style={style.eventtext}>Amount</Text>
                        <Text style={style.eventtext10}>400.00</Text>
                        <Text style={style.eventtext} >       Status</Text>
                        <Text style={style.eventtext2}>               INITIATED</Text>
                    </View>

                </View>


            </ScrollView>


        </View>
    )
}