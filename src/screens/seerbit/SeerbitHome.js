import { View, Text, Button, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import styles from "./SeerbitHomeStyles"
import { HeaderText, IconText, NormalText, SmallText } from '../../components/CustomText';
import { SearchInput } from '../../components/Inputs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ItemSeparator } from '../../components/ItemSeperator';
import PayBillIcon from '../../../assets/images/local_badge.png';
import SendMoneyIcon from "../../../assets/images/send_money_icon.png";
import UserProfileIcon from "../../../assets/images/user_square.png";
import BillPaymentAirtime from '../../components/BillPaymentAirtimeComponent';
import BillPaymentElectricity from '../../components/BillPaymentElectricityComponent';
import BillPaymentInternet from '../../components/BillPaymentInternetComponent';
import DashboardIcon from '../../components/DashboardIconComponent';


const SeerbitHome = ({ navigation }) => {
    const [searchText, setSearchText] = useState("")
    const [showMore, setShowMore] = useState(false)

    const handleNavigation = () => {
        console.log("clicked text")
        navigation.navigate("BillPayment")
    }

    const toggleShowMore = () => {
        console.log("Show more")
        setShowMore(!showMore)
    }

    const transactionData = [
        {
            senderName: "Sambo Omotola Olanrewaju",
            receiverName: "Bank transfer from Rasaq Agbala",
            amount: 100,
            image: require("../../../assets/images/gtbank_icon.png")
        },
        {
            senderName: "Sambo Omotola Olanrewaju",
            receiverName: "Transfer to Rasaq Agbala",
            amount: 300,
            image: require("../../../assets/images/gtbank_icon.png")

        },
        {
            senderName: "Musa Chukwuma Adeyemi",
            receiverName: "Umar James",
            amount: 3000,
            image: require("../../../assets/images/gtbank_icon.png")

        },
    ]

    const renderTransactions = ({ item }) => (
        <View style={styles.transactionView}>
            <Image source={item.image} style={styles.transactionLogo} />
            <View style={styles.transactionDetails}>
                <NormalText caption={item.senderName}/>
                <SmallText caption={item.receiverName} />
            </View>
            <View style={styles.transactionAmountView}  >
                <HeaderText caption={`N ${item.amount}`}/>
            </View>
        </View>
    )

    const BillPaymentComponent = () => (
        <View >
            <NormalText caption={`Bill Payment`} style={styles.airtime}/>

            <View style={styles.billPaymentHeading}>
                <View style={styles.billPaymentTabView}>
                    <Image source={SendMoneyIcon} />
                    <Image source={UserProfileIcon} />
                </View>

            </View>

            <BillPaymentAirtime />
            <ItemSeparator />

            <BillPaymentElectricity />
            <ItemSeparator />

            <BillPaymentInternet />

        </View>
    )

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topDashboard}>
                <View style={styles.headerView}>
                    <View>
                        <HeaderText caption={"Good Afternoon,"} />
                        <HeaderText caption={"Tola"} />
                    </View>
                    <View >
                        <HeaderText caption={`N0.00`} style={styles.amount}/>
                        <HeaderText caption={`Wallet balance`} style={styles.wallet}/>
                        
                    </View>
                </View>

                <View style={styles.navigationView}>
                    <DashboardIcon />
                    
                    <View style={styles.horizontalNavigationView}>
                        <DashboardIcon />

                        <DashboardIcon />

                    </View>

                    <DashboardIcon />
                    
                    <View style={styles.accountNumberView}>
                        <IconText caption={`Account Number - 1007886777`} />

                    </View>
                </View>
            </View>

            <View style={styles.bottomDashboard}>
                <SearchInput 
                    placeholder={"Search"}
                    onTextChange={(text) => {setSearchText(text)}}
                    value={searchText}
                    autoCapitalize={"none"}
                    />

                <NormalText caption={`Recent Transactions`} style={styles.heading}/>

                <SmallText caption={`Saturday, 11 February 2022`} style={styles.subHeading} />

                <FlatList
                    data={transactionData}
                    keyExtractor={(item, itemIndex) => itemIndex}
                    renderItem={renderTransactions}
                    ItemSeparatorComponent={ItemSeparator}
                    />

                <TouchableOpacity onPress={() => {toggleShowMore()}}>
                    {!showMore? (
                        <NormalText  caption={`Show more`} style={styles.seeMore}/> 
                    ) : (
                        <NormalText  caption={`Show less`} style={styles.seeMore}/>
                    )}
                    
                </TouchableOpacity>
                
                {showMore ? (<BillPaymentComponent />) : null }

            </View>
            
        </ScrollView>
    )
};

export default SeerbitHome;