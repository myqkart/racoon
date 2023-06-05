import React from 'react'

import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
  
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../assets/images/misc/login.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

const ForgetPass = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{alignItems: 'center'}}>
              <LoginSVG height={300} width={300} style={{transform: [{rotate: '-5deg'}]}}/>
            </View>
            <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, }}> Forget Password</Text>
            <InputField label={'Email ID'}
              icon={
                <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
              } keyboardType="email-address"
            />
            <CustomButton label={"Send reset link"} onPress={() => {}} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30,}}>
              <Text>Remember the password?</Text>
              <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={{color: '#446cfa', fontWeight: '700'}}> Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
}

export default ForgetPass