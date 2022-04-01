import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default styles
