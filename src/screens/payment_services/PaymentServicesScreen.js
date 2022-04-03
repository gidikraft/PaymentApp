import { Image, TouchableOpacity, View, Text } from 'react-native'
import React, { useState } from 'react';
import styles from './PaymentServicesStyles';
import { NormalText, SmallText } from '../../components/CustomText';
import NetworkPicker from '../../components/Picker';
import {Picker} from '@react-native-picker/picker';
import { CustomInput, SearchInput } from '../../components/Inputs';
import ContactBookIcon from "../../../assets/images/contact_book_icon.png";
import { GreenButton } from '../../components/Buttons';
import RadioButtonRN from 'radio-buttons-react-native';

const PaymentServicesScreen = ({ navigation }) => {
    const [networkPicker, setNetworkPicker] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [wallet, setWallet] = useState("");

    const handleNavigation = () => {
        console.log(`Clicked navigate to Dialpad`)
        navigation.navigate("Dialpad")
    };

    const wallets = [
        { label: 'data 1' },
        { label: 'data 2' },
    ];

    return (
        <View style={styles.container}>
            
            <SmallText caption={`Network Provider`} onPress={handleNavigation} />

            <NetworkPicker networkPicker={networkPicker} setNetworkPicker={setNetworkPicker} />

            <SmallText caption={`Category`} onPress={handleNavigation} />

            <View style={styles.modalView}>
                <View style={styles.modalItem}>
                    <NormalText caption={`Mobile Top-up`} />
                </View>
                <View >
                    <NormalText caption={`Data Bundle`} />
                </View>           
            </View>

            <SmallText caption={`Amount`} onPress={handleNavigation} />

            <CustomInput 
                placeholder={`Enter Amount`}
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
                keyboardType={`numeric`}
                />
            
            <SmallText caption={`Phone Number`} onPress={handleNavigation} />
            
            <View style={styles.contactInputView}>
                <CustomInput 
                    placeholder={`Enter Amount`}
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    keyboardType={`phone-pad`}
                    style={styles.contactInput}
                />
                <View style={styles.contactIconView}>
                    <TouchableOpacity style={styles.contactTouch}>
                        <Image source={ContactBookIcon} />
                        <SmallText caption={`Contacts`} style={styles.contactIconText}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.payWithView}>
                <View style={styles.payWithBorder} />
                    <SmallText caption={`Pay With`} />
                <View style={styles.payWithBorder} />
            </View>

            <RadioButtonRN
                data={wallets}
                selectedBtn={(e) => setWallet(e)}
                // box={false}
            />

            <GreenButton caption={`Purchase`} onPress={handleNavigation}/>

        </View>
    );
};

export default PaymentServicesScreen;
