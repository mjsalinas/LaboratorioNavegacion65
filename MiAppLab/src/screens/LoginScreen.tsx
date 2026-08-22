import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../components/CustomButton';
import CustomInput from '../components/CustomInput';
import type { RootStackParamList } from '../navigation/StackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (email.includes('@') && password.length >= 4) navigation.navigate('MainTabs', { email });
  };

  return (
    <View style={styles.container}>
      <Ionicons name="shield-checkmark" size={72} color="#5f0650" />
      <Text style={styles.title}>Bienvenido/a</Text>
      <Text style={styles.subtitle}>Ingresa para continuar</Text>
      <CustomInput type="email" placeholder="Correo electronico" value={email} onChange={setEmail} />
      <CustomInput type="password" placeholder="Contrasena" value={password} onChange={setPassword} />
      <CustomButton title="Iniciar sesion" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#5f0650', textAlign: 'center', marginTop: 16 },
  subtitle: { color: '#777', textAlign: 'center', marginBottom: 28 },
});