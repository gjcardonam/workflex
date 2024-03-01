import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  exerciseDetailcontainer: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    paddingTop: 80,
  },
  exerciseDetail: {
    flex: 1,
  },
  textButton: {
    paddingTop: 5,
    fontSize: 15,
    paddingLeft: 10,
    color: "white",
  },
  detailVideoButton: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#45C4B0",
    padding: 10,
    borderRadius: 10,
    marginBottom: 40,
  },
  detailName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    paddingBottom: 20,
  },
  detailDescription: {
    fontSize: 18,
    color: "#666",
    paddingBottom: 20,
  },
  gifView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  gif: {
    height: 200,
    width: 200,
  },
  textContainer: {
    flex: 1,
  },
  muscleSub:{
    flexDirection: "row",
    paddingBottom: 30,
  },
  detailMuscleSub: {
    paddingRight: 10,
    fontSize: 18,
    color: "#666",
    paddingBottom: 10,
  },
  detailMuscleIcon: {
    width: 40,
    height: 40,
  },
  detailDescriptionSub: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default styles;
