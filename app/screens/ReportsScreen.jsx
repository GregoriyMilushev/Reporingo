import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';
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

  const Item = ({ item }) => {
    const parsedReport = JSON.parse(item.report);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {formatDateForUI(item.created_at)} {'  '} {parsedReport.A1} {parsedReport.A2}{' '}
          {parsedReport.A3} {parsedReport.A4}
        </Text>
        <Button
          title="View"
          buttonStyle={styles.button}
          onPress={() => navigation.navigate('SingleReport', { toBeConfirmed: false, id: item.id })}
        ></Button>
      </View>
    );
  };

  const EmptyMessage = () => (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Text style={{ fontSize: 18 }}>No data found</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={reports}
        renderItem={({ item }) => <Item item={item} />}
        ListEmptyComponent={EmptyMessage}
      />

      {/* <View style={styles.floatingButtonContainer}>
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate('CreateReportScreen')}
        >
          <Text style={styles.floatingButtonText}>+</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#3c3c3b',
    fontSize: 18,
  },
  button: {
    backgroundColor: '#82c773',
    borderRadius: 10,
    padding: 13,
  },
  // floatingButtonContainer: {
  //   position: 'absolute',
  //   bottom: '15%',
  //   right: '10%',
  //   zIndex: 1,
  // },
  // floatingButton: {
  //   width: 50,
  //   height: 50,
  //   backgroundColor: '#00a8e8',
  //   borderRadius: 25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // floatingButtonText: {
  //   color: 'white',
  //   fontSize: 24,
  // },
});
