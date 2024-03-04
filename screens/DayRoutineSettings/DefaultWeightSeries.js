import { Text, View, TouchableOpacity } from 'react-native';

const DefaultWeightSeries = ({ route, navigation }) => {
    const { item, selectedMuscles, selectedExercises } = route.params;
    
    return (
        <View>
            <Text>Quieres dejar las series y pesos recomendados?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('DailyRoutine')}
                style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('WeightSeriesSelection', { item: item, selectedMuscles: selectedMuscles, selectedExercises: selectedExercises })}
                style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>No</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DefaultWeightSeries;