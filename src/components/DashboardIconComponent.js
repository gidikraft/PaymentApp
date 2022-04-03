import { Colors, Constants } from '../utils';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PayBillIcon from "../../assets/images/local_badge.png";

const DashboardIcon = (props) => (
    <View style={styles.navigationItem}>
        <View style={styles.iconView} >
            <Image source={PayBillIcon}/> 
        </View>
        <Text style={styles.label} >{props.caption}</Text>
    </View>
);

const styles = StyleSheet.create({
    navigationItem: {
        alignSelf: Constants.center,
    },
    iconView: {
        backgroundColor: Colors.darkGreen,
        alignSelf: Constants.center,
        borderRadius: 40,
        padding: 10,
        justifyContent: Constants.center,
        alignItems: Constants.center,
    },
    label: {
        marginTop: 10,
    }

});

export default DashboardIcon;
