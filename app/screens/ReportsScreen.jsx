import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';
import { formatDateForUI } from '../assets/helpers.js';

export default function ReportsScreen({ navigation }) {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    (async () => {
      let reports = await Report.getAll();
      setReports(reports);
    })();
  }, []);

  const Item = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.title}>
        {formatDateForUI(item.created_at)} {' -> '} {item.first}
      </Text>
      <Button
        title="Edit"
        onPress={() => navigation.navigate('SingleReport', { id: item.id, toBeConfirmed: false })}
      ></Button>
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
        data={reports}
        renderItem={({ item }) => <Item item={item} />}
        ListEmptyComponent={EmptyMessage}
      />
      <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('CreateReportScreen')}
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
    backgroundColor: '#3c3c3b',
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
