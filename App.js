import 'react-native-url-polyfill/auto';
import CreateReportScreen from './app/screens/CreateReportScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ReportsDashboardScreen from './app/screens/ReportsDashboardScreen';
import { Button } from 'react-native-elements';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Create Report"
          component={CreateReportScreen}
          options={({ navigation }) => ({
            title: 'Create Report',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              color: 'black',
            },
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Reports');
                }}
                title="Reports"
                containerStyle={{
                  height: 40,
                  marginRight: 10,
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="Reports" component={ReportsDashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
