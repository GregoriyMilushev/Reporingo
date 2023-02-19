import { supabase } from '../../helpers/supabaseClient';
import { StyleSheet, View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function Events({ navigation }) {
  // const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select();

      if (error) {
        setEvents(null);
        Alert.alert(error.message);
      } else if (data) {
        setEvents(data);
      }
    };

    fetchEvents();
  }, []);

  const Item = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={{ color: '#3c3c3b' }}>{item.description}</Text>
    </View>
  );

  const EmptyMessage = () => (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 18 }}>No data found</Text>
    </View>
  );

  return (
    <View style={styles.buttonContainer}>
      <FlatList
        data={events}
        renderItem={({ item }) => <Item item={item} />}
        ListEmptyComponent={EmptyMessage}
      />
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('CreateEventForm')}
        >
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',

    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
  },
  title: {
    color: '#3c3c3b',
    fontSize: 18,
  },
  buttonContainer: {
    flex: 1,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: '5%',
    right: '10%',
    zIndex: 1,
  },
  floatingButton: {
    width: 50,
    height: 50,
    backgroundColor: '#00a8e8',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButtonText: {
    color: 'white',
    fontSize: 24,
  },
});
