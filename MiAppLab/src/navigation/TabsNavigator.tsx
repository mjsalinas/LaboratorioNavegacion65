import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// Tipado de los Tabs
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

type TabRouteProp = RouteProp<TabsParamList, keyof TabsParamList>;

export default function TabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: TabRouteProp }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: '#888',
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'IMC') iconName = 'fitness';
          else if (route.name === 'Perfil') iconName = 'pers
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name='Inicio' component={HomeTab} />
      <Tab.Screen name='IMC' component={IMCTab} />
      <Tab.Screen name='Perfil' component={ProfileTab} />
    </Tab.Navigator>
  );
}