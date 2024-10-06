import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export const HomeScreen = ({navigation}) => {
  //   useEffect(() => {
  //     // fetchenglishlanguagebydefault()
  //     setTimeout(() => {
  //       handleSplashScreen();
  //     }, 2000);
  //   }, []);
  //   const handleSplashScreen = async () => {
  //     navigation.navigate('Form');
  //   };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 15, fontWeight: 700}}>Home Screen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Form')}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          borderRadius: 15,
          padding: 15,
          backgroundColor: 'black',
        }}>
        <Text style={{textAlign: 'center', color: 'white'}}>Go to Form</Text>
      </TouchableOpacity>
    </View>
  );
};
