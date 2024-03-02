import React from 'react';
import { View, Text } from 'react-native';

const RoutineScreen = ({ route }) => {
    const { routine } = route.params;
    return (
        <View>
            <Text>Routine Screen</Text>
        </View>
    )
}

export default RoutineScreen;