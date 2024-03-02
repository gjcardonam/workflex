import { FlatList, View, Text, TouchableOpacity, Modal } from "react-native";
import DayRoutine from "../components/specific/DayRoutine";
import React, { useState } from "react";
import styles from "../styles/DailyRoutineScreenStyle";
import rutinasSemanales from "../data/rutinas";

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
            onPress={() =>
              navigation.navigate("RoutineDetail", { routine: item })
            }
          >
            <DayRoutine item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DailyRoutineScreen;
