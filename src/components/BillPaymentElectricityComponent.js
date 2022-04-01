import { Colors } from '../utils';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const BillPaymentElectricity = () => {

    const billPaymentElectricityIcons = [
        {
            image: require("../../assets/images/ikedc_icon.png")
        },
        {
            image: require("../../assets/images/ekedc_icon.png")
        },
        {
            image: require("../../assets/images/kedco_icon.png")
        },    
        {
            image: require("../../assets/images/aedc_icon.png")
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
        <View>
            <View >
                <Text style={styles.electricity} >Electricity</Text>
            </View>

            <FlatList 
                horizontal={true}
                data = {billPaymentElectricityIcons}
                keyExtractor={(item, itemIndex) => itemIndex}
                renderItem={renderImages} 
            /> 

        </View>

    );
};

const styles = StyleSheet.create({
    imageView: {
        marginVertical: 30,
        marginRight: 40,

    },
    electricity: {
        color: Colors.black,
        marginVertical: 20

    }
});

export default BillPaymentElectricity;
