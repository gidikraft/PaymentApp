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
            style={[styles.input, props.style]}

        />
    </View>
)

const styles = StyleSheet.create({
    input: {
        backgroundColor: Colors.gray,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,

    }
});

export { SearchInput, }
