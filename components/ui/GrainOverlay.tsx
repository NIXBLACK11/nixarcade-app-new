import { StyleSheet, ImageBackground } from "react-native";

export const GrainOverlay = () => (
    <ImageBackground
        source={require("../../assets/images/grain.png")}
        style={styles.grainOverlay}
        imageStyle={{ opacity: 0.1 }}
    ></ImageBackground>
);

const styles = StyleSheet.create({
    grainOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "transparent",
        zIndex: 1,
    },
});
