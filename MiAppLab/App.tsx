import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import StackNavigator from './src/navigation/StackNavigator'; 
import { navigationRef } from './src/navigation/NavigationService'; 

export default function App() { 
  return ( 
    <NavigationContainer ref={navigationRef}> 
      <StackNavigator /> 
    </NavigationContainer> 
  ); 
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
