import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import { useState } from 'react';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

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
      <Text style={styles.title}>MiAppLab</Text>
      <Text style={styles.subtitle}>Iniciar sesión</Text>

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
        title="Iniciar sesión"
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
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5f0650',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
    color: '#555',
  },
});