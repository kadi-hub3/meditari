import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import meditationImages from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from "@expo/vector-icons";
import Button from '@/components/CustomButton';

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondsRemaining, setSecondsRemaining] = useState(10)
  const [isMeditating, setMeditating] = useState(false);
  // const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(()=> {
    let timerId: NodeJS.Timeout

    if (secondsRemaining === 10) {
      setMeditating(false)
      return;
    }

    if(isMeditating) {
      timerId = setTimeout(()=> {
        setSecondsRemaining(secondsRemaining-1)
      }, 1000)
    }

    return () => {
      clearTimeout(timerId)
    }

  }, [secondsRemaining, isMeditating])
  return (
    <View className='flex-1'>
      <ImageBackground 
        source={meditationImages[Number(id)-1]}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['transparent','rgba(0,0,0,0.8)']}>
            <Pressable
              onPress={() => router.back()}
              className="absolute top-16 left-6 z-10"
            >
                <AntDesign name="leftcircleo" size={50} color="white" />
            </Pressable>
            <View className='flex-1 justify-center'>
              <View className='mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center'>
                <Text className='text-4xl text-green-800 font-rmono'>
                  00:{secondsRemaining}
                </Text>
              </View> 
            </View>
            <View className='mb-5'>
              <Button title='Adjust Duration' onPress={()=>console.log('tap')} />
              <Button title={isMeditating? 'Stop' : 'Start Meditation'} onPress={()=>console.log('tap')} />
            </View>
        </AppGradient>
      </ImageBackground>
    </View>
  )
}

export default Meditate