import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';

export default function SingleReportScreen({ navigation }) {
  //   useEffect(() => {
  //     (async () => {
  //       let reports = await Report.getAll();
  //       setReports(reports);
  //     })();
  //   }, []);

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
});
