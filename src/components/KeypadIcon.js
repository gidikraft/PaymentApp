import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils';

const KeypadIcon = (props) => (
    <TouchableOpacity style={[styles.keypad, props.style]} >
        <Text style={styles.passcodeText}>{props.caption}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    keypad: {
        width: 80,
        height: 80,
        borderRadius: 75,
        backgroundColor: Colors.gray,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    passcodeText: {
        fontSize: 24,
        fontWeight: "700",
        fontStyle: "normal",
        color: Colors.black,
    }
});

export { KeypadIcon, }
