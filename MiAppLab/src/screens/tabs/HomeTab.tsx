
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/StackNavigator';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  route: RouteProp<RootStackParamList, 'MainTabs'>;
};


export default function HomeTab({ route }: Props) {
  const { email } = route.params;   


  return (


    <View style={styles.container}>
      <Text>Home Tab</Text>
      <Text>Email: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
