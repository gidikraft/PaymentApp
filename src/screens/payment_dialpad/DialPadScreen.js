import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './DialPadStyles';
import MTNIcon from "../../../assets/images/mtn_icon.png";
import FingerprintIcon from "../../../assets/images/fingerprint_icon.png"
import { HeaderText, NormalText, SmallText } from '../../components/CustomText';
import { KeypadIcon } from '../../components/KeypadIcon';

const DialPadScreen = ({ navigation }) => {

    const handleNavigation = () => {
        console.log(`Clicked navigate to Home`)
        navigation.navigate("Home")
    }
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={handleNavigation} style={styles.iconView}>
                <Image source={MTNIcon} />
            </TouchableOpacity>

            <SmallText caption={`MTN`} />

            <HeaderText caption={`1000.00`} style={styles.amount} />

            <NormalText 
                caption={`Enter your transaction PIN to complete this payment`} 
                style={styles.pinInstructions}
            />

            <View style={styles.passcodeView}>
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
                <View style={styles.passcodeIcon} />
            </View>

            <View style={styles.keypadContainer} >
                <KeypadIcon caption={`1`} />
                <KeypadIcon caption={`2`} />
                <KeypadIcon caption={`3`} />
                <KeypadIcon caption={`4`} />
                <KeypadIcon caption={`5`} />
                <KeypadIcon caption={`6`} />
                <KeypadIcon caption={`7`} />
                <KeypadIcon caption={`8`} />
                <KeypadIcon caption={`9`} />
                <TouchableOpacity style={styles.fingerprintView} >
                    <Image source={FingerprintIcon} />
                </TouchableOpacity>
                <KeypadIcon caption={`0`} />
                <KeypadIcon style={styles.hiddenKeypadIcon}/>


            </View>

            {/* <Text>Dialpad Screen</Text> */}
        </View>
    )
};

export default DialPadScreen;
