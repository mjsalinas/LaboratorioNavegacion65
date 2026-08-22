import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
};

export default function CustomButton({ title, onPress, variant = 'primary' }: Props) {
  const buttonStyle = styles[variant];

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 14,
    marginVertical: 8,
    alignItems: 'center',
  },
  primary: { backgroundColor: '#5f0650' },
  secondary: { backgroundColor: '#888888' },
  danger: { backgroundColor: '#c0392b' },
  text: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});