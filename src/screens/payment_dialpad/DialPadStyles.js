import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: Colors.white,
        alignItems: "center",
    },
    iconView: {
        marginTop: 20,
        marginBottom: 7,

    },
    amount: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: "400",
        fontStyle: "normal",
        color: Colors.black,
    },
    pinInstructions: {
        marginTop: 20,
        marginBottom: 30,
        marginHorizontal: 110,
        textAlign: "center",

    },
    passcodeView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
    },
    passcodeIcon: {
        backgroundColor: "#E3EFE2",
        marginHorizontal: 15,
        height: 16,
        width: 16,
        borderRadius: 30,
    },
    keypadContainer: {
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    fingerprintView: {
        width: 80,
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    hiddenKeypadIcon: {
        backgroundColor: Colors.white,
    },


});

export default styles
