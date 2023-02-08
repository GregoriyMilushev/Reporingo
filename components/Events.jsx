import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { supabase } from '../helpers/supabaseClient';

export default function Events() {
  // const [fetchError, setFetchError] = useState(null);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase.from('events').select();

      if (error) {
        setEvents(null);
        Alert.alert(error.message);
        console.log(error, 'Heree');
      } else if (data) {
        setEvents(data);
        console.log(events, '222');

        console.log(data, '11');
      }
    };

    fetchEvents();
  }, []);

  function Item({ item }) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={{ color: '#3c3c3b' }}>{item.description}</Text>
      </View>
    );
  }

  function EmptyMessage() {
    return (
      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontSize: 18 }}>No data found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <Item item={item} />}
      ListEmptyComponent={EmptyMessage}
    />
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

    //   alignItems: 'center'
  },
  title: {
    color: '#3c3c3b',
    fontSize: 18,
  },
});
