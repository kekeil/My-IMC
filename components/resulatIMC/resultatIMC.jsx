import {Text} from "react-native"
import {s} from "./resultatIMC.style"



export function ResulatIMC({ imc }) {
    const getIMCStyle = (imc) => {
      if (imc < 18.5) {
        return [s.text, s.maigreur];
      } else if (imc >= 18.5 && imc < 25) {
        return [s.text, s.normal];
      } else if (imc >= 25 && imc < 30) {
        return [s.text, s.surpoids];
      } else if (imc >= 30 && imc < 35) {
        return [s.text, s.obesite];
      } else {
        return [s.text, s.obesiteSevere];
      }
    };
  
    return (
      <Text style={getIMCStyle(imc)}>
        Votre indice de masse corporel est : {imc}
      </Text>
    );
  }