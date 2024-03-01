import { FlatList } from "react-native";
import DiaRutina from "../components/specific/DiaRutina";

const rutinasSemanales = [
  { id: 1, 
    dia: "Lunes", 
    rutina: "Pecho - Triceps", 
    duracion: "30 minutos" },
  {
    id: 2,
    dia: "Martes",
    rutina: "Espalda - Biceps",
    duracion: "30 minutos",
  },
];

const DailyRoutineScreen = ({ navigation }) => {
  const [rutinas, setRutinas] = useState(rutinasSemanales);

  return (
    <View>
      <Text>Rutinas Diarias</Text>
      <Text>Fecha</Text>
      <FlatList
        data={rutinas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <DiaRutina
              dia={item.dia}
              rutina={item.rutina}
              duracion={item.duracion}
              onPress={() => {
                navigation.navigate("Routine", {
                  dia: item.dia,
                  rutina: item.rutina,
                });
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default DailyRoutineScreen;