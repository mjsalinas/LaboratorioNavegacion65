import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tabs = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator() {
  return (
    <Tabs.Navigator
      initialRouteName="Inicio"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'IMC') {
            iconName = 'calculator';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email: '' }}
      />
      <Tabs.Screen
        name="IMC"
        component={IMCTab}
      />
      <Tabs.Screen
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email: '' }}
      />
    </Tabs.Navigator>
  );
}