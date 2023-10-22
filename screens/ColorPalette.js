import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import React from 'react'
import ColorBoxes from '../components/ColorBoxes'

export default function ColorPalette({ route }) {
    const { paletteName, colors } = route.params
    return (
        <FlatList
            data={colors}
            style={styles.container}
            keyExtractor={item => item.colorName}
            renderItem={({ item }) => (
                <ColorBoxes colorName={item.colorName} hexCode={item.hexCode} />
            )
            }
            ListHeaderComponent={< Text style={styles.heading} >{paletteName}</Text >}
        />
    )
}
const styles = StyleSheet.create({
    heading: {
        fontWeight: '700',
        fontSize: 20,
        justifyContent: 'center',
        paddingTop: 5
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 15
    }
})
