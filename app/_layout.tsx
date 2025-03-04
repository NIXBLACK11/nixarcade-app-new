import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

export default function Layout() {
    const [fontsLoaded] = useFonts({
        'GeistMono': require('../assets/fonts/GeistMono.ttf'),
        'Anime': require('../assets/fonts/Anime.ttf'),
    });

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} />
        </GestureHandlerRootView>
    );
}
