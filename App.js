import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ExerciseCatalogueStackNavigator from './navigation/ExerciseCatalogueStackNavigator';
import DailyRoutineStackNavigator from './navigation/DailyRoutineStackNavigator';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Exercise" component={ExerciseCatalogueStackNavigator} options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="dumbbell" color={color} size={size} />
          ),
          headerShown: false
        }}/>
        <Tab.Screen name="Train" component={DailyRoutineStackNavigator} options={{
          tabBarLabel: 'Train',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
          headerShown: false  
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
