import { createStackNavigator } from "@react-navigation/stack";
import DailyRoutineScreen from "../screens/DailyRoutineScreen";
import RoutineScreen from "../screens/RoutineScreen";

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
    </DailyRoutineStack.Navigator>
  );
}

export default DailyRoutineStackNavigator;