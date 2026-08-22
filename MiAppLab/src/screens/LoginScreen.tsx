import { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { RootStackParamList } from '../navigation/StackNavigator';

type Props =
  NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({
  navigation,
}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email.includes('@')) {
      Alert.alert(
        'Datos incompletos',
        'Ingresa un correo válido.',
      );
      return;
    }

    if (password.length < 4) {
      Alert.alert(
        'Datos incompletos',
        'La contraseña debe tener al menos 4 caracteres.',
      );
      return;
    }

    navigation.navigate('MainTabs', { email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <Text style={styles.subtitle}>
        Ingresa tus datos para continuar
      </Text>

      <CustomInput
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={setEmail}
      />

      <CustomInput
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={setPassword}
      />

      <CustomButton
        title="Ingresar"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5f0650',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 28,
  },
});