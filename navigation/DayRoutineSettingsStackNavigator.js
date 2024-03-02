import { createStackNavigator } from "@react-navigation/stack";
import DayRoutineSettings from "../screens/DayRoutineSettings/MuscleSelection";

const DayRoutineSettingsStack = createStackNavigator();

function DayRoutineSettingsStackNavigator() {
  return (
    <DayRoutineSettingsStack.Navigator>
      <DayRoutineSettingsStack.Screen
        name="DayRoutineSettings"
        component={DayRoutineSettings}
        options={{ headerShown: false }}
      />
    </DayRoutineSettingsStack.Navigator>
  );
}

export default DayRoutineSettingsStackNavigator;