import React from "react";
import { useState } from "react";
import {
  Dimensions,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import rutinasSemanales from "../assets/data/rutinas.js";
import ExerciseItem from "../components/commons/ExerciseItem";
import { TabView, TabBar } from 'react-native-tab-view';


const { width } = Dimensions.get("window"); // Obtén el ancho de la pantalla

const RoutineScreen = ({ route, navigation }) => {
  const { item } = route.params;
  const routine = rutinasSemanales.find((routine) => routine.dia === item.dia);

  const [exercises, setExercises] = useState(
    routine.exercises.map((exercise) => ({
      ...exercise,
      series: [{ repeticiones: "", peso: "" }],
    }))
  );
  const [routes] = useState(exercises.map((exercise, index) => ({
    key: `exercise_${index}`,
    title: exercise.name,
    exercise,
  })));
  const [index, setIndex] = useState(0);

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

  const ExerciseScene = ({ route }) => {
    const { exercise } = route;
    return (
      <View style={styles.scene}>
        <ExerciseItem item={exercise} />
        {exercise.series.map((serie, seriesIndex) => (
          <View key={seriesIndex} style={styles.seriesContainer}>
            <Text>Series {seriesIndex + 1}</Text>
            <TextInput
              style={styles.input}
              placeholder="Repeticiones"
              keyboardType="number-pad"
              value={serie.repeticiones}
              onChangeText={(text) => handleSeriesChange(exercise.id, seriesIndex, "repeticiones", text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Peso"
              keyboardType="number-pad"
              value={serie.peso}
              onChangeText={(text) => handleSeriesChange(exercise.id, seriesIndex, "peso", text)}
            />
          </View>
        ))}
      </View>
    );
  };

  const renderScene = ({ route }) => {
    return <ExerciseScene route={route} />;
  };
  
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: Dimensions.get('window').width }}
      renderTabBar={props => <TabBar {...props} scrollEnabled />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Asegura que el contenedor principal use todo el espacio disponible
  },
  exerciseContainer: {
    width, // Asegura que cada contenedor de ejercicio tenga el ancho de la pantalla
    flex: 1, // Asegura que se expanda para usar todo el espacio vertical disponible
    alignItems: "center", // Centra los elementos horizontalmente
    justifyContent: "center", // Centra los elementos verticalmente
  },
  seriesContainer: {
    marginVertical: 5, // Añade un poco de espacio vertical entre los inputs
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: width * 0.8, // Ajusta el ancho del input al 80% del ancho de la pantalla
  },
  titlesContainer: {
    backgroundColor: '#f0f0f0', // Un color de fondo neutro para el contenedor de los títulos
    paddingHorizontal: 10, // Añade algo de espacio a los lados para que no esté pegado al borde
    paddingVertical: 5, // Espacio vertical para dar un poco de margen arriba y abajo
  },
  titleItem: {
    marginHorizontal: 8, // Añade espacio entre los títulos para separarlos
    paddingVertical: 5, // Espacio vertical para hacer cada título más tocable
    paddingHorizontal: 10, // Espacio horizontal para no tener texto pegado a los bordes del botón
    borderRadius: 20, // Bordes redondeados para los títulos
    backgroundColor: '#e0e0e0', // Un color de fondo suave para los elementos de título
    alignItems: 'center', // Alinea el texto en el centro (horizontalmente) del TouchableOpacity
    justifyContent: 'center', // Alinea el texto en el centro (verticalmente) del TouchableOpacity
  },
  activeTitle: {
    backgroundColor: '#007bff', // Un color más oscuro o diferente para el título activo
    color: 'white', // Cambia el color del texto para el título activo para mejorar la legibilidad
  },
  activeTitleText: {
    color: 'white', // Asegura que el texto sea legible contra el fondo oscuro
  },
});

export default RoutineScreen;
