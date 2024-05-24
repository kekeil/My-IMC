import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { s } from "./App.style";
import imcImage from "./assets/imc.png";
import { ResulatIMC } from "./components/resulatIMC/resultatIMC";
import { ButtonCalculer } from "./components/buttonConvert/buttonConvert";
import { InputData } from "./components/inputData/inputData";
import { inputPoids, inputTaille } from "./constants/constant";
import { useState } from "react";
import { calculIMC } from "./services/calcul";
export default function App() {
 const [stateTaille, setStateTaille] = useState("");
const  [statePoids, setStatePoids] = useState("");
const [imc, setImc] = useState("");


  function calculFinalIMC() {
    const tailleAsFloat = Number.parseFloat(stateTaille.replace(',', '.')); // Remplacement de la virgule par un point
    const poidsAsFloat = Number.parseFloat(statePoids.replace(',', '.')); // Remplacement de la virgule par un point
    if (isNaN(tailleAsFloat) || isNaN(poidsAsFloat)) {
      return "";
    }
      return calculIMC(tailleAsFloat, poidsAsFloat).toFixed(1);
  }

  function handleCalculer() {
    const imcValue = calculFinalIMC();
    setImc(imcValue);
  }
  return (
    <>
      <View style={s.container}>
        <ImageBackground
          source={imcImage}
          style={s.header}
          resizeMode="contain"
        >
          <ResulatIMC imc={imc}/>
          
        </ImageBackground>

        <View style={s.body}>
          <InputData data={inputTaille} onChangeText={setStateTaille} />
          <InputData data={inputPoids} onChangeText={setStatePoids} />

          <ButtonCalculer onPress={handleCalculer}/>
        </View>
      </View>
    </>
  );
}
