import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import ColorBox from './components/ColorBox'


export default function App() {
  return (
   <SafeAreaView >
    <View >
      <Text style={styles.titleStyle}>Here are some boxes of different colors</Text>
    </View>
   <View style={[{marginTop:10}]}>
     <ColorBox colorName="cyan" hexCode="#2aa198" />
     <ColorBox colorName="Blue" hexCode="#268bd2" />
     <ColorBox colorName="Magenta" hexCode="#d33682" />
     <ColorBox colorName="Orange" hexCode="#cb4b16" />
     </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
      marginTop: 50,
      marginHorizontal:20, 
      fontWeight: 'bold',
      fontSize: 16,
    
  }
}) 