

import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1. Tipado del Stack
export type RootStackParamList = {
  Login: undefined;
  MainTabs: { email: string };  // pasa el email al Tab Navigator
};

const Stack = createNativeStackNavigator<RootStackParamList>();


















