import { createStackNavigator } from "@react-navigation/stack";
import DailyRoutineScreen from "../screens/DailyRoutineScreen";
import RoutineScreen from "../screens/RoutineScreen";
import MuscleSelection from "../screens/DayRoutineSettings/MuscleSelection";
import DefaultExcersises from "../screens/DayRoutineSettings/DefaultExcersises";
import ExcersisesSelection from "../screens/DayRoutineSettings/ExcersisesSelection";
import DefaultWeightSeries from "../screens/DayRoutineSettings/DefaultWeightSeries";
import WeightSeriesSelection from "../screens/DayRoutineSettings/WeightSeriesSelection";
import ConfirmScreen from "../screens/DayRoutineSettings/ConfirmScreen";

const DailyRoutineStack = createStackNavigator();

function DailyRoutineStackNavigator() {
  return (
    <DailyRoutineStack.Navigator>
      <DailyRoutineStack.Screen
        name="DailyRoutine"
        component={DailyRoutineScreen}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name='RoutineDetail'
        component={RoutineScreen}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="MuscleSelection"
        component={MuscleSelection}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="DafaultExcercise"
        component={DefaultExcersises}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="ExcersisesSelection"
        component={ExcersisesSelection}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="DefaultWeightSeries"
        component={DefaultWeightSeries}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="WeightSeriesSelection"
        component={WeightSeriesSelection}
        options={{ headerShown: false }}
      />
      <DailyRoutineStack.Screen
        name="confirmationScreen"
        component={ConfirmScreen}
        options={{ headerShown: false }}
      />
    </DailyRoutineStack.Navigator>
  );
}

export default DailyRoutineStackNavigator;