import React from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { GooglePayBtn, PaytmBtn, PhonepeBtn } from '../components/PaymentBtn'


const Create = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{
        justifyContent: 'center', alignItems: 'center',
      }}>

        <FlatList
            data={[<GooglePayBtn />, <PaytmBtn />, <PhonepeBtn />]}
            renderItem={({ item }) => (
                <TouchableOpacity style={{
                    borderWidth: 2, borderRadius: 10, borderColor: '#e5e5e5',
                    margin: 10
                }}>
                    {item}
                </TouchableOpacity>
            )}
            //Setting the number of column
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
        />

      </View>
    </SafeAreaView>
  )
}

export default Create