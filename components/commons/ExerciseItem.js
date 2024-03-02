import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/ExerciseItemStyles';

const muscleImages = {
  Piernas: require('../../assets/images/muscles/Piernas.png'),
  Gluteos: require('../../assets/images/muscles/Gluteos.png'),
  Pectorales: require('../../assets/images/muscles/Pectorales.png'),
  Abdominales: require('../../assets/images/muscles/Abdominales.png'),
  Biceps: require('../../assets/images/muscles/Biceps.png'),
  Triceps: require('../../assets/images/muscles/Triceps.png'),
  Espalda: require('../../assets/images/muscles/Espalda.png'),
  Hombros: require('../../assets/images/muscles/Hombros.png'),
  Pantorrillas: require('../../assets/images/muscles/Pantorrillas.png'),
  Antebrazos: require('../../assets/images/muscles/Antebrazos.png'),
};

const ExerciseItem = ({ item }) => (
    <View style={styles.exercise}>
    <Image style={styles.gif} source={item.gif} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
    {muscleImages[item.muscle] && (
          <Image source={muscleImages[item.muscle]} style={styles.muscleIcon} />
      )}
  </View>
);

export default ExerciseItem;