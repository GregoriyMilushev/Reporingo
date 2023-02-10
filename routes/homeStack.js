import { createStackNavigator } from "@react-navigation/stack";

import Events from "../screens/Events";
import CreateEventForm from '../screens/CreateEventForm'

const Stack = createStackNavigator();

const FirstScreenNavigator = () => {
    return (
      <Stack.Navigator > 
         <Stack.Screen
          name="Events"
          component={Events}
        />
         <Stack.Screen
          name="CreateEventForm"
          component={CreateEventForm}
        />
      </Stack.Navigator>
    );
}

export {FirstScreenNavigator};