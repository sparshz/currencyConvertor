import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { PropsWithChildren } from 'react'

type currencyButtonProp = PropsWithChildren<
    {
        name: string;
        flag: string;
    }>

const buttonComponent = (props: currencyButtonProp) => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4
    },
    country: {
        fontSize: 14,
        color: "#2d3436",

    }
})

export default buttonComponent

