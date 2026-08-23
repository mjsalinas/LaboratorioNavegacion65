import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importamos las pantallas de los tabs
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// 1. Tipado estricto para las pestañas (TabsParamList)
export type TabsParamList = {
    Inicio: { email: string };
    IMC: undefined;
    Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

// Recibimos "route" para extraer el email que viene del LoginScreen
export default function TabsNavigator({ route }: any) {
    // Extraemos el email del parámetro
    const email = route.params?.email || 'Usuario';

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // Configuración dinámica de los íconos
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';
                    
                    if (route.name === 'Inicio') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'IMC') {
                        iconName = focused ? 'calculator' : 'calculator-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'person' : 'person-circle-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#5f0650', // El color morado/vino que estás usando
                tabBarInactiveTintColor: 'gray',
                headerShown: false, // Ocultamos el header nativo superior
            })}
        >
            <Tab.Screen 
                name="Inicio" 
                component={HomeTab} 
                initialParams={{ email }} // Pasamos el email a la pestaña Inicio
            />
            <Tab.Screen 
                name="IMC" 
                component={IMCTab} 
            />
            <Tab.Screen 
                name="Perfil" 
                component={ProfileTab} 
                initialParams={{ email }} // Pasamos el email a la pestaña Perfil
            />
        </Tab.Navigator>
    );
}