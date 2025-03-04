import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function PlayLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen 
                name="index" 
                options={{ 
                    title: "Games", 
                    tabBarIcon: ({ color, size }) => <Ionicons name="game-controller" size={size} color={color} /> 
                }} 
            />
            <Tabs.Screen 
                name="blinks" 
                options={{ 
                    title: "Blinks", 
                    tabBarIcon: ({ color, size }) => <Ionicons name="flash" size={size} color={color} /> 
                }} 
            />
        </Tabs>
    );
}
