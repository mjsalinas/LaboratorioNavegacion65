
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './android/app/src/navigation/StackNavigator';
import { navigationRef } from './android/app/src/navigation/NavigationService';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}
