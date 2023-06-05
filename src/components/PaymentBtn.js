import React from 'react';
import { Image, View } from 'react-native';

const GooglePayBtn = () => {
    return (
        <View style={{ padding: 20, borderRadius: 4 }}>
          <Image
            source={require('../../assets/images/google-pay.png')}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
    );
  };


  const PaytmBtn = () => {
    return (
        <View style={{ padding: 20, borderRadius: 4 }}>
          <Image
            source={require('../../assets/images/paytm.png')}
            style={{ width: 100, height: 100 }}
            resizeMode="contain"
          />
        </View>
    );
  };


const PhonepeBtn = () => {
  return (
      <View style={{ padding: 20, borderRadius: 4 }}>
        <Image
          source={require('../../assets/images/phonepe.png')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>
  );
};
  
  export {
    GooglePayBtn, PaytmBtn, PhonepeBtn
  };