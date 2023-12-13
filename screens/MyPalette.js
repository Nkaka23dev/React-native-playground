import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import ColorBox from '../components/ColorBox';

export default function MyPalette({route}) {
  const { paletteName ,colors} = route.params
  return (
    <SafeAreaView >
    <View>
      <FlatList
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={({item}) => <ColorBox colorName={item.colorName} hexCode={item.hexCode} />}
      ListHeaderComponent={<Text style={styles.titleStyle}>{paletteName}</Text>}
      />
    </View>
   </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 10,
        marginHorizontal:20, 
        fontWeight: 'bold',
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {height:1, width:0},
        shadowOpacity: 0.3,
        shadowRadius: 2
    }
  }) 