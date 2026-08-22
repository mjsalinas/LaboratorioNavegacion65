import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import type { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password.length >= 4) {
      navigation.navigate('MainTabs', { email });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <CustomInput
        type='email'
        placeholder='Correo'
        value={email}
        onChange={setEmail}
      />

      <CustomInput
        type='password'
        placeholder='Contraseña'
        value={password}
        onChange={setPassword}
      />

      <CustomButton
        title='Iniciar sesión'
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
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#5f0650',
    textAlign: 'center',
  },
});