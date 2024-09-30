import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import { GalleryPreviewData } from '@/constants/models/AffirmationCategory';
import { Link } from 'expo-router';

interface GuidedAffirmationsProps {
    title: string;
    previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({title, previews}: GuidedAffirmationsProps) => {
  return (
    <View className='my-5'>
        <View className='mb-2'>
            <Text className='text-white text-xl font-bold'>{title}</Text>
        </View>
        <View className='space-y-2'>
            <FlatList 
                data={previews}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item, index})=> (
                    <Link href={`/affirmations/${item.id}`}  asChild>
                        <Pressable>
                            <View className='h-32 w-28 rounded-md'>
                                <Image 
                                    source={item.image}
                                    resizeMode='cover'
                                    className='w-full h-full'
                                />
                            </View>
                        </Pressable>
                    </Link>
                )}
                horizontal
            />
        </View>
    </View>
  )
}

export default GuidedAffirmationsGallery