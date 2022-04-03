import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react';
import { Colors } from '../utils';

const SearchInput = (props) => (
    <View >
        <TextInput 
            placeholder={props.placeholder}
            value={props.value}
            autoCorrect={false}
            autoCapitalize={props.autoCapitalize}
            onChangeText={text => props.onChangeText(text)}
            style={[styles.searchInput, props.style]}

        />
    </View>
);

const CustomInput = (props) => (
    <View >
        <TextInput 
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            value={props.value}
            autoCorrect={false}
            autoCapitalize={props.autoCapitalize}
            onChangeText={text => props.onChangeText(text)}
            style={[styles.customInput, props.style]}
            keyboardType={props.keyboardType}
        />
    </View>
);

const styles = StyleSheet.create({
    searchInput: {
        backgroundColor: Colors.gray,
        padding: 10,
        borderRadius: 5,
        color: Colors.black,
    },
    customInput: {
        padding: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 5,
        borderColor: Colors.gray,
        borderWidth: 1,
    },
});

export { SearchInput, CustomInput,  }
