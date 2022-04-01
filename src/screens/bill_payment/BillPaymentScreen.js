import { View, Text } from 'react-native'
import React from 'react';
import styles from "./BillPaymentStyles"

const BillPaymentScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => {navigation.navigate("Seerbit")}}>BillPaymentScreen</Text>
    </View>
  )
}

export default BillPaymentScreen