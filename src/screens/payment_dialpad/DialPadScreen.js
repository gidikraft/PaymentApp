import { View, Text } from 'react-native'
import React from 'react';
import styles from './DialPadStyles';

const DialPadScreen = ({ navigation }) => {

    const handleNavigation = () => {
        console.log(`Clicked navigate to Home`)
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>
            <Text onPress={handleNavigation}>Dialpad Screen</Text>
        </View>
    )
};

export default DialPadScreen;
