import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import { TabsParamList } from "../navigation/TabsNavigator";
import CustomInput from "../components/CustomInput";
import { RootStackParamList } from "../navigation/StackNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import CustomButton from "../components/CustomButton";
import { StyleSheet, Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>

export default function LoginScreen({navigation}: Props){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const handleLogin = () => {
    if (email && password.length >= 4) {
        navigation.navigate('MainTabs', { email });
    }
};

return(
    <View style = {stlyes.container}>
    <Text style = {stlyes.title}>Inicia Sesion</Text>
    <CustomInput
    type = "email"
    placeholder= "Ingrese su correo"
    value= {email}
    onChange={setEmail}
    />

    <CustomInput
    type="password"
    placeholder="Ingrese su contraseña"
    value={password}
    onChange={setPassword}
    />

    <CustomButton
    title="Iniciar Sesion" 
    onPress={handleLogin} 
    />

    </View>
)

}

const stlyes = StyleSheet.create({
container:{
 flex: 1,
 textAlign: "center",
justifyContent: "center",
paddingHorizontal: 30,
},
title:{
fontSize: 20,
textAlign: "center",
paddingVertical: 30,
}


}
)