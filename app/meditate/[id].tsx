import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router';
import meditationImages from '@/constants/meditation-images';
import AppGradient from '@/components/AppGradient';
import { AntDesign } from "@expo/vector-icons";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [isMeditating, setMeditating] = useState(false);
  // const [audioSound, setSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);
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
        </AppGradient>
      </ImageBackground>
      <Text>Meditate</Text>
    </View>
  )
}

export default Meditate