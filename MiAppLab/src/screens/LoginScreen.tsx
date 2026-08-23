import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator'
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';  

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};


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
      <Text>Login</Text>

      <CustomInput
        value={email}
        onChange={setEmail}
        placeholder="Correo electrónico"
        type="email"
      />
      <CustomInput
        value={password}
        onChange={setPassword}
        placeholder="Contraseña"
        type="password"
      />

      <CustomButton title="Iniciar sesión" onPress={handleLogin} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});