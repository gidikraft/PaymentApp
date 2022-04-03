import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Colors } from '../utils';
import {Picker} from '@react-native-picker/picker';

const NetworkPicker = ({ networkPicker, setNetworkPicker }) => {

    const networkProviders = [
        { network: "MTN", networkValue: "mtn" },
        { network: "Airtel", networkValue: "airtel" },
        { network: "Glo", networkValue: "glo" },
        { network: "9mobile", networkValue: "9mobile" },
    ];

    const renderNetworkProviders = () => {
        return networkProviders.map((item, index) => {
            return <Picker.Item key={index} label={item.network} value={item.networkValue} style={{fontSize: 14}}/>
        })
    };

    return (
        <View style={styles.pickerContainer}>
            <Picker
                mode='dropdown'
                selectedValue={networkPicker}
                onValueChange={(itemValue, itemIndex) => setNetworkPicker(itemValue)}
            >
                <Picker.Item value='' label='Pick your network provider' enabled={false} color="#C5C5C5"/>
                {renderNetworkProviders()}
            </Picker>
        </View> 
    )

};

const styles= StyleSheet.create({
    pickerContainer: {
        borderColor: "#C4C4C4",
        borderWidth: 0.7,
        borderRadius: 6,
        marginVertical: 20,
    },

})

export default NetworkPicker;