import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import { Formik } from 'formik'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../assets/images/misc/login.svg';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';

import { AuthContext } from '../context/AuthContext';

import { email, minLength, required, validate } from '../services/validator.service';
import { loginFn } from './service';

const loginSchema = {email: [required, email], password: [required, minLength(8)]};

const Login = ({navigation}) => {

  const { setIsLoggedIn } = useContext(AuthContext);
  const [error, setError] = useState('');

  const onSubmit = (values) => {
    const res = loginFn(values)

    if (res.status === 200) {
      setIsLoggedIn(true);
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
        <Text style={{ fontSize: 28, fontWeight: '500', color: '#333', marginBottom: 30, }}> Login</Text>

        <Formik initialValues={{ email: '',  password: ''  }} onSubmit={onSubmit} validate={(values) => validate(values, loginSchema)} >
        {({ values, handleChange, errors, setFieldTouched, touched, handleSubmit }) => (
          <View>
            <View style={{position: 'relative'}} >
              <InputField label={'Email ID'}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                icon={
                  <MaterialIcons name="alternate-email" size={20} color="#666" style={{marginRight: 5}}/>
                } keyboardType="email-address"
              />
              {
                errors?.email && touched?.email && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, loginSchema)?.email}</Text>
              }
            </View>
            <View style={{position: 'relative'}} >
              <InputField label={'Password'}
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={() => setFieldTouched('password')}
                icon={
                  <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{marginRight: 5}}/>
                } inputType="password" fieldButtonLabel={"Forgot?"} fieldButtonFunction={() => navigation.navigate('ForgetPass')}
              />
              {
                errors?.password && touched?.password && <Text style={{position: 'absolute', top: 40, color: 'red'}}>{validate(values, loginSchema)?.password}</Text>
              }
            </View>
            <CustomButton label={"Login"} onPress={handleSubmit} />
          </View>
        )}
      </Formik>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30,}}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
            <Text style={{color: '#446cfa', fontWeight: '700'}}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
