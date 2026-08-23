import { createNavigationContainerRef,CommonActions } from '@react-navigation/native'; 
import { RootStackParamList } from './StackNavigator'; 

export const navigationRef = createNavigationContainerRef<RootStackParamList>(); 

// Función para resetear el stack y volver al Login
export function resetToLogin() {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        );
    }
}