import React from "react";
import { ScrollView, TouchableOpacity, Text, Image } from "react-native";
import styles from "../../styles/MuscleFilterStyles"; // Asume que tienes estilos específicos para este componente

const muscleImages = {
  Piernas: require("../../assets/images/muscles/Piernas.png"),
  Gluteos: require("../../assets/images/muscles/Gluteos.png"),
  Pectorales: require("../../assets/images/muscles/Pectorales.png"),
  Abdominales: require("../../assets/images/muscles/Abdominales.png"),
  Biceps: require("../../assets/images/muscles/Biceps.png"),
  Triceps: require("../../assets/images/muscles/Triceps.png"),
  Espalda: require("../../assets/images/muscles/Espalda.png"),
  Hombros: require("../../assets/images/muscles/Hombros.png"),
  Pantorrillas: require("../../assets/images/muscles/Pantorrillas.png"),
  Antebrazos: require("../../assets/images/muscles/Antebrazos.png"),
};

const MuscleFilter = ({ muscles, selectedMuscle, toggleMuscleSelection }) => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    {muscles.map((muscle, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => toggleMuscleSelection(muscle)}
        style={[
          styles.filterButton,
          selectedMuscle.includes(muscle) ? styles.selectedButton : {},
        ]}
      >
        {muscleImages[muscle] && (
          <Image
            source={muscleImages[muscle]}
            style={[
              styles.muscleIcon,
              selectedMuscle.includes(muscle) ? styles.selectedMuscleIcon : {},
            ]}
          />
        )}
        <Text
          style={[
            styles.buttonText,
            selectedMuscle.includes(muscle) ? styles.selectedButtonText : {},
          ]}
        >
          {muscle}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);

export default MuscleFilter;
