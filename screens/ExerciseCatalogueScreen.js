import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import {exercises} from "../assets/data/ejercicios";
import styles from "../styles/ExerciseCatalogueStyles";
import MuscleFilter from "../components/specific/MuscleFilter";
import ExerciseItem from "../components/specific/ExerciseItem";
import SearchBar from "../components/specific/SearchBar";
import { muscles } from "../assets/data/ejercicios";

const ExerciseCatalogueScreen = ({navigation}) => {
  const [selectedMuscle, setSelectedMuscle] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState(exercises);
  const [searchExercises, setSearchExercises] = useState("");

  useEffect(() => {
    filterExercises();
  }, [selectedMuscle, searchExercises]);

  const filterExercises = () => {
    let result = exercises;
  
    // Primero, filtrar por músculo si se ha seleccionado alguno
    if (selectedMuscle.length > 0 && !selectedMuscle.includes("All")) {
      result = result.filter((exercise) =>
        selectedMuscle.some((muscle) => exercise.muscle.includes(muscle))
      );
    }
  
    // Luego, filtrar el resultado por el texto de búsqueda si hay alguno
    if (searchExercises) {
      result = result.filter((exercise) =>
        exercise.name.toLowerCase().includes(searchExercises.toLowerCase())
      );
    }
  
    setFilteredExercises(result);
  };
  

  const toggleMuscleSelection = (muscle) => {
    if (selectedMuscle.includes(muscle)) {
      setSelectedMuscle(selectedMuscle.filter((m) => m !== muscle));
    } else {
      setSelectedMuscle([...selectedMuscle, muscle]);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar
        searchQuery={searchExercises}
        setSearchQuery={setSearchExercises}
      />
      <MuscleFilter
        muscles={muscles}
        selectedMuscle={selectedMuscle}
        toggleMuscleSelection={toggleMuscleSelection}
      />
      <View style={styles.cardList}>
        <Text style={styles.title}>Ejercicios</Text>
      </View>
      <FlatList
        style={styles.exerciseList}
        data={filteredExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}>
          <ExerciseItem item={item}/>
        </TouchableOpacity>}
      />
    </View>
  );
};

export default ExerciseCatalogueScreen;
