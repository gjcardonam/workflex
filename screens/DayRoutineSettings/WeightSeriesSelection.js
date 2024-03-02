import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React, { useState } from "react";
import ExerciseItem from "../../components/commons/ExerciseItem";

const WeightSeriesSelection = ({ route, navigation }) => {
  const { item, selectedMuscles, selectedExercises } = route.params;
  const [exercises, setExercises] = useState(
    selectedExercises.map((exercise) => ({
      ...exercise,
      series: [{ repeticiones: "", peso: "" }],
    }))
  );

  const handleSeriesChange = (exerciseId, seriesIndex, field, value) => {
    const newExercises = exercises.map((exercise) => {
      if (exercise.id === exerciseId) {
        const updatedSeries = [...exercise.series];
        updatedSeries[seriesIndex] = {
          ...updatedSeries[seriesIndex],
          [field]: value,
        };

        // Si se está actualizando la última serie, añadir una nueva
        if (seriesIndex === exercise.series.length - 1) {
          updatedSeries.push({ repeticiones: "", peso: "" });
        }

        return { ...exercise, series: updatedSeries };
      }
      return exercise;
    });

    setExercises(newExercises);
  };

  return (
    <View style={{ flex: 1 }}>
      <Text>
        Selecciona las series y pesos para los ejercicios seleccionados
      </Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item: exercise }) => (
          <View>
            <ExerciseItem item={exercise} />
            {exercise.series.map((serie, seriesIndex) => (
              <View key={seriesIndex}>
                <Text>Series {seriesIndex + 1}</Text>
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  placeholder="Repeticiones"
                  keyboardType="number-pad"
                  value={serie.repeticiones}
                  onChangeText={(text) =>
                    handleSeriesChange(
                      exercise.id,
                      seriesIndex,
                      "repeticiones",
                      text
                    )
                  }
                />
                <TextInput
                  style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
                  placeholder="Peso"
                  keyboardType="number-pad"
                  value={serie.peso}
                  onChangeText={(text) =>
                    handleSeriesChange(exercise.id, seriesIndex, "peso", text)
                  }
                />
              </View>
            ))}
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DailyRoutine", {
            item: item,
            selectedMuscles: selectedMuscles,
            selectedExercises: selectedExercises,
            exercises: exercises,
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

export default WeightSeriesSelection;
