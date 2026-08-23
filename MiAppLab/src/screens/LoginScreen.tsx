import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // La función que venía en tu documento
  const handleLogin = () => {
    if (email && password.length >= 4) {
      navigation.navigate('MainTabs', { email });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
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
      <CustomButton title="Ingresar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 24, textAlign: 'center', color: '#5f0650' }
});