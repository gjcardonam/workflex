import { createStackNavigator } from "@react-navigation/stack";
import ExerciseCatalogueScreen from "../screens/ExerciseCatalogueScreen";
import ExerciseDetailScreen from "../screens/ExerciseDetailScreen";

const ExerciseCatalogueStack = createStackNavigator();

function ExerciseCatalogueStackNavigator() {
  return (
    <ExerciseCatalogueStack.Navigator>
      <ExerciseCatalogueStack.Screen
        name="ExerciseCatalogue"
        component={ExerciseCatalogueScreen}
        options={{ headerShown: false }}
      />
      <ExerciseCatalogueStack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{ headerShown: false }}
      />
    </ExerciseCatalogueStack.Navigator>
  );
}

export default ExerciseCatalogueStackNavigator;