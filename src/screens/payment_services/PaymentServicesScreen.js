import { Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import styles from './PaymentServicesStyles';
import { NormalText, SmallText } from '../../components/CustomText';
import NetworkPicker from '../../components/Picker';
import { ContactInput, CustomInput } from '../../components/Inputs';
import ContactBookIcon from "../../../assets/images/contact_book_icon.png";
import { GreenButton } from '../../components/Buttons';
import WalletButtonGroup from '../../components/WalletRadioButtons';
import { Constants } from '../../utils';

const PaymentServicesScreen = ({ navigation }) => {
    const [networkPicker, setNetworkPicker] = useState("");
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [category, setCategory] = useState(false);

    const handleNavigation = () => navigation.navigate("Dialpad");

    const toggleCategory = () => setCategory(!category)

    return (
        <View style={styles.container}>
            
            <SmallText caption={Constants.networkProvider} onPress={handleNavigation} />

            <NetworkPicker networkPicker={networkPicker} setNetworkPicker={setNetworkPicker} />

            <SmallText caption={Constants.category} />

            <View style={styles.tabView}>
                <TouchableOpacity onPress={toggleCategory}>
                    <View style={[category? styles.tabItem : styles.tabItemInactive]}>
                        <NormalText caption={Constants.mobileTopUp} style={[category? styles.tabText : null]}/>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={toggleCategory}>
                    <View style={[!category? styles.tabItem : styles.tabItemInactive]} >
                        <NormalText caption={Constants.dataBundle} style={[!category? styles.tabText : null]} />
                    </View> 
                </TouchableOpacity>
                         
            </View>

            <SmallText caption={Constants.amount} />

            <CustomInput 
                placeholder={Constants.enterAmount}
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
                keyboardType={Constants.numeric}
            />
            
            <SmallText caption={Constants.phoneNumber} />
            
            <View style={styles.contactInputView}>
                <ContactInput
                    placeholder={Constants.enterPhoneNumber}
                    onChangeText={(text) => setAmount(text)}
                    value={amount}
                    keyboardType={Constants.phonePad}
                    style={styles.contactInput}
                />
                <View style={styles.contactIconView}>
                    <TouchableOpacity style={styles.contactTouch}>
                        <Image source={ContactBookIcon} />
                        <SmallText caption={Constants.contacts} style={styles.contactIconText}/>
                    </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.payWithView}>
                <View style={styles.payWithBorder} />
                    <SmallText caption={Constants.payWith} />
                <View style={styles.payWithBorder} />
            </View>
            
            <WalletButtonGroup 
                buttons={[
                `9PSB Wallet                        Balance: 434,533,000`,
                `Bank                                               Balance: 23,000`, 
                `Bank                                               Balance: 23,000`
                ]}
            />

            <GreenButton caption={Constants.purchase} onPress={handleNavigation}/>

        </View>
    );
};

export default PaymentServicesScreen;
