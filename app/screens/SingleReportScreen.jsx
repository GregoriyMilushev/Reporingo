import { StyleSheet, View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';
import { useRoute } from '@react-navigation/native';

export default function SingleReportScreen({ navigation }) {
  const route = useRoute();
  const { toBeConfirmed, id = null, reportData = null } = route.params;
  const [report, setReport] = useState(null);
  const editButtonText = 'Edit';
  const confirmButtonText = 'Confirm';

  useEffect(() => {
    (async () => {
      if (reportData) {
        setReport(reportData);
        return;
      }

      const rep = await Report.getById(id);
      setReport(rep);
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

  return (
    <View style={styles.container}>
      {report ? (
        <>
          <Text>{report.first}</Text>
          <Text>{report.second}</Text>
          <Text>{report.third}</Text>
          <Text>{report.comment}</Text>
          <Image
            source={{ uri: report.image_url }}
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
