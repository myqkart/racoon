import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';

import LoginSVG from '../../assets/images/misc/login.svg';

import CustomButton from '../components/CustomButton';
import OTPInput from '../components/OTPInput';

import { verifyOTP } from './service';

const Verification = ({navigation}) => {

  const [error, setError] = useState('');

    const [otpCode, setOTPCode] = useState("");
    const [otpError, setOTPError] = useState("");
    const maximumCodeLength = 4;

  const onSubmit = () => {
    if(otpCode.length !== 4) {
        setOTPError('OTP is required.');
        return;
    }
    const res = verifyOTP(otpCode)

    if (res.status === 200) {
      navigation.navigate('Verification');
    } else {
      console.log('login error: ', res.message);
      setError(res.message);
    }
  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <LoginSVG height={300} width={300} style={{transform: [{rotate: '-5deg'}]}}/>
        </View>
        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, }}> OTP Verification</Text>

        <OTPInput 
            code={otpCode}
            setCode={setOTPCode}
            maximumLength={maximumCodeLength}
        />

        { otpError && <Text style={{top: 90, textAlign: 'center', color: 'red'}} >{otpError}</Text> }
        <View style={{top: 120}}>
            <CustomButton label={"Login"} onPress={onSubmit} />
        </View>

      </View>
    </SafeAreaView>
  );
};

export default Verification;