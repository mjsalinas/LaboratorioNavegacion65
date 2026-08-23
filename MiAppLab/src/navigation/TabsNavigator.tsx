import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// Tipado para los Tabs (necesario para TypeScript)
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: any) {
  // Recibimos el email que viene del LoginScreen
  const { email } = route.params; 

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          if (route.name === 'Inicio') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'IMC') iconName = focused ? 'calculator' : 'calculator-outline';
          else if (route.name === 'Perfil') iconName = focused ? 'person' : 'person-outline';
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: 'gray',
        headerShown: false
      })}
    >
      <Tab.Screen name="Inicio" component={HomeTab} initialParams={{ email }} />
      <Tab.Screen name="IMC" component={IMCTab} />
      <Tab.Screen name="Perfil" component={ProfileTab} initialParams={{ email }} />
    </Tab.Navigator>
  );
}