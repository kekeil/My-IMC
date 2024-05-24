import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3498DB",
    justifyContent: "flex-start",
    
  },
  header: {
    height: 350,
    backgroundColor:"white",
    justifyContent:"flex-end",
    alignItems:"center"
  },
  body: {
    height: 400,
    alignItems: "center",
    justifyContent: "space-evenly",
    padding:15,
  },
});
