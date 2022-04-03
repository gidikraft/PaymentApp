import { StyleSheet, Text } from 'react-native'
import React from 'react';
import { Colors, Constants } from '../utils';

const HeaderText = (props) => (
    <Text 
        style={[styles.headerText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
);

const IconText = (props) => (
    <Text 
        style={[styles.iconText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
);

const NormalText = (props) => (
    <Text 
        style={[styles.normalText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
);

const SmallText = (props) => (
    <Text 
        style={[styles.normalText, props.style]}
        onPress={props.onPress}
    >
        {props.caption}
    </Text>
);

const styles = StyleSheet.create({
    headerText: {
        color: Colors.black,
        fontSize: 16,
        fontStyle: Constants.normal,
        fontWeight: Constants.sevenHundred,
    },
    iconText: {
        color: Colors.greenText,
        fontSize: 12,
        fontStyle: Constants.normal,
        fontWeight: Constants.normal,
        textAlign: Constants.center,
    },
    normalText: {
        color: Colors.black,
        fontSize: 14,
        fontStyle: Constants.normal,
        fontWeight: Constants.fiveHundred,
    },
    smallText: {
        color: Colors.black,
        fontSize: 12,
        fontStyle: Constants.normal,
        fontWeight: Constants.fourHundred,
    },
});

export { HeaderText, IconText, NormalText, SmallText };
