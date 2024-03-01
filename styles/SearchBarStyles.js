import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    searchBar: {
        flex: 1,
        margin: 10,
        padding: 10,
        paddingHorizontal: 20,
        paddingRight: 60,
        marginTop: 50,
        marginHorizontal: 20,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 20,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#f2f2f2", // Un gris claro como fondo del contenedor
        paddingBottom: 20, // Ajusta el padding según necesites
        borderRadius: 30,
        
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
      },
      materialicon: {
        position: 'absolute',
        paddingTop: 20,
        right: 50,
        zIndex: 1,
      },
    });
    

export default styles;