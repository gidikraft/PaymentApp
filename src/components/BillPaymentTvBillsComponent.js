import { Colors } from '../utils';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentTvBills = () => {

    const billPaymentTvBillsIcons = [
        {
            image: require("../../assets/images/dstv.png")
        },
        {
            image: require("../../assets/images/gotv.png")
        },
        {
            image: require("../../assets/images/dstv.png")
        },    
        {
            image: require("../../assets/images/dstv.png")
        },   
    ];

    const renderImages = ({ item }) => (
        <View >
            <View style={styles.imageView} >
                <Image source={item.image} />
            </View>
        </View>
    );

    return (
        <View >

            <View >
                <Text style={styles.tvBills} >TV Bills</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentTvBillsIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={renderImages} 
            />

        </View>

    );
};

const styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        marginRight: 35,
        alignItems: "center",
        justifyContent: "center",
        height: 60,
        width: 60,
    },
    tvBills: {
        color: Colors.black,
        marginVertical: 10,
    }
});

export default BillPaymentTvBills;
