import { View, Text } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmations'

const Affirmations = () => {
  return (
    <View className='flex-1'>
        <AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
            <View>
                <Text className='text-gray-200 mb-3 font-bold text-3xl'>
                    Reprogram your belief system with affirmations
                </Text>
            </View>
            <View>
                {AFFIRMATION_GALLERY.map((g)=> (
                    <GuidedAffirmationsGallery 
                        key={g.title}
                        title={g.title}
                        previews={g.data}
                    />
                ))}

            </View>

        </AppGradient>

    </View>
  )
}

export default Affirmations