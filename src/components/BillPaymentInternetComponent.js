import { Colors } from '../utils';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentInternet = () => {

    const billPaymentInternetIcons = [
        {
            image: require("../../assets/images/spectranet_icon.png")
        },
        {
            image: require("../../assets/images/smile_icon.png")
        },    
        {
            image: require("../../assets/images/mtn_icon.png")
        },
    ]

    const renderImages = ({ item }) => (
        <View >
            <View style={styles.imageView} >
                <Image source={item.image} />
            </View>
        </View>
    );

    return(
        
        <View >
            <View >
                <Text style={styles.airtime} >Internet Services</Text>
            </View>

            <FlatList 
                horizontal={true}
                data = {billPaymentInternetIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={renderImages} 
            /> 

        </View>
    );
};

const styles = StyleSheet.create({
    airtime: {
        color: Colors.black,
        marginTop: 30,
    },
    imageView: {
        marginTop: 30,
        marginRight: 45,

    }
})

export default BillPaymentInternet
