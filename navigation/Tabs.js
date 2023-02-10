import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet  } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FirstScreenNavigator} from '../routes/homeStack'

// screens
import Account from '../screens/Account'
import Events from '../screens/Events'
import CreateEventForm from '../screens/CreateEventForm'

const Tab = createBottomTabNavigator();

export default function Tabs() {

  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: {fontSize:18},
      activeTintColor: 'red',
      inactiveTintColor: 'black'
    }}
    >
      <Tab.Screen 
        name="Profile" 
        component={Account}
        options={{
          tabBarHideOnKeyboard: true,
        }}
        />
      {/* <Tab.Screen 
        name="Create" 
        component={CreateEventForm}
        /> */}
      <Tab.Screen options={{headerShown: false}} name="Events" component={FirstScreenNavigator}/>
    </Tab.Navigator>
  );
}
