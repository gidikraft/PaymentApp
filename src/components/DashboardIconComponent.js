import { Colors } from '../utils';
import { IconText } from './CustomText';
import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PayBillIcon from "../../assets/images/local_badge.png";

const DashboardIcon = (props) => (

    <View style={styles.navigationItem}>
        <View style={styles.iconView} >
            <Image source={PayBillIcon}/> 
        </View>
        {/* <Text >Send Money</Text> */}
        <IconText caption={"Send Money"} style={styles.label} />
    </View>
);

const styles = StyleSheet.create({
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
    label: {
        marginTop: 10,

    }

});

export default DashboardIcon;
