import { Slot, Stack } from "expo-router";

export default function RoootLayout () {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' options={{headerShown: false}}/>
            <Stack.Screen name='index' options={{headerShown: false}}/>
            <Stack.Screen name='meditate' options={{headerShown: false}}/>
        </Stack>
    )
}