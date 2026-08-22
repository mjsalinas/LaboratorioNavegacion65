import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './StackNavigator';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Home: { email: string };
  IMC: { email: string };
  Profile: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

type TabsNavigatorRouteProp = RouteProp<RootStackParamList, 'MainTabs'>;

export default function TabsNavigator() {
  const route = useRoute<TabsNavigatorRouteProp>();
  const email = route.params?.email || '';

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'IMC') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeTab} 
        initialParams={{ email }} 
      />
      <Tab.Screen 
        name="IMC" 
        component={IMCTab} 
        initialParams={{ email }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileTab} 
        initialParams={{ email }} 
      />
    </Tab.Navigator>
  );
}
