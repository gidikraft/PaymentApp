import { Image, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from "./BillPaymentStyles"
import { SearchInput } from '../../components/Inputs';
import BillPaymentAirtime from '../../components/BillPaymentAirtimeComponent';
import BillPaymentElectricity from '../../components/BillPaymentElectricityComponent';
import BillPaymentInternet from '../../components/BillPaymentInternetComponent';
import BillPaymentTvBills from '../../components/BillPaymentTvBillsComponent';
import { IconText, SmallText } from '../../components/CustomText';
import { Constants } from '../../utils';

const BillPaymentScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [viewAll, setViewAll] = useState(false)

  const handleViewAll = () => setViewAll(!viewAll)

  const renderAirtime = ({ item }) => (
    <TouchableOpacity onPress={handleNavigation} style={styles.imageView}>
      <Image source={item.image} />
      <SmallText caption={item.name} />
    </TouchableOpacity>
  );

  const renderElectricity = ({ item }) => (
    <View style={styles.imageView} >
      <Image source={item.image} />
      <SmallText caption={item.name} />
    </View>
  );

  const renderInternet = ({ item }) => (
    <View style={styles.imageView} >
      <Image source={item.image} />
      <SmallText caption={item.name} />
    </View>
  );

  const renderTvBills = ({ item }) => (
    <View style={styles.imageView} >
      <Image source={item.image} />
      <SmallText caption={item.name} />
    </View>
  );
  

  const handleNavigation = () => navigation.navigate("Payment Services")

  return (
    <View style={styles.container}>
      <SearchInput 
        placeholder={Constants.search}
        onTextChange={(text) => {setSearchText(text)}}
        value={searchText}
        autoCapitalize={Constants.none}
        style={styles.searchBar}
      />

      <BillPaymentAirtime 
        renderItem={renderAirtime}
      />

      <BillPaymentElectricity
        renderItem={renderElectricity}
      />

      <TouchableOpacity onPress={handleViewAll} >
        <IconText caption={Constants.viewAll} style={styles.viewAll}/>
      </TouchableOpacity>

      <BillPaymentTvBills 
        renderItem={renderTvBills}
      />
      
      <TouchableOpacity onPress={handleViewAll}>
        <IconText caption={Constants.viewAll} style={styles.viewAll}/>
      </TouchableOpacity>

      <BillPaymentInternet 
      renderItem={renderInternet}
      />

      <TouchableOpacity onPress={handleViewAll} >
        <IconText caption={Constants.viewAll} style={styles.viewAll}/>
      </TouchableOpacity>

    </View>
  );
};

export default BillPaymentScreen;
