import { JSX } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

type variants = 'primary' | 'secondary' | 'danger'

type Props = {
  title: string
  onPress: () => void
  variant?: variants
}

export const CustomButton = ({
  title,
  onPress,
  variant = 'primary',
}: Props): JSX.Element => {
  const styles = getStyles(variant)

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const getStyles = (variant: variants) =>
  StyleSheet.create({
    button: {
      borderRadius: 8,
      padding: 14,
      marginVertical: 8,
      alignItems: 'center',
      backgroundColor:
        variant === 'primary'
          ? '#5f0650'
          : variant === 'secondary'
            ? '#888888'
            : '#c0392b',
    },
    text: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  })
