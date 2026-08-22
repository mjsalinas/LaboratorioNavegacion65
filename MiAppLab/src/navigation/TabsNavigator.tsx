import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
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

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: 'gray',
    
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'IMC') iconName = 'calculator';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Pasamos el email como parámetro inicial a las pestañas de Inicio y Perfil */}
      <Tab.Screen name="Inicio" component={HomeTab} initialParams={{ email }} />
      <Tab.Screen name="IMC" component={IMCTab} />
      <Tab.Screen name="Perfil" component={ProfileTab} initialParams={{ email }} />
    </Tab.Navigator>
  );
}