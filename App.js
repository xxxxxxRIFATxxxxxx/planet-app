import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import PlanetScreen from './src/screens/PlanetScreen/PlanetScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Planet" component={PlanetScreen} />
      </Stack.Navigator>

      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default App;