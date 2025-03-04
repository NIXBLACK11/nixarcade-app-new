import { colors } from "@/constants/Colors"
import { gameImages, games } from "@/constants/Games"
import { ScrollView, View, Text, Image, StyleSheet } from "react-native"

export const FeaturedGames = () => {
    return (
        <View style={[styles.sectionContainer, { backgroundColor: colors.neutral + '20' }]}>
            <Text style={[styles.sectionTitle, { color: colors.secondary }]}>
                Featured Games
            </Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.gamesScrollContainer}
            >
                {games.map((game) => {
                    return (
                        <View key={game.id} style={[styles.gameCard, { borderColor: colors.primary }]}>
                            <View style={[styles.gameImagePlaceholder, { backgroundColor: colors.secondary + '50' }]}>
                                <Image
                                    source={gameImages[game.logo as keyof typeof gameImages]}
                                    style={styles.gameImage}
                                    resizeMode="contain" />
                            </View>
                            <Text style={[styles.gameTitle, { color: colors.secondary }]}>{game.title}</Text>
                            <Text style={styles.gameGenre}>{game.description}</Text>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 30,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        fontFamily: 'GeistMono'
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
        fontFamily: 'GeistMono'
    },
    gameGenre: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
        fontFamily: 'GeistMono'
    },
    gameImage: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
})