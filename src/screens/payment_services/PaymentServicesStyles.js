import { StyleSheet, Dimensions } from "react-native";
import { Colors, Constants } from "../../utils";

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
        flexDirection: Constants.row,
        justifyContent: Constants.spaceAround,
        alignItems: Constants.center,
    },
    modalItem: {
        backgroundColor: Colors.lightGreen,
        
    },
    contactInputView: {
        height: 75,
        flexDirection: Constants.row,
        alignItems: Constants.center,
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
        flexDirection: Constants.row,
        marginTop: 15,
        alignItems: Constants.center,
        justifyContent: Constants.center,
    },
    contactIconText: {
        marginLeft: 6,
        color: Colors.contactColor
    },
    payWithView: {
        flexDirection: Constants.row,
        alignItems: Constants.center,
        justifyContent: Constants.spaceBetween,
        marginVertical: 10
    },
    payWithBorder: {
        width: 140,
        borderColor: Colors.gray,
        borderBottomWidth: 1,
    },



});

export default styles;
