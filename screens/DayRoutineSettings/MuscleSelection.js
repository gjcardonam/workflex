import { Alert, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { muscles } from "../../assets/data/ejercicios";

const MuscleSelection = ({ navigation, route }) => {
    const { item } = route.params;
    const [selectedMuscles, setSelectedMuscles] = useState([]);

    const handleMuscleSelection = (muscle) => {
        if (selectedMuscles.includes(muscle)) {
            setSelectedMuscles(selectedMuscles.filter((m) => m !== muscle));
        } else {
            setSelectedMuscles([...selectedMuscles, muscle]);
        }
    };

    return (
        <View>
            <Text>Agrega una rutina para el {item.dia}</Text>
            <Text>Selecciona el musculo a trabajar</Text>
            {muscles.map((muscle) => (
                <TouchableOpacity
                    key={muscle}
                    onPress={() => handleMuscleSelection(muscle)}
                    style={{
                        backgroundColor: selectedMuscles.includes(muscle) ? 'lightgreen' : 'lightgrey',
                        padding: 10,
                        margin: 5,
                    }}
                >
                    <Text>{muscle}</Text>
                </TouchableOpacity>
            ))}
            <TouchableOpacity
                onPress={() => navigation.navigate('DafaultExcercise', { item: item, selectedMuscles: selectedMuscles })}
                style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>Continuar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MuscleSelection;