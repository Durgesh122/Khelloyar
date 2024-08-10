import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,FlatList ,Dimensions, ScrollView} from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


export default function All() {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenWidth = Dimensions.get("window").width;
  const imageData = [
    {
      id: "01",
      image: require('../Assets/image/Photo.png')
    },
    {
      id: "02",
      image: require('../Assets/image/cricket-bat-ball.png')
    },
    {
      id: "03",
      image: require('../Assets/image/crowd.png')
    },
    {
      id: "04",
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
      <View key={index} style={[styles.imagedot, index === activeIndex ? { backgroundColor: 'rgba(187, 22, 32, 1)' } : null]}></View>
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{height:responsiveHeight(25),width:responsiveWidth(100)}}/>
      </View>
    );
  };

  return (
    <ScrollView>
    <View style={styles.Container}>
     <View>
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
      </View>
      <View style={styles.renderdotstyle}>
        {imageData.map((dot, index) => renderDot(index))}
      </View>
      <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Background.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image3.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image2.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>
     <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Aviatorimg.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image5.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image6.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>
     <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Background.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image3.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image2.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>
     <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Aviatorimg.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image5.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image6.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>
     <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Background.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image3.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image2.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>
     <View style={styles.Direction}>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
        <Image source={require('../Assets/image/Aviatorimg.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
       <View style={styles.borderboxes}>
       <Image source={require('../Assets/image/Image5.png')}style={styles.Imagees}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>
      <View style={styles.borderboxes}>
      <Image source={require('../Assets/image/Image6.png')}style={styles.Imagees}/>
     </View>
     </TouchableOpacity>
     </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Direction:{
     flexDirection:"row",
  },
  texttiltelActive: {
    fontSize: responsiveFontSize(1.5),
    color: "black",
    fontWeight: "bold",
    margin: responsiveWidth(2.5),
  },
  texttiltelInactive: {
    fontSize: responsiveFontSize(1.5),
    color: "red",
    fontWeight: "bold",
    margin: responsiveWidth(2.5),
  },
  renderdotstyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: responsiveHeight(-3)
},
imagedot: {
  backgroundColor: "white",
  height: responsiveWidth(3),
  width: responsiveWidth(3),
  borderRadius: responsiveWidth(1.5),
  marginHorizontal: responsiveWidth(2)
},
borderboxes:{
  marginLeft:responsiveHeight(1),
  height:responsiveHeight(20),
  width:responsiveWidth(30.5),
  marginTop:responsiveHeight(2.5),
  borderRadius:responsiveWidth(2)
},
Imagees:{
  height:responsiveHeight(20),
  width:responsiveWidth(30),
  borderRadius:5
}
});
