import { Text, View } from "react-native";
import styles from "../../styles/DayRoutineStyles"; // Asegúrate de que la ruta es correcta

const DayRoutine = ({ item }) => {
  return (
    <View style={styles.routine}>
      <Text style={styles.dayText}>{item.dia}</Text> 
      <Text style={styles.routineText}>{item.rutina || "Descanso"}</Text> 
      {item.rutina && <Text style={styles.durationText}>{item.duracion}</Text>}
    </View>
  );
};

export default DayRoutine;
