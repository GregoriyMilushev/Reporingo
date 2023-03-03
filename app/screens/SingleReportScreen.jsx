import { StyleSheet, View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';
import { useRoute } from '@react-navigation/native';
import { formatDateForUI } from '../assets/helpers';

export default function SingleReportScreen({ navigation }) {
  const route = useRoute();
  const { toBeConfirmed, id = null, reportData = null } = route.params;
  const [report, setReport] = useState(null);
  const editButtonText = 'Edit';
  const confirmButtonText = 'Confirm';

  const getReportData = (report) => {
    return JSON.parse(report.report);
  };

  useEffect(() => {
    (async () => {
      if (reportData) {
        setReport(reportData);
        return;
      }

      const rep = await Report.getById(id);
      setReport(rep);
      navigation.setParams({ name: formatDateForUI(rep.created_at) });
    })();
  }, []);

  const onEditPress = () => {
    // open report create with report loaded
    console.log('Edit');
  };

  const onConfirmPress = () => {
    // Save to db
    console.log('Confirm');
  };

  let ButtonComponent = (title) => {
    return (
      <Button
        title={title}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={title == editButtonText ? onEditPress : onConfirmPress}
      ></Button>
    );
  };

  const getRow = (report, type) => {
    const data1 = getReportData(report)[`${type}1`] || '';
    const data2 = getReportData(report)[`${type}2`] || '';
    const data3 = getReportData(report)[`${type}3`] || '';
    const data4 = getReportData(report)[`${type}4`] || '';
    return `${data1}/${data2}/${data3}/${data4}`;
  };

  return (
    <View style={styles.container}>
      {report ? (
        <>
          <Text style={styles.text}>A: {getRow(report, 'A')}</Text>
          <Text style={styles.text}>B: {getRow(report, 'B')}</Text>
          <Text style={styles.text}>C: {getRow(report, 'C')}</Text>
          <Text style={styles.text}>D: {getRow(report, 'D')}</Text>
          <Text style={styles.text}>Comment: {report.comment}</Text>
          <Image
            source={{ uri: getReportData(report).image_url }}
            style={styles.image}
            resizeMode="contain"
          ></Image>

          <View style={styles.buttonsContainer}>
            {toBeConfirmed ? (
              <>
                {ButtonComponent(editButtonText)}
                {ButtonComponent(confirmButtonText)}
              </>
            ) : (
              <>
                {ButtonComponent(editButtonText)}
                {/* {ButtonComponent(confirmButtonText)} */}
              </>
            )}
          </View>
        </>
      ) : (
        <>
          <Text>Fetching report... Please wait</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    margin: 3,
  },
  text: {
    fontSize: 18,
    color: '#3c3c3b',
    margin: 5,
  },
  image: {
    marginTop: 30,
    height: 300,
  },
  buttonsContainer: {
    display: 'flex',
    position: 'absolute',
    bottom: 10,
    left: 20,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#82c773',
    borderRadius: 30,
    height: 60,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
});
