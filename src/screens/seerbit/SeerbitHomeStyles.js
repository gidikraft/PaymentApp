import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils";

const { deviceHeight, deviceWodth } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   padding: 20,
      height: deviceHeight,
      width: deviceWodth,
    //   backgroundColor: Colors.backGroundGreen,
    },
    topDashboard: {
        backgroundColor: Colors.lightGreen,

    },
    headerView: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20
    },
    amount: {
        fontSize: 20,
        fontWeight: "700",
        fontStyle: "normal"
    },
    wallet: {
        fontWeight: "500",
        fontSize: 14,

    },
    navigationView: {
        // height: 450,
        paddingHorizontal: 20,
    },
    navigationItem: {
        alignSelf: "center",
        // paddingVertical: 5,
        
    },
    iconView: {
        backgroundColor: Colors.darkGreen,
        alignSelf: "center",
        borderRadius: 40,
        padding: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    horizontalNavigationView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    accountNumberView: {
        backgroundColor: Colors.white,
        marginTop: 20,
        borderRadius: 20,
        padding: 10,
        marginHorizontal: 60,
        marginBottom: 20,

    },
    bottomDashboard: {
        color: Colors.white,
        padding: 20,
        backgroundColor: Colors.white,
    },
    transactionView: {
        flexDirection: "row",
        height: 60,
        flex: 1,
        // paddingVertical: 3,
        backgroundColor: Colors.flatListBackground,
        justifyContent: "center",
        alignItems: "center"
    },
    transactionLogo: {
        borderRadius: 40
    },
    transactionDetails: {
        flex: .7,
        marginLeft: 10,
    },
    transactionAmountView: {
        flex: .3,
        alignItems: "flex-end"
    },
    seeMore: {
        textAlign: "center",
        color: Colors.darkGreen
    },
    billPaymentHeading: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    airtime: {
        // marginBottom: 20,
    },
    billPaymentTabView: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: 150,
        top: 10,
        marginHorizontal: 100,
        // borderWidth: 1,
        borderRadius: 30,
        // borderColor: Colors.darkGreen,
        elevation: 5,
        padding: 5,
        // alignSelf: 'center'
    },
    
    
});

export default styles;
