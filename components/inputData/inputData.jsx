import {TextInput,View} from "react-native";
import {s} from "./inputData.style"

export function InputData ({data,onChangeText}){


    return (<>
    <View style={s.container}>
        <TextInput
          style={s.input}
          placeholder={` ${data}`}
          keyboardType="default"
          onChangeText={onChangeText}
        />
      </View>
    </>);
}