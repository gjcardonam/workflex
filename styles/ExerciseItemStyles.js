import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  exercise: {
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingRight: 40,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  gif: {
    width: "100%",
    height: 80,
    width: 80,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  muscleIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
  },
});

export default styles;
