import { FlatList, View, Text, TouchableOpacity } from "react-native";
import DayRoutine from "../components/specific/DayRoutine";
import React, { useState } from "react";
import styles from "../styles/DailyRoutineScreenStyle";
import rutinasSemanales from "../assets/data/rutinas";

const DailyRoutineScreen = ({ navigation }) => {
  const [rutinas, setRutinas] = useState(rutinasSemanales);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rutinas Diarias</Text>
      <Text style={styles.date}>Fecha</Text>
      <FlatList
        style={styles.routinelist}
        data={rutinas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (item.rutina === "Descanso") {
                navigation.navigate("MuscleSelection", { item: item });
              } else {
                navigation.navigate("RoutineDetail", { item: item });
              }
            }}
          >
            <DayRoutine item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DailyRoutineScreen;
