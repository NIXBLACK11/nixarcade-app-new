import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { companies } from "@/constants/Companies";

export const PartnersSection = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Proudly Partnered With</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {companies.map((company, index) => (
                    <PartnerCard
                        key={index}
                        logo={company.imageUrl}
                        name={company.name}
                        description={company.description}
                        link={company.link}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

interface PartnerCardProps {
    logo: any;
    name: string;
    description: string;
    link: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ logo, name, description, link }) => {
    return (
        <TouchableOpacity 
            style={styles.card} 
            onPress={() => Linking.openURL(link)}
        >
            <View style={styles.grainOverlay} />
            <View style={styles.logoContainer}>
                <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>
            <Text style={styles.partnerName}>{name}</Text>
            <Text style={styles.partnerDescription}>{description}</Text>
        </TouchableOpacity>
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
    grainOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "transparent",
        opacity: 0.2,
        zIndex: 1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
    },
    logoContainer: {
        height: 60,
        marginBottom: 20,
        justifyContent: "center",
        zIndex: 2,
    },
    logo: {
        height: 40,
        width: 120,
    },
    partnerName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        marginBottom: 10,
        zIndex: 2,
        fontFamily: "GeistMono",
    },
    partnerDescription: {
        fontSize: 14,
        color: "#AAAAAA",
        textAlign: "center",
        zIndex: 2,
        fontFamily: "GeistMono",
    },
});