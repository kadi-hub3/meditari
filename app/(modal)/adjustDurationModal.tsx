import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { TimerContext } from '@/context/TimerContext'
import AppGradient from '@/components/AppGradient'
import { router } from 'expo-router'
import { AntDesign } from "@expo/vector-icons";
import Button from '@/components/CustomButton'

const AdjustDurationModal = () => {
    const {setDuration} = useContext(TimerContext)

    const handlePress = (duration: number) => {
        setDuration(duration)
        router.back()
    }

  return (
    <View className='flex-1 relative'>
        <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
            <Pressable
                onPress={()=>router.back()}
                className='absolure top-8 left-6 z-10'
            >
                <AntDesign name="leftcircleo" size={50} color="white" />

            </Pressable>
            <View className='justify-center h-4/5'>
                <Text className='text-center font-bold text-3xl text-white'>
                    Adjust your meditation duration
                </Text>
                <View>
                        <Button
                            title="10 seconds"
                            onPress={() => handlePress(10)}
                            containerStyles="mb-5"
                        />
                        <Button
                            title="5 minutes"
                            onPress={() => handlePress(5 * 60)}
                            containerStyles="mb-5"
                        />
                        <Button
                            title="10 minutes"
                            onPress={() => handlePress(10 * 60)}
                            containerStyles="mb-5"
                        />
                        <Button
                            title="15 minutes"
                            onPress={() => handlePress(15 * 60)}
                            containerStyles="mb-5"
                        />
                </View>
            </View>
        </AppGradient>
      
    </View>
  )
}

export default AdjustDurationModal