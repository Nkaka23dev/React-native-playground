import { View, Text, TouchableOpacity} from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, RefreshControl } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

export default function HomePage({ navigation, route }) {
  const newColorPalatte = route.params? route.params.newColorPalatte: undefined;

  const [allPalette, setAllPalette] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const  getAllColorPalette = useCallback(async () => {
    const results = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
    if(results.ok){
      const data = await results.json()
      setAllPalette(data)
    }
  }, [])
  
  useEffect(() => {
    getAllColorPalette()
  }, [])
    
  const  handleIsRefleshing = useCallback(async () => {
   setIsRefreshing(true)
   await getAllColorPalette();
   setIsRefreshing(false)
  }, [])

  useEffect(() => {
   if(newColorPalatte){
    setAllPalette(palette => [newColorPalatte, ...palette])
   }
  }, [newColorPalatte])

  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
      <FlatList
       data={allPalette}
       keyExtractor={(item) => item.paletteName}
       renderItem={({item}) => 
        <PalettePreview handlePress = {() => navigation.navigate('ColorPlatte',{
          paletteName: item.paletteName,
          colors: item.colors,
        })} item ={item} />
        }
        refreshing={isRefreshing}
        onRefresh={handleIsRefleshing}
        ListEmptyComponent={ <View style={{ alignItems:'center', justifyContent:'center',marginTop: 20, flex:1}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}} >Not data found</Text>
       </View>}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={handleIsRefleshing} />}
        ListHeaderComponent={<TouchableOpacity onPress={() => navigation.navigate('ColorPaletteModal')}>
          <Text style={{fontSize: 20, fontWeight: 'bold',paddingHorizontal: 20, marginTop: 20, color:'green'}}>Add Color Palette</Text>
        </TouchableOpacity>}
      />
      </View>
    </View>
  )
} 