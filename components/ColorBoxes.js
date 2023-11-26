import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ColorBoxes({ colorName, hexCode }) {
    const boxColor = {
        backgroundColor: hexCode
    }
    const textColor = {
        color: parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white'
    }
    return (
        <View style={[boxColor, styles.allBoxes]}>
            <Text style={[styles.myText, textColor]}>{colorName}: {hexCode}</Text>
        </View >
    )
}
const styles = StyleSheet.create({
    allBoxes: {
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    myText: {
        color: 'white',
    },
})