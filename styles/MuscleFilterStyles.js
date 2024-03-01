import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filterButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    height: 100,
    marginBottom: 50,
    backgroundColor: "white",
  },
  selectedButton: {
    backgroundColor: "#012030",
    elevation: 5,
  },
  selectedMuscleIcon: {
    tintColor: "white",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    marginTop: 5,
    fontSize: 11,
  },
  muscleIcon: {
    width: 50,
    height: 50,
  },
  selectedButtonText: {
    color: "white",
  },
});

export default styles;
