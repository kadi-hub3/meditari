import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import beachImage from '@/assets/meditation-images/beach.webp'
import {LinearGradient} from 'expo-linear-gradient'
import {StatusBar} from 'expo-status-bar'
import { useRouter } from 'expo-router'

import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/CustomButton'
const App = () => {
  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground 
      source={beachImage}
      resizeMode='cover'
      className='flex-1' >
        <LinearGradient 
          className='flex-1'
          colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}>
          <SafeAreaView className='flex-1 mx-5 my-10 justify-between'>
            <View>
              <Text className='text-center text-white font-bold text-4xl'>
                Spiritually Meditari
              </Text>
              <Text className='text-center text-white text-regular'>
                Connect to your highest self for permanent success
              </Text>
            </View>
            <View>
              <Button onPress={()=> router.push("/nature-meditate")} title='Get Started' />
            </View>


          </SafeAreaView>
          <StatusBar style='light' />

        </LinearGradient>

      </ImageBackground>
    </View>
  )
}

export default App