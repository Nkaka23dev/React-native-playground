import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useCallback, useState } from 'react'
import { FlatList, Switch } from 'react-native-gesture-handler';

export default function ColorPaletteModal({navigation}) {
  const COLORS = [
    { colorName: 'AliceBlue', hexCode: '#F0F8FF' },
    { colorName: 'AntiqueWhite', hexCode: '#FAEBD7' },
    { colorName: 'Aqua', hexCode: '#00FFFF' },
    { colorName: 'Aquamarine', hexCode: '#7FFFD4' },
    { colorName: 'Azure', hexCode: '#F0FFFF' },
    { colorName: 'Beige', hexCode: '#F5F5DC' },
    { colorName: 'Bisque', hexCode: '#FFE4C4' },
    { colorName: 'Black', hexCode: '#000000' },
    { colorName: 'BlanchedAlmond', hexCode: '#FFEBCD' },
    { colorName: 'Blue', hexCode: '#0000FF' },
    { colorName: 'BlueViolet', hexCode: '#8A2BE2' },
    { colorName: 'Brown', hexCode: '#A52A2A' },
    { colorName: 'BurlyWood', hexCode: '#DEB887' },
    { colorName: 'CadetBlue', hexCode: '#5F9EA0' },
    { colorName: 'Chartreuse', hexCode: '#7FFF00' },
    { colorName: 'Chocolate', hexCode: '#D2691E' },
    { colorName: 'Coral', hexCode: '#FF7F50' },
    { colorName: 'CornflowerBlue', hexCode: '#6495ED' },
    { colorName: 'Cornsilk', hexCode: '#FFF8DC' },
    { colorName: 'Crimson', hexCode: '#DC143C' },
    { colorName: 'Cyan', hexCode: '#00FFFF' },
    { colorName: 'DarkBlue', hexCode: '#00008B' },
    { colorName: 'DarkCyan', hexCode: '#008B8B' },
    { colorName: 'DarkGoldenRod', hexCode: '#B8860B' },
    
  ];
    const [name, setName] = useState('');
    const [isSelected, setIsSelected] = useState([]);

    const handleSubmit = useCallback(() => {
      if(!name){
        Alert.alert("Palette name is missing!")
      } else if(isSelected.length < 3){
        Alert.alert("You should add atleast 3 colors!")
      }
      else{
        const newColorPalatte = {
         paletteName: name,
         colors: isSelected
        }
        navigation.navigate('Home', {newColorPalatte})
      }
    }, [name, isSelected])
 
    const handleValueChange = (value, color) => {
      if(value === true){
        setIsSelected(colors => [...colors, color])
      }else{
        setIsSelected(colors => colors.
          filter(selectedColor => color.colorName !== selectedColor.colorName))
      }
    }
 console.log(isSelected)
  return (
    <View style={{paddingTop: 20, flex: 1, backgroundColor: 'white'}}>
      <Text style={{fontSize: 16,  fontWeight: '600', marginHorizontal: 12, marginBottom: 2}}>Name of the palette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder='Palette Name'
      />
      <FlatList
       data={COLORS}
       keyExtractor={item => item.colorName}
       renderItem={({item}) =>  
       <View style={styles.switch}>
       <Text style={{fontSize: 16,  fontWeight: '600'}}>{item.colorName}</Text>
      <Switch
       value={!!isSelected.find((color) => color.colorName === item.colorName)}
       onValueChange={(selected) => {handleValueChange(selected, item)}}
     />
      </View>}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}> 
        <Text style={{color: 'white', fontWeight: 'bold'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 45,
      marginHorizontal: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 5
    },
    button: {
     backgroundColor: 'green',
     height: 40,
     marginHorizontal: 10,
     borderRadius: 5,
     justifyContent: 'center',
     alignItems: 'center'
    },
    switch:{
       marginHorizontal: 20,
       flexDirection:'row',
       justifyContent:'space-between',
       alignItems:'center',
       borderBottomWidth : 1
    }
  }); 
