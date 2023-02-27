import { StyleSheet, View, Text } from 'react-native';
import { Button, Image } from 'react-native-elements';
import { useState, useEffect } from 'react';
import Report from '../supabase/report';
import { useRoute } from '@react-navigation/native';

export default function SingleReportScreen({ navigation }) {
  const route = useRoute();
  const { id, toBeConfirmed } = route.params;
  const [report, setReport] = useState(null);

  useEffect(() => {
    (async () => {
      const rep = await Report.getById(id);
      setReport(rep);
    })();
  }, []);

  let ButtonComponent = (title) => {
    return (
      <Button
        title={title}
        buttonStyle={styles.button}
        containerStyle={styles.buttonContainer}
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
                {ButtonComponent('Edit')}
                {ButtonComponent('Confirm')}
              </>
            ) : (
              <>
                {ButtonComponent('Edit')}
                {ButtonComponent('Confirm')}
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
