import 'react-native-url-polyfill/auto';
import CreateReportScreen from './app/screens/CreateReportScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import ReportsScreen from './app/screens/ReportsScreen';
import { Button } from 'react-native-elements';
import SingleReportScreen from './app/screens/SingleReportScreen';
import CreateReport from './app/screens/CreateReport';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Create Report"
          component={CreateReport}
          options={({ navigation, route }) => ({
            title: route?.params?.name || 'Create Report',
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
        <Stack.Screen name="Reports" component={ReportsScreen} />
        <Stack.Screen
          name="SingleReport"
          component={SingleReportScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
