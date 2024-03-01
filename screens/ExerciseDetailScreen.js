import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../styles/ExerciseDetailScreenStyles";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const muscleImages = {
  Piernas: require("../assets/images/muscles/Piernas.png"),
  Gluteos: require("../assets/images/muscles/Gluteos.png"),
  Pectorales: require("../assets/images/muscles/Pectorales.png"),
  Abdominales: require("../assets/images/muscles/Abdominales.png"),
  Biceps: require("../assets/images/muscles/Biceps.png"),
  Triceps: require("../assets/images/muscles/Triceps.png"),
  Espalda: require("../assets/images/muscles/Espalda.png"),
  Hombros: require("../assets/images/muscles/Hombros.png"),
  Pantorrillas: require("../assets/images/muscles/Pantorrillas.png"),
  Antebrazos: require("../assets/images/muscles/Antebrazos.png"),
};

const ExerciseDetailScreen = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.exerciseDetailcontainer}>
      <View style={styles.exerciseDetail}>
        <Text style={styles.detailName}>{exercise.name}</Text>
        <View style={styles.muscleSub}>
          <Text style={styles.detailMuscleSub}>Musculos: </Text>
          {muscleImages[exercise.muscle] && (
            <Image
              source={muscleImages[exercise.muscle]}
              style={styles.detailMuscleIcon}
            />
          )}
        </View>
        <View style={styles.gifView}>
          <Image style={styles.gif} source={exercise.gif} />
        </View>
        <TouchableOpacity style={styles.detailVideoButton}>
          <MaterialIcons name="movie" size={35} color="white" />
          <Text style={styles.textButton}>Explicación en Video</Text>
        </TouchableOpacity>
        <Text style={styles.detailDescriptionSub}>Descripción: </Text>
        <Text style={styles.detailDescription}>{exercise.description}</Text>
        <Text style={styles.detailDescriptionSub}>Recomendación: </Text>
      </View>
    </View>
  );
};

export default ExerciseDetailScreen;
