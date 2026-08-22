import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';
import type { RootStackParamList } from './StackNavigator';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: { email: string };
  Perfil: { email: string };
};

const Tabs = createBottomTabNavigator<TabsParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export default function TabsNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tabs.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#5f0650',
      tabBarIcon: ({ color, size, focused }) => {
        const name = route.name === 'Inicio' ? (focused ? 'home' : 'home-outline') : route.name === 'IMC' ? (focused ? 'calculator' : 'calculator-outline') : (focused ? 'person' : 'person-outline');
        return <Ionicons name={name} size={size} color={color} />;
      },
    })}>
      <Tabs.Screen name="Inicio" component={HomeTab} initialParams={{ email }} />
      <Tabs.Screen name="IMC" component={IMCTab} initialParams={{ email }} />
      <Tabs.Screen name="Perfil" component={ProfileTab} initialParams={{ email }} />
    </Tabs.Navigator>
  );
}