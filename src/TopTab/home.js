import { View, Text, FlatList, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import style from '../style/style';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Today from './Today';
import Tomorrow from './Tomarrow';
import Upcoming from './Upcoming';
import { Heightdim, WidthDim } from '../style/uttility';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Top = createMaterialTopTabNavigator();

export default function Home({ navigation }) {
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeColors, setActiveColors] = useState(['white', 'rgba(187, 22, 32, 1)', 'rgba(187, 22, 32, 1)']);

  const handleTabPress = (index) => {
    setActiveIndex(index);
    const newColors = activeColors.map((color, i) => i === index ? 'white' : 'rgba(187, 22, 32, 1)');
    setActiveColors(newColors);
    switch (index) {
      case 0:
        navigation.navigate('Today');
        break;
      case 1:
        navigation.navigate('Tomorrow');
        break;
      case 2:
        navigation.navigate('UpComing');
        break;
      default:
        break;
    }
  };

  const imageData = [
    {
      id: "01",
      image: require('../Assets/image/cricket-bat-ball.png')
    },
    {
      id: "02",
      image: require('../Assets/image/crowd.png')
    },
    {
      id: "03",
      image: require('../Assets/image/players.png')
    },
  ];

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
        <Image source={item.image} style={{height:responsiveHeight(25),width:responsiveWidth(100)}}/>
      </View>
    );
  };

  function HeaderComponent({ state, navigation }) {
    return (
      <View style={style.andartabview}>
        <Text style={style.inlinetext}>In-Play</Text>
        <TouchableOpacity 
          style={[style.Touchbaletab, { backgroundColor: state.index === 0 ? 'white' : 'rgba(187, 22, 32, 1)' }]}
          onPress={() => navigation.navigate('Today')}
        >
          <Text style={[style.andertext, { color: state.index === 0 ? 'black' : 'white' }]}>Today</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[style.Touchbaletab, { backgroundColor: state.index === 1 ? 'white' : 'rgba(187, 22, 32, 1)' }]}
          onPress={() => navigation.navigate('Tomorrow')}
        >
          <Text style={[style.andertext, { color: state.index === 1 ? 'black' : 'white' }]}>Tomorrow</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[style.Touchbaletab, { backgroundColor: state.index === 2 ? 'white' : 'rgba(187, 22, 32, 1)' }]}
          onPress={() => navigation.navigate('UpComing')}
        >
          <Text style={[style.andertext, { color: state.index === 2 ? 'black' : 'white' }]}>Upcoming</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
      <TextInput style={style.searchsty} placeholder='Enter your search' />
      <Image style={style.serachicon} source={require('../Assets/icon/serachicon.png')} />

      <View style={style.tabcontainer}>
        <Top.Navigator tabBar={(props) => <HeaderComponent {...props} />}
          screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: responsiveFontSize(2), fontWeight: "500", letterSpacing: 1 },
            tabBarStyle: { backgroundColor: "rgba(187, 22, 32, 1)" },
          }}>
          <Top.Screen name='Today' component={Today} />
          <Top.Screen name='Tomorrow' component={Tomorrow} />
          <Top.Screen name='UpComing' component={Upcoming} />
        </Top.Navigator>
      </View>
    </View>
  );
}
