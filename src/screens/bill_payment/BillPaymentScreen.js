import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from "./BillPaymentStyles"
import { SearchInput } from '../../components/Inputs';
import BillPaymentAirtime from '../../components/BillPaymentAirtimeComponent';
import BillPaymentElectricity from '../../components/BillPaymentElectricityComponent';
import BillPaymentInternet from '../../components/BillPaymentInternetComponent';
import BillPaymentTvBills from '../../components/BillPaymentTvBillsComponent';
import { IconText } from '../../components/CustomText';

const BillPaymentScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [viewAll, setViewAll] = useState(false)

  const handleViewAll = () => {
    console.log(`Clicked view all ${viewAll}`)
    setViewAll(!viewAll)
  }

  const handleNavigation = () => {
    console.log(`Navigate to Airtime`)
    navigation.navigate("Payment Services")
  }

  return (
    <View style={styles.container}>
      <SearchInput 
        placeholder={"Search"}
        onTextChange={(text) => {setSearchText(text)}}
        value={searchText}
        autoCapitalize={"none"}
        />
      
      <BillPaymentAirtime />

      <BillPaymentElectricity />

      <TouchableOpacity onPress={handleNavigation} >
        <IconText caption={`view all`} style={styles.viewAll}/>
      </TouchableOpacity>

      <BillPaymentTvBills />
      
      <TouchableOpacity  onPress={handleNavigation}>
        <IconText caption={`view all`} style={styles.viewAll}/>
      </TouchableOpacity>

      <BillPaymentInternet />

      <TouchableOpacity onPress={handleViewAll} >
        <IconText caption={`view all`} style={styles.viewAll}/>
      </TouchableOpacity>

      {/* <Text onPress={handleNavigation}>BillPaymentScreen</Text> */}
    </View>
  )
}

export default BillPaymentScreen