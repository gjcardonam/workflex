import { createStackNavigator } from "@react-navigation/stack";
import ExerciseCatalogueScreen from "../screens/ExerciseCatalogueScreen";
import ExerciseDetailScreen from "../screens/ExerciseDetailScreen";

const ExerciseStack = createStackNavigator();

function ExerciseStackNavigator() {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        name="ExerciseCatalogue"
        component={ExerciseCatalogueScreen}
        options={{ headerShown: false }}
      />
      <ExerciseStack.Screen
        name="ExerciseDetail"
        component={ExerciseDetailScreen}
        options={{ headerShown: false }}
      />
    </ExerciseStack.Navigator>
  );
}

export default ExerciseStackNavigator;