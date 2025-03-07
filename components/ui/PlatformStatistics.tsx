import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { GrainOverlay } from './GrainOverlay';

export const PlatformStatistics = () => {
    const statistics = [
        {
            id: 1,
            title: 'Total Users',
            mainValue: '150',
            subValue: 'Active: 25',
            trend: '+1.3% from last month',
            trendUp: true,
            icon: 'person' as keyof typeof Ionicons.glyphMap,
            iconColor: '#9C27B0'
        },
        {
            id: 2,
            title: 'Total Games Played',
            mainValue: '260',
            subValue: 'Last week: 7',
            trend: '',
            trendUp: null,
            icon: 'game-controller' as keyof typeof Ionicons.glyphMap,
            iconColor: '#9C27B0'
        },
        {
            id: 3,
            title: 'Average Games per User',
            mainValue: '2',
            subValue: '',
            trend: '',
            trendUp: null,
            icon: 'stats-chart' as keyof typeof Ionicons.glyphMap,
            iconColor: '#9C27B0'
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Platform Statistics</Text>

            <View style={styles.statsContainer}>
                {statistics.map(stat => (
                    <TouchableOpacity style={styles.card}>
                    <View/>
                        <GrainOverlay />
                        <View style={styles.titleRow}>
                            <Text style={styles.statTitle}>{stat.title}</Text>
                            <Ionicons name={stat.icon} size={20} color={stat.iconColor} />
                        </View>

                        <Text style={styles.mainValue}>{stat.mainValue}</Text>

                        {
                        stat.subValue ? (
                            <Text style={styles.subValue}>{stat.subValue}</Text>
                        ) : null
                    }

                        {
                        stat.trend ? (
                            <Text style={[
                                styles.trendValue,
                                { color: stat.trendUp ? '#4CAF50' : '#F44336' }
                            ]}>
                                {stat.trend}
                            </Text>
                        ) : null
                    }
                    </TouchableOpacity>
                ))}
        </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        width: '100%',
    },
    heading: {
        fontSize: 34,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Anime',
        marginBottom: 30
    },
    statsContainer: {
        backgroundColor: 'trasnparent',
        flexDirection: 'column',
        width: "100%",
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: "#212121",
        borderRadius: 10,
        borderColor: 'white',
        padding: 20,
        alignItems: "center",
        width: "90%", // Ensures three cards per row
        minHeight: 200,
        justifyContent: "center",
        marginBottom: 20,
        position: "relative", // Needed for grain overlay
        overflow: "hidden",
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    statTitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
        fontFamily: 'GeistMono',
    },
    mainValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        fontFamily: 'GeistMono',
    },
    subValue: {
        fontSize: 14,
        color: '#AAAAAA',
        marginBottom: 6,
        fontFamily: 'GeistMono',
    },
    trendValue: {
        fontSize: 14,
        fontWeight: '500',
        fontFamily: 'GeistMono',
    }
});