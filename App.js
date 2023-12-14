import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './screens/HomePage';
import MyPalette from './screens/MyPalette';
import ColorPaletteModal from './screens/ColorPaletteModal';


export default function App() {
  // const Stack = createStackNavigator()

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
     <MainStack.Screen name="Home" component={HomePage} />
     <MainStack.Screen name = 'ColorPlatte'component={MyPalette} />
    </MainStack.Navigator>
  )
}
  return (
  <NavigationContainer>
   <RootStack.Navigator>
    <RootStack.Screen 
     name="main"
    component={MainStackScreen}
    options={{headerShown: false}}
    screenOptions={{ presentation: 'modal' }}
    />
    <RootStack.Screen 
    name='ColorPaletteModal' 
    component={ColorPaletteModal}
    />
   </RootStack.Navigator>
  </NavigationContainer>
  // <NavigationContainer>
  //   <Stack.Navigator>
  //    <Stack.Screen name='Home Page' component={HomePage}/>
  //    <Stack.Screen name = 'ColorPlatte'component={MyPalette} />
  //   </Stack.Navigator>
  // </NavigationContainer>  
  )
}

   