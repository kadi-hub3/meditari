import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmations'
import { StatusBar } from 'expo-status-bar'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text className='text-gray-200 mb-3 font-bold text-3xl'>
                    Reprogram your belief system with affirmations
                </Text>
                <View>
                    {AFFIRMATION_GALLERY.map((g)=> (
                        <GuidedAffirmationsGallery 
                            key={g.title}
                            title={g.title}
                            previews={g.data}
                        />
                    ))}
                </View>
             </ScrollView>
        </AppGradient>
        <StatusBar style="light" />
    </View>
  )
}

export default Affirmations