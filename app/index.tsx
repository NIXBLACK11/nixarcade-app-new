import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, StatusBar, Dimensions, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '@/constants/Colors';
import { RelativePathString, useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

export default function App() {
    const featuredGames = [
        { id: 1, title: 'Cyber Quest', genre: 'Adventure', rating: 4.8 },
        { id: 2, title: 'Space Warriors', genre: 'Action', rating: 4.9 },
        { id: 3, title: 'Pixel Racer', genre: 'Racing', rating: 4.7 }
    ];
    const router = useRouter();

    return (
        <>
            <StatusBar barStyle="light-content" />
            <ScrollView style={styles.container}>
                {/* Hero Section */}
                <LinearGradient
                    colors={[colors.secondary, colors.primary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.heroContainer}
                >
                    <View style={styles.heroContent}>
                        <Text style={styles.logoText}>NixArcade</Text>
                        <Text style={styles.heroTitle}>Gaming Reimagined</Text>
                        <Text style={styles.heroSubtitle}>
                            Experience the next level of mobile gaming
                        </Text>
                        <TouchableOpacity
                            style={[styles.button, { backgroundColor: colors.accent }]}
                        >
                            <Button title="Go to Play" onPress={() => router.push('play' as RelativePathString)} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.heroImageContainer}>
                        <View style={[styles.mockupFrame, { borderColor: colors.primary }]}>
                            <View style={styles.mockupInner} />
                        </View>
                    </View>
                </LinearGradient>

                {/* Features Section */}
                <View style={styles.sectionContainer}>
                    <Text style={[styles.sectionTitle, { color: colors.secondary }]}>
                        Why Choose NixArcade?
                    </Text>

                    <View style={styles.featuresContainer}>
                        <FeatureItem
                            icon="game-controller"
                            title="Premium Games"
                            description="Access hundreds of high-quality games optimized for mobile"
                            color={colors.primary}
                        />
                        <FeatureItem
                            icon="trophy"
                            title="Competitive"
                            description="Join tournaments and compete with players worldwide"
                            color={colors.secondary}
                        />
                        <FeatureItem
                            icon="cloud-download"
                            title="Cloud Sync"
                            description="Your progress syncs across all your devices automatically"
                            color={colors.accent}
                        />
                    </View>
                </View>

                {/* Games Showcase */}
                <View style={[styles.sectionContainer, { backgroundColor: colors.neutral + '20' }]}>
                    <Text style={[styles.sectionTitle, { color: colors.secondary }]}>
                        Featured Games
                    </Text>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.gamesScrollContainer}
                    >
                        {featuredGames.map((game) => (
                            <View key={game.id} style={[styles.gameCard, { borderColor: colors.primary }]}>
                                <View style={[styles.gameImagePlaceholder, { backgroundColor: colors.secondary + '50' }]}>
                                    <Ionicons name="game-controller" size={40} color={colors.primary} />
                                </View>
                                <Text style={[styles.gameTitle, { color: colors.secondary }]}>{game.title}</Text>
                                <Text style={styles.gameGenre}>{game.genre}</Text>
                                <View style={styles.ratingContainer}>
                                    <Ionicons name="star" size={16} color="#FFD700" />
                                    <Text style={styles.ratingText}>{game.rating}</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>

                {/* CTA Section */}
                <View style={styles.ctaContainer}>
                    <LinearGradient
                        colors={[colors.primary, colors.secondary]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.ctaGradient}
                    >
                        <Text style={styles.ctaTitle}>Ready to Play?</Text>
                        <Text style={styles.ctaSubtitle}>
                            Download NixArcade now and join thousands of gamers!
                        </Text>
                        <View style={styles.ctaButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.ctaButton, { backgroundColor: '#000' }]}
                            >
                                <Ionicons name="logo-apple" size={20} color="#fff" />
                                <Text style={styles.ctaButtonText}>App Store</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.ctaButton, { backgroundColor: '#000' }]}
                            >
                                <Ionicons name="logo-google-playstore" size={20} color="#fff" />
                                <Text style={styles.ctaButtonText}>Google Play</Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>

                {/* Footer */}
                <View style={[styles.footer, { backgroundColor: colors.secondary }]}>
                    <Text style={styles.footerLogo}>NixArcade</Text>
                    <Text style={styles.footerText}>© 2025 NixArcade. All rights reserved.</Text>
                    <View style={styles.socialContainer}>
                        <Ionicons name="logo-twitter" size={24} color="#fff" style={styles.socialIcon} />
                        <Ionicons name="logo-instagram" size={24} color="#fff" style={styles.socialIcon} />
                        <Ionicons name="logo-discord" size={24} color="#fff" style={styles.socialIcon} />
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
    heroContent: {
        alignItems: 'center',
    },
    logoText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },
    heroTitle: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    heroSubtitle: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 30,
        opacity: 0.9,
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
    sectionContainer: {
        padding: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
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
    },
    featureDescription: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
        paddingHorizontal: 10,
    },
    gamesScrollContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    gameCard: {
        width: 180,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 15,
        marginRight: 15,
        borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    gameImagePlaceholder: {
        width: '100%',
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gameTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    gameGenre: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
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
    },
    ctaSubtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 25,
        opacity: 0.9,
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
    },
    footerText: {
        fontSize: 14,
        color: '#fff',
        opacity: 0.8,
        marginBottom: 20,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});