import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, StatusBar, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';
import { RelativePathString, useRouter } from 'expo-router';
import { OpenLink } from '@/components/OpenLink';
import { PartnersSection } from '@/components/ui/PartnersSection';
import { PlatformStatistics } from '@/components/ui/PlatformStatistics';
import { FeaturedGames } from '@/components/ui/FeaturedGames';

const { width } = Dimensions.get('window');

export default function App() {
    const router = useRouter();

    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView style={styles.container}>
                {/* Hero Section */}
                <ImageBackground
                    source={require("../assets/images/bg.jpg")} // Replace with your actual image path
                    style={styles.heroContainer}
                    resizeMode="cover"
                >
                    {/* Gradient Overlay */}
                    <View style={styles.overlay} />

                    <View style={styles.heroContent}>
                        <Text style={styles.heroTitle}>Welcome to</Text>
                        <Text style={styles.logoText}>NixArcade</Text>
                        <Text style={styles.heroSubtitle}>
                            Your Hub for Classic Board Games, Anytime, Anywhere.
                        </Text>
                        <TouchableOpacity
                            style={[styles.ctaButton, { backgroundColor: "#000" }]}
                            onPress={() => {
                                router.push("play" as RelativePathString);
                            }}
                        >
                            <Ionicons name="game-controller" size={20} color="#fff" />
                            <Text style={styles.ctaButtonText}>Play Games</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.heroImageContainer}>
                        <View style={[styles.mockupFrame, { borderColor: "#fff" }]}>
                            <View style={styles.mockupInner} />
                        </View>
                    </View>
                </ImageBackground>

                <PlatformStatistics />
                <PartnersSection />
                <FeaturedGames />

                {/* Footer */}
                <View style={[styles.footer, { backgroundColor: colors.secondary }]}>
                    <Text style={styles.footerLogo}>NixArcade</Text>
                    <Text style={styles.footerText}>© 2025 NixArcade. All rights reserved.</Text>
                    <View style={styles.socialContainer}>
                        <Ionicons
                            name="logo-twitter"
                            size={24}
                            color="#fff"
                            style={styles.socialIcon}
                            onPress={() => OpenLink("https://twitter.com/NIXARCADE")}
                        />
                        <Ionicons
                            name="paper-plane" // Telegram Icon
                            size={24}
                            color="#fff"
                            style={styles.socialIcon}
                            onPress={() => OpenLink("https://t.me/NIXARCADE")}
                        />
                        <Ionicons
                            name="globe-outline" // Website Icon
                            size={24}
                            color="#fff"
                            style={styles.socialIcon}
                            onPress={() => OpenLink("https://nixarcade.vercel.app/")}
                        />
                    </View>
                </View>
            </ScrollView>
        </>
    );
}

// Feature Item Component
interface FeatureItemProps {
    icon: keyof typeof Ionicons.glyphMap; // Ensures only valid Ionicons names
    title: string;
    description: string;
    color: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, color }) => {
    return (
        <View style={styles.featureItem}>
            <View style={[styles.featureIconContainer, { backgroundColor: color + '20' }]}>
                <Ionicons name={icon} size={28} color={color} />
            </View>
            <Text style={[styles.featureTitle, { color }]}>{title}</Text>
            <Text style={styles.featureDescription}>{description}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    heroContainer: {
        minHeight: 550,
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, // Covers the entire ImageBackground
        backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark transparent gradient effect
    },
    heroContent: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: 38,
        color: '#fff',
        marginBottom: 20,
        fontFamily: 'Anime'
    },
    heroTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: 'GeistMono'
    },
    heroSubtitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        opacity: 0.9,
        fontFamily: 'GeistMono'
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 30,
        minWidth: 180,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'GeistMono'
    },
    heroImageContainer: {
        alignItems: 'center',
        marginTop: 40,
    },
    mockupFrame: {
        width: 220,
        height: 440,
        borderWidth: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mockupInner: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        borderRadius: 20,
    },

    featuresContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    featureItem: {
        width: width > 600 ? '30%' : '100%',
        marginBottom: 30,
        alignItems: 'center',
    },
    featureIconContainer: {
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    featureTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        fontFamily: 'GeistMono'
    },
    featureDescription: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        paddingHorizontal: 10,
        fontFamily: 'GeistMono'
    },
    ctaContainer: {
        padding: 20,
    },
    ctaGradient: {
        borderRadius: 30,
        padding: 30,
        alignItems: 'center',
    },
    ctaTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 15,
        fontFamily: 'GeistMono'
    },
    ctaSubtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 25,
        opacity: 0.9,
        fontFamily: 'GeistMono'
    },
    ctaButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    ctaButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        margin: 10,
        minWidth: 150,
    },
    ctaButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 8,
        fontFamily: 'GeistMono'
    },
    footer: {
        padding: 30,
        alignItems: 'center',
    },
    footerLogo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        fontFamily: 'GeistMono'
    },
    footerText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
        marginBottom: 20,
        fontFamily: 'GeistMono'
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});