import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function PlatePreview({ handlePress, colorPalette }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.myText}>{colorPalette.paletteName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    myText: {
        fontSize: 18,
        fontWeight: '700',
        paddingHorizontal: 20,
        paddingVertical: 10
    }
});