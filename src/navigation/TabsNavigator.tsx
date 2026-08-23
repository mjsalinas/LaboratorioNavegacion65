import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./StackNavigator";
import { MaterialIcons } from '@expo/vector-icons';


export type TabsParamList = {
    Inicio: {email: string},
    Perfil: {email: string},
    IMC: undefined,

}

const Tab = createBottomTabNavigator<TabsParamList>();
type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export default function TabNavigator({route}:Props){
const email = route.params;

    return(
       
       <Tab.Navigator
       screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = "home";

          if (route.name === "IMC") {
            iconName = "calculate";
          }

          if (route.name === "Inicio") {
            iconName = "home";
          }

          if (route.name === "Perfil") {
            iconName = "person";
          }

          return (
            <MaterialIcons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
       >
        <Tab.Screen name="Inicio" component = {HomeTab} initialParams={email}/>
        <Tab.Screen name="IMC" component = {IMCTab}/>
        <Tab.Screen name="Perfil" component = {ProfileTab} initialParams={email}/>
       </Tab.Navigator> 

    )

}