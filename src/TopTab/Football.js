import { View, Text, FlatList, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import style from '../style/style';
import Today from './Today';
import Tomorrow from './Tomarrow';
import Upcoming from './Upcoming';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import FootballData from './FootballData';

const Top = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  const screenWidth = Dimensions.get('window').width;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / screenWidth);
    setActiveIndex(index);
  };

  const renderDot = (index) => {
    return (
      <View key={index} style={[style.imagedot, index === activeIndex ? { backgroundColor: 'rgba(187, 22, 32, 1)' } : null]}></View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ height: responsiveHeight(25), width: responsiveWidth(100) }} />
      </View>
    );
  };

  const HeaderComponent = ({ state, navigation }) => {
    return (
      <View style={style.andartabview}>
        <Text style={style.inlinetext}>In-Play</Text>
        {['FootballData', 'Tomorrow', 'Upcoming'].map((route, index) => (
          <TouchableOpacity 
            key={route}
            style={[style.Touchbaletab, { backgroundColor: state.index === index ? 'white' : 'rgba(187, 22, 32, 1)' }]}
            onPress={() => navigation.navigate(route)}
          >
            <Text style={[style.andertext, { color: state.index === index ? 'black' : 'white' }]}>
              {route}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const imageData = [
    { id: '01', image: require('../Assets/image/cricket-bat-ball.png') },
    { id: '02', image: require('../Assets/image/crowd.png') },
    { id: '03', image: require('../Assets/image/players.png') },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View>
        <FlatList
          data={imageData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          onScroll={handleScroll}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={style.renderdotstyle}>
        {imageData.map((dot, index) => renderDot(index))}
      </View>
      <View style={{ position: 'relative', justifyContent: 'center', alignItems: 'center' }}>
        <TextInput style={style.searchsty} placeholder='Enter your search' />
        <Image style={style.serachicon} source={require('../Assets/icon/serachicon.png')} />
      </View>
      <View style={style.tabcontainer}>
        <Top.Navigator tabBar={(props) => <HeaderComponent {...props} />}
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: responsiveFontSize(2), fontWeight: '500', letterSpacing: 1 },
            tabBarStyle: { backgroundColor: 'rgba(187, 22, 32, 1)' },
          }}>
          <Top.Screen name='FootballData' component={FootballData}options={{title:"Today"}} />
          <Top.Screen name='Tomorrow' component={Tomorrow} />
          <Top.Screen name='Upcoming' component={Upcoming} />
        </Top.Navigator>
      </View>
    </View>
  );
}
