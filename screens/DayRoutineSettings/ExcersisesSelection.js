import { Text, View, FlatList, Alert, Touchable } from "react-native";
import { useState, useEffect } from "react";
import ExerciseItem from "../../components/commons/ExerciseItem";
import React from "react";
import styles from "../../styles/ExerciseItemStyles";
import { exercises } from "../../assets/data/ejercicios";
import { TouchableOpacity } from "react-native-gesture-handler";

const ExcersisesSelection = ({ navigation, route }) => {
  const { item, selectedMuscles } = route.params;
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [selectedExercises, setSelectedExercises] = useState([]);

  useEffect(() => {
    filterExercises();
  }, []);

  const filterExercises = () => {
    let result = exercises;
    result = result.filter((exercise) =>
      selectedMuscles.some((muscle) => exercise.muscle.includes(muscle))
    );
    setFilteredExercises(result);
  };

  const handleExerciseSelection = (exercise) => {
    if (selectedExercises.includes(exercise)) {
      setSelectedExercises(selectedExercises.filter((e) => e !== exercise));
    } else {
      setSelectedExercises([...selectedExercises, exercise]);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>Selecciona los ejercicios para la rutina </Text>
      <Text>{item.dia + ': ' + selectedMuscles}: {}</Text>
      <FlatList
        style={styles.selectedMuscles}
        data={filteredExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) =>
        <TouchableOpacity
          onPress={() => handleExerciseSelection(item)}
          style={{
            backgroundColor: selectedExercises.includes(item) ? 'lightgreen' : 'lightgrey',
            padding: 10,
            margin: 5,
          }}
        >
        <ExerciseItem item={item}
         />
         </TouchableOpacity>}
      />
      <Text>Ejercicios seleccionados: {selectedExercises.length}</Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DefaultWeightSeries", {
            item: item,
            selectedMuscles: selectedMuscles,
            selectedExercises: selectedExercises,
          })
        }
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 5,
        }}
      >
        <Text>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExcersisesSelection;
