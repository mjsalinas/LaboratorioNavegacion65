import React, { useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

type Props = {
  type?: 'text' | 'email' | 'password' | 'number' | 'phone';
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

export default function CustomInput({
  type = 'text',
  placeholder,
  value,
  onChange,
}: Props) {
  const [secure, setSecure] = useState(type === 'password');
  const isPassword = type === 'password';

  let icon: keyof typeof MaterialIcons.glyphMap | undefined;
  if (type === 'email') icon = 'alternate-email';
  else if (type === 'password') icon = 'lock';
  else if (type === 'phone') icon = 'phone-android';

  let keyboard: KeyboardTypeOptions = 'default';
  if (type === 'email') keyboard = 'email-address';
  else if (type === 'phone' || type === 'number') keyboard = 'phone-pad';

  const getError = () => {
    if (!value) return undefined;
    if (type === 'email' && !value.includes('@')) {
      return 'Correo invalido';
    }
    if (type === 'password' && value.length < 4) {
      return 'Contrasena muy corta';
    }
    if (type === 'phone' && value.length < 8) {
      return 'Numero telefonico invalido';
    }
    if (type === 'number' && isNaN(Number(value))) {
      return 'Debe ser un valor numerico';
    }
    return undefined;
  };

  const error = getError();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, error ? styles.errorBorder : null]}>
        {icon && <MaterialIcons name={icon} size={22} color="#555" />}
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={styles.input}
          secureTextEntry={secure}
          keyboardType={keyboard}
          autoCapitalize={type === 'email' || type === 'password' ? 'none' : 'sentences'}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Ionicons name={secure ? 'eye' : 'eye-off'} size={22} color="#555" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
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
    borderColor: '#ccc',
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
