import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { MEDITATION_DATA } from '@/constants/meditation-data'
import meditationImages from '@/constants/meditation-images'
import { StatusBar } from 'expo-status-bar'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const NatureMeditate = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
            <View className='mb-6'>
                <Text className='text-gray-200 mb-3 font-bold text-4xl'>
                    Welcome Kadi
                </Text>
                <Text className='text-indigo-100 mb-6  text-xl font-medium'>
                    Start your meditation practice today
                </Text>
            </View>
            <View>
                <FlatList
                    data={MEDITATION_DATA}
                    className='mb-20'
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item)=> item.id.toString()}
                    renderItem={({item})=> (
                        <Pressable
                            onPress={()=> router.push('/meditate')}
                            className='h-52 my-5 rounded-md overflow-hidden'
                        >
                            <ImageBackground  
                                source={meditationImages[item.id-1]}
                                resizeMode='cover'
                                className='flex-1 justify-center rounded-lg'
                            >
                                <LinearGradient colors={['transparent','rgba(0,0,0,0.8)']} className='flex-1 justify-center items-center'>
                                    <Text className='text-gray-100 text-3xl font-bold text-center'>
                                        {item.title}    
                                    </Text>   
                                </LinearGradient>

                            </ImageBackground>  
                        </Pressable>

                    )} />
            </View>
        </AppGradient>
        <StatusBar style='light' />
    </View>
  )
}

export default NatureMeditate