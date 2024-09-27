import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    textStyles?: string;
    containerStyles?: string;
}
const Button = ({onPress, title, textStyles='', containerStyles=''}:CustomButtonProps) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    className={'bg-white rounded-xl min-h-[62px] justify-center'}
    onPress={onPress}>
        <Text className={`font-semibold text-lg text-center ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button