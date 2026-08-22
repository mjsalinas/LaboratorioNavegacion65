import { NavigationContainer } from '@react-navigation/native'
import { navigationRef } from './src/navigation/NavigationService'
import { StackNavigator } from './src/navigation/StackNavigator'

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  )
}
