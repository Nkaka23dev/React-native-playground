import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';

const stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='ColorPlatte'
          component={ColorPalette}
          options={({ route }) => ({
            title: route.params.paletteName
          })} />
      </stack.Navigator>
    </NavigationContainer>
  )
}
