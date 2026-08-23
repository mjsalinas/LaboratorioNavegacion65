import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import { navigationRef } from '.src/navigation/NavigationService'; 
export default function App() {

return (
    <NavigationContainer ref={navigationRef}>
    <StackNavigator />
    </NavigationContainer>
    
);
}