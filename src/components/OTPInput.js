import React, { useRef, useState } from 'react'

import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable
  } from 'react-native';

  
  
  const OTPInput = ({ code, setCode, maximumLength }) => {
    const boxArray = new Array(maximumLength).fill(0);
    const inputRef = useRef();

    const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

    const handleOnPress = () => {
      setIsInputBoxFocused(true);
      inputRef.current.focus();
    };
   
    const handleOnBlur = () => {
      setIsInputBoxFocused(false);
    };
    
  const BoxDigit = ({index}) => {
    const digit = code?.[index] || '';
    const isCurrentValue = index === code?.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code?.length === maximumLength;
 
    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    return (
      <View style={{ 
        borderWidth: 2, borderRadius: 5, padding: 12, minWidth: 45, height: 55,
        ...(isInputBoxFocused && isValueFocused ? {
          borderColor: '#446cfa'
        } : {
          borderColor: '#e5e5e5',
        })
      }} key={index}>
        <Text style={{fontSize: 20, textAlign: 'center', color: '#446cfa'}}>{digit}</Text>
      </View>
    );
  };

  return (
    <View style={{
      flex: 1, top: 20,
      alignItems: "center",
      justifyContent: "center",}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}} >
        <Pressable style={{width: '80%', flexDirection: 'row', justifyContent: 'space-evenly'}}
          onPress={handleOnPress}
        >
        {boxArray.map((_e, index) => <BoxDigit index={index} />)}
        </Pressable>
        <TextInput style={{ 
          width: 300, borderColor: '#e5e5e5', borderWidth: 1, borderRadius: 5, padding: 15,
          position: 'absolute',
          opacity: 0
        }} 
          value={code}
          onChangeText={setCode}
          maxLength={maximumLength}
          onBlur={handleOnBlur}
          ref={inputRef}
        />
      </View>
    </View>
  )
}

export default OTPInput;