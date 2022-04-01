import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../utils";

const { deviceHeight, deviceWidth } = Dimensions.get("window")

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: deviceHeight,
      width: deviceWidth,
      padding: 20,
      backgroundColor: Colors.white,
    },
    headerText: {
        textAlign: "center",
        fontSize: 22,
        
    },
    viewAll: {
      textAlign: "right",
    }

});

export default styles;
