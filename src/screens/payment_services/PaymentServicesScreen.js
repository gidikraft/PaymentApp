import { View, Text } from 'react-native'
import React from 'react';
import styles from './PaymentServicesStyles';

const PaymentServicesScreen = ({ navigation }) => {

    const handleNavigation = () => {
        console.log(`Clicked navigate to Home`)
        navigation.navigate("Dialpad")
    }
    return (
        <View style={styles.container}>
            <Text onPress={handleNavigation}>PaymentServicesScreen</Text>
        </View>
    )
};

export default PaymentServicesScreen;
