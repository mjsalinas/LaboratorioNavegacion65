import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import type { TabsParamList } from '../../navigation/TabsNavigator';
import { useState } from 'react';

type Props = BottomTabScreenProps<TabsParamList, 'IMC'>;

export default function IMCTab(_props: Props) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const calcular = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (p > 0 && a > 0) setResultado(Math.round((p / (a * a)) * 10) / 10);
  };
  const categoria = resultado === null ? null : resultado < 18.5 ? { label: 'Bajo peso', color: '#3498db' } : resultado < 25 ? { label: 'Normal', color: '#27ae60' } : resultado < 30 ? { label: 'Sobrepeso', color: '#e67e22' } : { label: 'Obesidad', color: '#c0392b' };

  return <View style={styles.container}>
    <Text style={styles.title}>Calculadora de IMC</Text>
    <CustomInput type="number" placeholder="Peso (kg)" value={peso} onChange={setPeso} />
    <CustomInput type="number" placeholder="Altura (cm)" value={altura} onChange={setAltura} />
    <CustomButton title="Calcular" onPress={calcular} />
    {resultado !== null && categoria && <View style={styles.result}><Text style={styles.imcNum}>{resultado}</Text><Text style={[styles.categoria, { color: categoria.color }]}>{categoria.label}</Text></View>}
  </View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#5f0650' },
  result: { alignItems: 'center', marginTop: 24 },
  imcNum: { fontSize: 64, fontWeight: 'bold', color: '#5f0650' },
  categoria: { fontSize: 22, fontWeight: '600', marginTop: 4 },
});