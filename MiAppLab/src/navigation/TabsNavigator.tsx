import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';
import { RootStackParamList } from './StackNavigator';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  const route = useRoute<RouteProp<RootStackParamList, 'MainTabs'>>();
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'IMC') {
            iconName = 'calculator';
          } else {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
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