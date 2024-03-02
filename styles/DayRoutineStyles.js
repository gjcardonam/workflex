// Importa StyleSheet de react-native para crear un objeto de estilos
import { StyleSheet } from 'react-native';

// Define y exporta los estilos
export default StyleSheet.create({
  routine: {
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  dayText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  routineText: {
    fontSize: 16,
    color: '#555',
  },
  durationText: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
});
