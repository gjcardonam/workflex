import { Text, View, TouchableOpacity, Alert } from "react-native";
import { exercises } from "../../assets/data/ejercicios";

const DefaultExcersises = ({ route, navigation }) => {
  const { item, selectedMuscles } = route.params;

  const filterExercises = () => {
    let result = exercises;
    result = result.filter((exercise) =>
      selectedMuscles.some((muscle) => exercise.muscle.includes(muscle))
    );
    result = result.filter((exercise) => exercise.recomendado === true);
  return result;
  };

  return (
    <View>
      <Text>Quieres dejar los ejercicios recomendados?</Text>
      <TouchableOpacity
        onPress={() =>
            navigation.navigate("DefaultWeightSeries", {
                item: item,
                selectedMuscles: selectedMuscles,
                selectedExercises: filterExercises(),
              })
        }
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 5,
        }}
      >
        <Text>Si</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("ExcersisesSelection", {
            item: item,
            selectedMuscles: selectedMuscles,
          })
        }
        style={{
          backgroundColor: "lightblue",
          padding: 10,
          margin: 5,
        }}
      >
        <Text>No</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DefaultExcersises;
