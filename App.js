/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillPaymentScreen from './src/screens/bill_payment/BillPaymentScreen';
import SeerbitHome from './src/screens/seerbit/SeerbitHome';

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Seerbit" 
          component={SeerbitHome}
          options={{ headerShown: false }}
          />
        <Stack.Screen name="BillPayment" component={BillPaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
