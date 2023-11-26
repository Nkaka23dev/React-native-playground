import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

export default function PlatePreview({ handlePress, colorPalette }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={styles.title}>{colorPalette.paletteName}</Text>
            <FlatList
                // horizontal={true}
                style={styles.list}
                data={colorPalette.colors.slice(0, 5)}
                keyExtractor={item => item.paletteName}
                renderItem={({ item }) =>
                    <View style={[styles.box, { backgroundColor: item.hexCode }]}>

                    </View>}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: '700',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    box: {
        height: 40,
        width: 40,
        marginRight: 13,
        marginTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    list: {
        marginBottom: 20,
        //if you don't want to use flex direction you you still set horizontal to true in Flat list component
        flexDirection: 'row'
    }
}); 