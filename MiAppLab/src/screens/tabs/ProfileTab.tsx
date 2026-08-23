import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';

type Props = {
  route: RouteProp<RootStackParamList, 'MainTabs'>;
};

export default function ProfileTab({ route }: Props) {
  const { email } = route.params;   
  const [nombre,setNombre]=useState('');
  const [edad,setEdad]=useState('');

  return (
    <View style={styles.container}>
      <Text>Profile Tab</Text>
      <Text>Email: {email}</Text>
      <TextInput
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
        style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginBottom: 10, width: 200 }}
      />
      <TextInput
        value={edad}
        onChangeText={setEdad}
        placeholder="Ingrese su edad"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginBottom: 10, width: 200 }}
      />
      <Text>Nombre: {nombre}</Text>
      <Text>Edad: {edad}</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,    },
});