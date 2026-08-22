import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeTab from '@screens/tabs/HomeTab'
import IMCTab from '@screens/tabs/IMCTab'
import ProfileTab from '@screens/tabs/ProfileTab'
import { RouteProp, useRoute } from '@react-navigation/native'
import { RootStackParamList } from './StackNavigator'

export type TabsParamList = {
  Home: { email: string }
  IMC: undefined
  Profile: { email: string }
}

const Tab = createBottomTabNavigator<TabsParamList>()

export const TabNavigator = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'MainTabs'>>()
  const { email } = route.params

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeTab} initialParams={{ email }} />
      <Tab.Screen name="IMC" component={IMCTab} />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        initialParams={{ email }}
      />
    </Tab.Navigator>
  )
}
