import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Formik } from 'formik'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

import RegistrationSVG from '../../assets/images/misc/registration.svg';
import { email, match, minLength, required, validate } from '../services/validator.service';
import { signupFn } from './service';

const signupSchema = {
  fullName: [required], email: [required, email],
  password: [required, minLength(8)], confirmPass: [required, minLength(8), match('password')],
}

const initSignupValue = {
  fullName: '', email: '', password: '', confirmPass: '',
}

const Signup = ({navigation}) => {

  const [error, setError] = useState('');

  const onSubmit = (values) => {
    const res = signupFn(values);

    if (res.status === 200) {
      console.log('otp : ', res.data);
      navigation.navigate('Verification')
    } else {
      console.log('signup error: ', res.message);
      setError(res.message);
    }

  }

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <RegistrationSVG height={300} width={300} style={{transform: [{rotate: '-5deg'}]}} />
        </View>

        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, }}> Register</Text>

        <Formik initialValues={initSignupValue} onSubmit={onSubmit} validate={(values) => validate(values, signupSchema)} >
          {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
            <View>
              <View style={{position: 'relative'}}>
                <InputField label={'Full Name'}
                  value={values.fullName} onChangeText={handleChange('fullName')} onBlur={() => setFieldTouched('fullName')}
                  icon={
                    <Ionicons name="person-outline" size={20} color="#666" style={{marginRight: 5}}/>
                  }
                />
                {
                  errors?.fullName && touched?.fullName && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, signupSchema)?.fullName}</Text>
                }
              </View>
              <View style={{position: 'relative'}}>
                <InputField label={'Email ID'}
                  value={values.email} onChangeText={handleChange('email')} onBlur={() => setFieldTouched('email')}
                  icon={
                    <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
                  } keyboardType="email-address"
                />
                {
                  errors?.email && touched?.email && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, signupSchema)?.email}</Text>
                }
              </View>
              <View style={{position: 'relative'}}>
                <InputField label={'Password'}
                  value={values.password} onChangeText={handleChange('password')} onBlur={() => setFieldTouched('password')}
                  icon={
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
                  } inputType="password"
                />
                {
                  errors?.password && touched?.password && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, signupSchema)?.password}</Text>
                }
              </View>
              <View style={{position: 'relative'}}>
                <InputField label={'Confirm Password'}
                  value={values.confirmPass} onChangeText={handleChange('confirmPass')} onBlur={() => setFieldTouched('confirmPass')}
                  icon={
                    <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
                  } inputType="password"
                />
                {
                  errors?.confirmPass && touched?.confirmPass && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, signupSchema)?.confirmPass}</Text>
                }
              </View>
              <CustomButton label={'Register'} onPress={handleSubmit} />
            </View>
          )}
        </Formik>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#446cfa', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
