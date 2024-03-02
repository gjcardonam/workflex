import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ConfirmScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Quieres guardar los cambios?</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={{
                    backgroundColor: 'lightblue',
                    padding: 10,
                    margin: 5,
                }}
            >
                <Text>Si</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('DayRoutineSettings')}
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

export default ConfirmScreen;