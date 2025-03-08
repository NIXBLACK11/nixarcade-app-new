import React from "react";
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { companies } from "@/constants/Companies";
import { GrainOverlay } from "./GrainOverlay";

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
            <GrainOverlay />
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