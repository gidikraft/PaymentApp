import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        padding: 20,
        backgroundColor: Colors.white,
        
    },
    pickerContainer: {
        borderColor: Colors.gray,
        borderWidth: 0.7,
        borderRadius: 6,
        marginVertical: 20,

    },
    modalView: {
        height: 40,
        borderColor: Colors.gray,
        borderWidth: 0.7,
        borderRadius: 6,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center"
    },
    modalItem: {
        backgroundColor: Colors.lightGreen,
        
    },
    contactInputView: {
        height: 75,
        flexDirection: "row",
        alignItems: "center",
    },
    contactInput: {
        width: 240,
        borderColor: Colors.gray,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
    },
    contactIconView: {
        height: 49.5,
        paddingHorizontal: 20,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        borderColor: Colors.gray,
        borderWidth: 1,
    },
    contactTouch: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: "center",
        justifyContent: "center",
    },
    contactIconText: {
        marginLeft: 6,
        color: "#9C9C9C",
    },
    payWithView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 20
    },
    payWithBorder: {
        width: 140,
        borderColor: Colors.gray,
        borderBottomWidth: 1,
    },



});

export default styles;
