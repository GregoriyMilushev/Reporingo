import { StyleSheet, View, Text, Alert } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';
import { useRoute } from '@react-navigation/native';
import { formatDateForUI } from '../assets/helpers';
import axios from 'axios';

export default function SingleReportScreen({ navigation }) {
  const route = useRoute();
  const { toBeConfirmed, isEdit = false, id = null, reportData = null } = route.params;
  const [report, setReport] = useState(null);
  const editButtonText = 'Edit';
  const confirmButtonText = 'Confirm';
  const sendToViberButtonText = 'Send to Viber';

  useEffect(() => {
    navigation.setParams({ name: '' });
    (async () => {
      if (reportData) {
        // executes only when creating report
        setReport(reportData);
        navigation.setParams({ name: formatDateForUI(Date.now()) });
        return;
      }

      const rep = await Report.getById(id);
      setReport(rep);
      navigation.setParams({ name: formatDateForUI(rep.created_at) });
    })();
  }, []);

  const onEditPress = () => {
    // open report create with report loaded
    navigation.navigate('Create Report', { reportData: report });
  };

  const onConfirmPress = async () => {
    let err;
    if (isEdit) {
      const { data, error } = await Report.update(report.id, report.report);
      err = error;
    } else {
      const { data, error } = await Report.create(report.report);
      err = error;
    }

    if (err) {
      Alert.alert(`Report ${isEdit ? 'Edit' : 'Create'} failed. Please try again.`);
    } else {
      Alert.alert(`Form submitted successfully.`);
      navigation.navigate('Create Report', { reportData: {} });
    }
  };

  let ButtonComponent = (title, onPress = null) => {
    return (
      <Button
        title={title}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
        onPress={onPress ? onPress : title == editButtonText ? onEditPress : onConfirmPress}
      />
    );
  };

  const getRow = (report, type) => {
    const data1 = report.report?.[`${type}1`] || '';
    const data2 = report.report?.[`${type}2`] || '';
    const data3 = report.report?.[`${type}3`] || '';
    const data4 = report.report?.[`${type}4`] || '';
    return `${data1}/${data2}/${data3}/${data4}`;
  };

  // Send reports to Viber bot
  const onSendToViberPress = async () => {
    try {
      const { imageUrl, ...filteredReport } = report;
      const newReport = {
        text: {
          A: getRow(report, 'A'),
          B: getRow(report, 'B'),
          C: getRow(report, 'C'),
          D: getRow(report, 'D'),
          Comment: report.report.comment ? report.report.comment : 'None',
        },
        // Wip: Place empty image placeholder in case of null image
        image: {
          imageUrl: report.report.imageUrl
            ? report.report.imageUrl
            : 'https://picsum.photos/200/300',
        },
      };
      // Caution: Addres must be of Viber API Node, token need to be for reportingo chatbot acount
      const response = await axios.post('http://192.168.0.105:6969/viber/send', newReport, {
        headers: {
          'Content-Type': 'application/json',
          'X-Viber-Auth-Token': '509ac2a201a7dfdc-9c44cd0527f56e92-182ae14d7ed8f8a6',
        },
      });
      console.log(response.data);
      Alert.alert('Report sent to Viber successfully.');
    } catch (error) {
      console.error(error);
      Alert.alert('Failed to send report to Viber. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {report ? (
        <>
          <Text style={styles.text}>ID: {report.id || ' - '}</Text>
          <Text style={styles.text}>A: {getRow(report, 'A')}</Text>
          <Text style={styles.text}>B: {getRow(report, 'B')}</Text>
          <Text style={styles.text}>C: {getRow(report, 'C')}</Text>
          <Text style={styles.text}>D: {getRow(report, 'D')}</Text>
          <Text style={styles.text}>Comment: {report.report?.comment}</Text>
          <Image
            source={{ uri: report.report?.imageUrl }}
            style={styles.image}
            resizeMode="contain"
          ></Image>

          <View style={styles.buttonsContainer}>
            {toBeConfirmed ? (
              <>
                {ButtonComponent(editButtonText)}
                {ButtonComponent(confirmButtonText)}
                {ButtonComponent(sendToViberButtonText, onSendToViberPress)}
              </>
            ) : (
              <>
                {ButtonComponent(editButtonText)}
                {ButtonComponent(sendToViberButtonText, onSendToViberPress)}
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
