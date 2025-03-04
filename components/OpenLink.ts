import { Alert, Linking } from "react-native";

export const OpenLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        Alert.alert("Error", "Can't open the link");
    }
};
