import { View, Text, StyleSheet } from 'react-native'

export default function ColorBox({colorName, hexCode}) {

  const boxColor = {
    backgroundColor: hexCode
  }
  return (
    <View style={[styles.container1,boxColor]}>
    <Text style={styles.text}>{colorName}: {hexCode}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: 'white'
  },
  container1: {
    marginHorizontal:20,
    paddingVertical: 10,
    marginTop: 10
  },

}) 