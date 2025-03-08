import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { gameImages, games } from "@/constants/Games";
import { GrainOverlay } from "./GrainOverlay";

export const FeaturedGames = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Featured Games</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        logo={gameImages[game.logo as keyof typeof gameImages]}
                        title={game.title}
                        description={game.description}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

interface GameCardProps {
    logo: any;
    title: string;
    description: string;
}

const GameCard: React.FC<GameCardProps> = ({ logo, title, description }) => {
    return (
        <View style={styles.card}>
            <GrainOverlay />
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.gameTitle}>{title}</Text>
            <Text style={styles.gameDescription}>{description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
        width: "100%",
        padding: 20,
    },
    heading: {
        fontSize: 36,
        color: "white",
        textAlign: "center",
        marginBottom: 25,
        fontFamily: "Anime",
        backgroundColor: "#000000",
        paddingVertical: 10,
    },
    scrollContent: {
        paddingBottom: 10,
        paddingHorizontal: 5,
    },
    card: {
        backgroundColor: "#121212",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        width: 280,
        minHeight: 200,
        justifyContent: "center",
        marginRight: 15,
        position: "relative",
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "#333333",
    },
    logoContainer: {
        height: 120,
        width: "100%",
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
    },
    logo: {
        height: "100%",
        width: "100%",
        borderRadius: 8,
    },
    gameTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        zIndex: 2,
        fontFamily: "GeistMono",
    },
    gameDescription: {
        fontSize: 14,
        color: "#AAAAAA",
        textAlign: "center",
        zIndex: 2,
        fontFamily: "GeistMono",
    },
});