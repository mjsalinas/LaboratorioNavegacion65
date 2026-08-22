import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './StackNavigator';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
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

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'IMC') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          } else if (route.name === 'Perfil') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeTab} 
        initialParams={{ email }} 
      />
      <Tab.Screen 
        name="IMC" 
        component={IMCTab} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileTab} 
        initialParams={{ email }} 
      />
    </Tab.Navigator>
  );
}
