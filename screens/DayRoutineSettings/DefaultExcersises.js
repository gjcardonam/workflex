import { Text, View, TouchableOpacity, Alert } from 'react-native';

const DefaultExcersises = ({ route, navigation }) => {
    const { item, selectedMuscles } = route.params;
    return (
        <View>
            <Text>Quieres dejar los ejercicios recomendados?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('DefaultWeightSeries', { item: item, selectedMuscles: selectedMuscles })}
                style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('ExcersisesSelection', { item: item, selectedMuscles: selectedMuscles })}
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

export default DefaultExcersises;