import { Colors, Constants } from '../utils';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentTvBills = (props) => {

    const billPaymentTvBillsIcons = [
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },
        { image: require("../../assets/images/gotv.png"), name: "DSTV" },
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },    
        { image: require("../../assets/images/dstv.png"), name: "DSTV" },   
    ];

    return (
        <View >
            <View >
                <Text style={styles.tvBills} >TV Bills</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentTvBillsIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={props.renderItem} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        marginRight: 35,
        alignItems: Constants.center,
        justifyContent: Constants.center,
        height: 60,
        width: 60,
    },
    tvBills: {
        color: Colors.black,
        marginVertical: 10,
    }
});

export default BillPaymentTvBills;
