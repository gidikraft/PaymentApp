import { StyleSheet, Text } from 'react-native'
import React from 'react';
import { Colors } from '../utils';

const HeaderText = (props) => (
    <Text 
        style={[styles.headerText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
)

const IconText = (props) => (
    <Text 
        style={[styles.iconText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
)

const NormalText = (props) => (
    <Text 
        style={[styles.normalText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
)

const SmallText = (props) => (
    <Text 
        style={[styles.normalText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
)

const styles = StyleSheet.create({
    headerText: {
        color: Colors.black,
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "500"
        // fontFamily: Fonts.Bold_Italic_Font,
    },
    iconText: {
        color: Colors.darkGreen,
        // marginTop: 10,
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal",
        textAlign: "center",
    },
    normalText: {
        color: Colors.black,
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "500",
    },
    smallText: {
        color: Colors.black,
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "400",
    },
})

export { HeaderText, IconText, NormalText, SmallText }
