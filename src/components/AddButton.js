import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const AddButton = ({children, onPress, accessibilityState}) => {
  return (
    <TouchableOpacity
    style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
    }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: accessibilityState.selected ? '#446cfa' : 'gray'
        }}>{children}</View>
    </TouchableOpacity>
  )
}

export default AddButton