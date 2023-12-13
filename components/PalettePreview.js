import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'


export default function PalettePreview({handlePress, item}) {
console.log(item.colors.slice(0,5), "hhdhdh")
  return (
    <View>
     <TouchableOpacity onPress={handlePress}>
        <Text style={styles.titleStyle}>{item.paletteName}</Text>
        <FlatList
         horizontal={true}
         data={item.colors.slice(0,5)}
         keyExtractor={(item) => item.colorName}
         renderItem={({item}) => 
         <View 
         style={[
            {
                backgroundColor: item.hexCode, 
                height:40,
                width: 40, },
                styles.list
            ]}></View>}
      />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 20,
        marginHorizontal:20, 
        fontWeight: 'bold',
        fontSize: 22,
    },
    list: {
        marginLeft: 20,
        marginTop: 10
    }
  }) 