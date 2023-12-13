import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import MyPalette from './screens/MyPalette';
import { View } from 'react-native';


export default function App() {
  const Stack = createStackNavigator()
  return (
  <NavigationContainer>
    <Stack.Navigator>
     <Stack.Screen name='HomePage' component={HomePage}/>
     <Stack.Screen name = 'ColorPlatte'component={MyPalette} />
    </Stack.Navigator>
  </NavigationContainer>  
  )
}

   