import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils';

const GreenButton = (props) => (
    <View>
        <TouchableOpacity style={[ styles.greenButtonContainer , props.style]} onPress={props.onPress}>
            <Text style={styles.buttonCaption}>{props.caption || "BUTTON"}</Text>
        </TouchableOpacity>
    </View>
);


const styles = StyleSheet.create({
    greenButtonContainer: {
        backgroundColor: Colors.greenButton,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginTop: 20,
        borderRadius: 10,
        height: 50,
    },
    buttonCaption: {
        color: "#FDFDFD",
        fontSize: 16,
        fontWeight: "500",
        fontStyle: "normal",
        // fontFamily: Fonts.Bold_Fonts,
        
    },

});

export { GreenButton,  };

