import { FlatList, StyleSheet } from 'react-native'
import React, {useCallback, useState, useEffect} from 'react'
import PlatePreview from '../components/PlatePreview'

export default function Home({ navigation }) {

    const [ColorPalette, setColorPalette] = useState([])

    const fetchColorPalatte = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
        if(result.ok){
            const palettes = await result.json();
            setColorPalette(palettes)
        }
    }, []);

    useEffect(() => {
      fetchColorPalatte()
      return () => { 
      }
    }, [])

    return (
        <FlatList
            data={ColorPalette}
            style={styles.container}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PlatePreview
                    handlePress={() => {
                        navigation.navigate('ColorPlatte', item)
                    }}
                    colorPalette={item}
                />
            )}

        />

    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 15
    }
})
