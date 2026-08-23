import { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

// Tipado estricto para las props de navegación de esta pantalla
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
    // Estados para almacenar lo que el usuario escribe
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handleLogin = () => {
        if (email && password.length >= 4) {
            navigation.navigate('MainTabs', { email });
        }
    };

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.formContainer}>
                <Text style={styles.title}>Iniciar Sesión</Text>
                
                <CustomInput 
                    type="email"
                    placeholder="Ingresa tu correo"
                    value={email}
                    onChange={setEmail} // Conectado al CustomInput que tienes
                />
                
                <CustomInput 
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={setPassword}
                />
                
                <View style={styles.buttonContainer}>
                    <CustomButton 
                        title="Ingresar" 
                        onPress={handleLogin} 
                        variant="primary" 
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
    },
    formContainer: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        marginTop: 15,
    }
});