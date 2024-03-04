import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
// import {exercises} from "../assets/data/ejercicios";
import styles from "../styles/ExerciseCatalogueStyles";
import MuscleFilter from "../components/specific/MuscleFilter";
import ExerciseItem from "../components/commons/ExerciseItem";
import SearchBar from "../components/specific/SearchBar";
import { muscles } from "../assets/data/ejercicios";
import axios from "axios";

const ExerciseCatalogueScreen = ({navigation}) => {
  const [selectedMuscle, setSelectedMuscle] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);
  const [searchExercises, setSearchExercises] = useState("");

  useEffect(() => {
    fetchExercises();
  }, []);

  // useEffect(() => {
  //   if (selectedMuscle.length > 0 || searchExercises) {
  //     filterExercises();
  //   }
  // }, [selectedMuscle, searchExercises]);

  useEffect(() => {
    filterExercises();
  }, [selectedMuscle, searchExercises]);

  const fetchExercises = async () => {
    try {
      const response = await axios.get('http://192.168.1.7:3000/exercises/');
      setFilteredExercises(response.data);
    } catch (error) {
      console.error("Hubo un error al obtener los ejercicios:", error);
    }
  };

  const filterExercises = async () => {
    try {
      if (selectedMuscle.length > 0 && !selectedMuscle.includes("All")) {
        const response = await axios.get('http://192.168.1.7:3000/exercises/filter', {
          params: {
            muscleGroup: selectedMuscle.join(','),
          }
        });
        setFilteredExercises(response.data);
      } else
      if (searchExercises) {
        const response = await axios.get('http://192.168.1.7:3000/exercises/filter', {
          params: {
            name: searchExercises,
          }
        });
        setFilteredExercises(response.data);
      }
      else {
        fetchExercises();
      }
    } catch (error) {
      console.error("Hubo un error al filtrar los ejercicios:", error);
    }
  };

  // const filterExercises = () => {
  //   let result = exercises;
  
  //   // Primero, filtrar por músculo si se ha seleccionado alguno
  //   if (selectedMuscle.length > 0 && !selectedMuscle.includes("All")) {
  //     result = result.filter((exercise) =>
  //       selectedMuscle.some((muscle) => exercise.muscle.includes(muscle))
  //     );
  //   }
  
  //   // Luego, filtrar el resultado por el texto de búsqueda si hay alguno
  //   if (searchExercises) {
  //     result = result.filter((exercise) =>
  //       exercise.name.toLowerCase().includes(searchExercises.toLowerCase())
  //     );
  //   }
  
  //   setFilteredExercises(result);
  // };

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
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}>
          <ExerciseItem item={item}/>
        </TouchableOpacity>}
      />
    </View>
  );
};

export default ExerciseCatalogueScreen;
