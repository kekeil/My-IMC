import { Text, TouchableOpacity } from "react-native";
import {s} from "./buttonConvert.style"


export function ButtonCalculer({onPress}){

return <>
<TouchableOpacity onPress={onPress} style={s.button}>
<Text style={s.text}>Calculer  </Text>
</TouchableOpacity>

</>
}