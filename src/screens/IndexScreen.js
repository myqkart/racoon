import React from 'react'
import { SafeAreaView, View } from 'react-native'
import MyNavbar from '../components/MyNavbar'

const IndexScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <MyNavbar />
    </SafeAreaView>
  )
}

export default IndexScreen