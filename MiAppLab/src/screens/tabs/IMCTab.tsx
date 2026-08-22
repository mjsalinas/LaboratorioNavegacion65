import { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

export default function IMCTab() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] =
    useState<number | null>(null);

  const calcular = () => {
    const pesoNumerico = parseFloat(peso);
    const alturaEnMetros = parseFloat(altura) / 100;

    if (pesoNumerico > 0 && alturaEnMetros > 0) {
      const imc =
        pesoNumerico /
        (alturaEnMetros * alturaEnMetros);

      setResultado(Math.round(imc * 10) / 10);
    }
  };

  const getCategoria = (imc: number) => {
    if (imc < 18.5) {
      return {
        label: 'Bajo peso',
        color: '#3498db',
      };
    }

    if (imc < 25) {
      return {
        label: 'Normal',
        color: '#27ae60',
      };
    }

    if (imc < 30) {
      return {
        label: 'Sobrepeso',
        color: '#e67e22',
      };
    }

    return {
      label: 'Obesidad',
      color: '#c0392b',
    };
  };

  const categoria =
    resultado !== null
      ? getCategoria(resultado)
      : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Calculadora de IMC
      </Text>

      <CustomInput
        type="number"
        placeholder="Peso (kg)"
        value={peso}
        onChange={setPeso}
      />

      <CustomInput
        type="number"
        placeholder="Altura (cm)"
        value={altura}
        onChange={setAltura}
      />

      <CustomButton
        title="Calcular"
        onPress={calcular}
      />

      {resultado !== null && categoria && (
        <View style={styles.result}>
          <Text style={styles.imcNumber}>
            {resultado}
          </Text>

          <Text
            style={[
              styles.category,
              { color: categoria.color },
            ]}
          >
            {categoria.label}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5f0650',
  },

  result: {
    alignItems: 'center',
    marginTop: 24,
  },

  imcNumber: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#5f0650',
  },

  category: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 4,
  },
});