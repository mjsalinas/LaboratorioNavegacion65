import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { View, Text, StyleSheet, TextInput,TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';


  export default function IMCTab({ }) {
 
const [peso, setPeso] = useState('');
const [altura, setAltura] = useState('');
const [imc, setImc] = useState('');

function calcularIMC() {

    

  const pesoNum = parseFloat(peso);
  const alturaNum = parseFloat(altura);

  if (!isNaN(pesoNum) && !isNaN(alturaNum) && alturaNum > 0) {
    const imcCalculado = pesoNum / (alturaNum * alturaNum);
    setImc(imcCalculado.toFixed(2));
  } else {
    setImc('Datos inválidos');
  }}

 return (
    <View style={styles.container}>
      <Text>IMC Tab</Text> 
      <Text>Peso en KG</Text>

      <TextInput 
      value={peso}
      onChangeText={setPeso}
      placeholder="Ingrese su peso en KG"
      keyboardType="numeric"
      style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginBottom: 10, width: 200 }}
      />
      <Text>Altura en M</Text>
      <TextInput
        value={altura}
        onChangeText={setAltura}
        placeholder="Ingrese su altura en M"
        keyboardType="numeric"
        style={{ borderWidth: 1, borderColor: 'gray', padding: 5, marginBottom: 10, width: 200 }}
      />
        <TouchableOpacity onPress={calcularIMC} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white' }}>Calcular IMC</Text>
          <Text>IMC: {imc}</Text>
        </TouchableOpacity>
    </View>
  );
}
      
    

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   },

})