import { View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react';
import styles from "./SeerbitHomeStyles"
import { HeaderText, IconText, NormalText, SmallText } from '../../components/CustomText';
import { SearchInput } from '../../components/Inputs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { ItemSeparator } from '../../components/ItemSeperator';
import SendMoneyIcon from "../../../assets/images/send_money_icon.png";
import UserProfileIcon from "../../../assets/images/user_square.png";
import BillPaymentAirtime from '../../components/BillPaymentAirtimeComponent';
import BillPaymentElectricity from '../../components/BillPaymentElectricityComponent';
import BillPaymentInternet from '../../components/BillPaymentInternetComponent';
import DashboardIcon from '../../components/DashboardIconComponent';
import WalletIcon from "../../../assets/images/wallet_icon.png";
import { Constants } from '../../utils';

const SeerbitHome = ({ navigation }) => {
    const [searchText, setSearchText] = useState("")
    const [showMore, setShowMore] = useState(false)

    const handleNavigation = () => navigation.navigate("Bill Payment");

    const toggleShowMore = () => setShowMore(!showMore);

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
    ];

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
    );

    const renderAirtime = ({ item }) => (
        <View >
            <View style={styles.imageView} >
                <Image source={item.image} />
            </View>
        </View>
    );

    const renderElectricity = ({ item }) => (
        <View style={styles.imageView} >
            <Image source={item.image} />
        </View>
    );

    const renderInternet = ({ item }) => (
      <View style={styles.imageView} >
        <Image source={item.image} />
      </View>
    );
  
    const BillPaymentComponent = () => (
        <View >
            <TouchableOpacity onPress={() => {toggleShowMore()}}>
                {!showMore? (
                    <View style={styles.showMoreContainer}>
                        <NormalText  caption={Constants.showMore} style={styles.seeMore}/> 
                        <Image source={WalletIcon} />
                    </View>
                ) : (
                    <View style={styles.showMoreContainer} >
                        <NormalText  caption={Constants.showMore} style={styles.seeMore}/>
                        <Image source={WalletIcon} />
                    </View>
                )}
                
            </TouchableOpacity>
            <NormalText caption={Constants.billPayment}/>

            <View style={styles.billPaymentHeading}>
                <View style={styles.billPaymentTabView}>
                    <Image source={SendMoneyIcon} />
                    <Image source={UserProfileIcon} />
                </View>

            </View>

            <BillPaymentAirtime 
                renderItem={renderAirtime}
            />
            <ItemSeparator />

            <BillPaymentElectricity 
            renderItem={renderElectricity}/>
            <ItemSeparator />

            <BillPaymentInternet 
                renderItem={renderInternet}
            />

        </View>
    );

    // const MyIcon = <Icon name="rocket" size={30} color="#900" />;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topDashboard}>
                <View style={styles.headerView}>
                    <View>
                        <HeaderText caption={Constants.goodAfternoon} />
                        <HeaderText caption={Constants.tola} />
                    </View>
                    <View >
                        <View style={styles.walletAmountView}>
                            <HeaderText caption={`N0.00`} style={styles.amount}/>
                            <TouchableOpacity >
                                <Image source={WalletIcon} />
                            </TouchableOpacity>
                        </View>
                        <NormalText caption={Constants.walletBalance}/>
                        
                    </View>
                </View>

                <View style={styles.navigationView}>
                    <TouchableOpacity >
                        <DashboardIcon caption={Constants.sendMoney}/>
                    </TouchableOpacity>
                    
                    <View style={styles.horizontalNavigationView}>
                        <TouchableOpacity >
                            <DashboardIcon caption={Constants.linkAccount}/>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleNavigation} >
                            <DashboardIcon caption={Constants.payBills}/>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity >
                        <DashboardIcon caption={Constants.requestMoney}/>
                    </TouchableOpacity>
                    
                    <View style={styles.accountNumberView}>
                        <IconText caption={Constants.accountNumber} style={styles.accountText}/>
                        <IconText caption={Constants.accountDigits} style={styles.accountNumber}/>
                    </View>
                </View>
            </View>

            <View style={styles.bottomDashboard}>
                <SearchInput 
                    placeholder={Constants.search}
                    onTextChange={(text) => {setSearchText(text)}}
                    value={searchText}
                    autoCapitalize={Constants.none}
                    />

                <NormalText caption={Constants.recentTransactions} style={styles.heading}/>

                <SmallText caption={Constants.date} style={styles.heading} />

                <FlatList
                    data={transactionData}
                    keyExtractor={(item, itemIndex) => itemIndex}
                    renderItem={renderTransactions}
                    ItemSeparatorComponent={ItemSeparator}
                    ListFooterComponent={BillPaymentComponent}
                />

            </View>
            
        </ScrollView>
    )
};

export default SeerbitHome;
