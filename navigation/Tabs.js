import React from 'react'
import { View, Text, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StyleSheet, View, Text, Alert, FlatList } from 'react-native'

// components
import Account from '../components/Account'
import Events from '../components/Events'
import CreateEventForm from '../components/CreateEventForm'

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <Text>{title}</Text>
      <Button title="Middle Button" onPress={() => {}} />
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Profile" 
        component={Account}
        options={{
          tabBarHideOnKeyboard: true,
        }}
        />
      <Tab.Screen 
        name="Create" 
        component={CreateEventForm}
        />
      <Tab.Screen name="Events" component={Events}/>
    </Tab.Navigator>
  );
}
