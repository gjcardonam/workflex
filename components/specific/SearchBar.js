import React from "react";
import { TextInput, View } from "react-native";
import styles from "../../styles/SearchBarStyles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.searchBarContainer}>
      <MaterialIcons name="search" size={25} color="grey" style={styles.materialicon} />
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar ejercicios..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

export default SearchBar;
