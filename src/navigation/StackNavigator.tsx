import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '@screens/LoginScreen'
import { TabNavigator } from './TabsNavigator'

export type RootStackParamList = {
  Login: undefined
  MainTabs: { email: string }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainTabs" component={TabNavigator} />
    </Stack.Navigator>
  )
}
