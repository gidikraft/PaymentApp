import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../utils'; 

const ItemSeparator = () => (
    <View style={styles.itemSeperator}/>
)

const styles = StyleSheet.create({
    itemSeperator: {
        height: 2,
        width: '100%',
        backgroundColor: Colors.gray

    }
})

export { ItemSeparator }