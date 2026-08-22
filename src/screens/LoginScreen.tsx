import { CustomButton } from '@components/CustomButton'
import { CustomInput } from '@components/CustomInput'
import { RootStackParamList } from '@navigation/StackNavigator'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const handleLogin = () => {
    if (email && password.length >= 4)
      navigation.navigate('MainTabs', { email })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Login</Text>
      <Text style={styles.subtitle}>
        Ingresa tus credenciales para continuar
      </Text>

      <CustomInput
        type="email"
        value={email}
        placeholder="Ingresa tu correo"
        onChange={setEmail}
      />
      <CustomInput
        type="password"
        value={password}
        placeholder="Ingresa tu contraseña"
        onChange={setPassword}
      />

      <CustomButton title={'Iniciar Sesión'} onPress={handleLogin} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5f0650',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginBottom: 32,
  },
  email: {
    fontSize: 14,
    color: '#5f0650',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '600',
  },
})
