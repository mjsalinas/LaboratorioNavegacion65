import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState, type ComponentProps } from 'react';

import {
    TextInput,
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    KeyboardTypeOptions,
} from 'react-native';

type Props = {
    type?: 'text' | 'email' | 'password' | 'number';
    placeholder: string;
    value: string;
    onChange: (text: string) => void;
};

type MaterialIconName =
    ComponentProps<typeof MaterialIcons>['name'];

export default function CustomInput({
    type = 'text',
    placeholder,
    value,
    onChange,
}: Props) {
    const [secure, setSecure] = useState(type === 'password');

    const isPassword = type === 'password';

    const icon: MaterialIconName | undefined =
        type === 'email'
            ? 'alternate-email'
            : type === 'password'
                ? 'lock'
                : type === 'number'
                    ? 'phone-android'
                    : undefined;

    const keyboard: KeyboardTypeOptions =
        type === 'email'
            ? 'email-address'
            : type === 'number'
                ? 'phone-pad'
                : 'default';

    const getError = () => {
        if (!value) {
            return undefined;
        }

        if (type === 'email' && !value.includes('@')) {
            return 'Correo inválido';
        }

        if (type === 'password' && value.length < 4) {
            return 'Contraseña muy corta';
        }

        if (
            type === 'number' &&
            (Number.isNaN(Number(value)) || Number(value) <= 0)
        ) {
            return 'Número inválido';
        }

        return undefined;
    };

    const error = getError();

    return (
        <View style={styles.wrapper}>
            <View
                style={[
                    styles.container,
                    error ? styles.errorBorder : null,
                ]}
            >
                {icon && (
                    <MaterialIcons
                        name={icon}
                        size={22}
                        color="#555"
                    />
                )}

                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChange}
                    style={styles.input}
                    secureTextEntry={secure}
                    keyboardType={keyboard}
                    autoCapitalize={
                        type === 'email' ? 'none' : 'sentences'
                    }
                />

                {isPassword && (
                    <TouchableOpacity
                        onPress={() => setSecure(!secure)}
                    >
                        <Ionicons
                            name={secure ? 'eye' : 'eye-off'}
                            size={22}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {error && (
                <Text style={styles.errorText}>{error}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12,
    },

    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#cccccc',
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 12,
        paddingVertical: 4,
    },

    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 8,
    },

    errorBorder: {
        borderColor: 'red',
    },

    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 2,
    },
});