import { Colors } from '../utils';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentAirtime = (props) => {

    const billPaymentAirtimeIcons = [
        {
            image: require("../../assets/images/mtn_icon.png")
        },
        {
            image: require("../../assets/images/airtel_icon.png")
        },
        {
            image: require("../../assets/images/glo_icon.png")
        },    
        {
            image: require("../../assets/images/9mobile_icon.png")
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
                <Text style={styles.airtime} >Airtime</Text>
            </View>

            <FlatList 
                numColumns={4}
                data = {billPaymentAirtimeIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={renderImages} 
            /> 
        </View>

    )
};

const styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        marginRight: 35,

    },
    airtime: {
        color: Colors.black,
    }
});

export default BillPaymentAirtime;