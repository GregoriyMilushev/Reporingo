import { createStackNavigator } from '@react-navigation/stack';
import CreateReportScreen from '../screens/CreateReportScreen';

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Create Report" component={CreateReportScreen} />
    </Stack.Navigator>
  );
};

export { FirstScreenNavigator };
