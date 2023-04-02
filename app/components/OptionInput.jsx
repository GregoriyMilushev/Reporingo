import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import OptionModal from './OptionModal';
import { MaterialIcons } from '@expo/vector-icons';

export default function OptionInput({
  options,
  selected,
  handleOptionSelect,
  handleModalClose,
  modalVisible,
  handleModalOpen,
  showLabel,
}) {
  if (showLabel === undefined) {
    showLabel = true;
  }

  return (
    <>
      <OptionModal
        selected={selected}
        onSelect={handleOptionSelect}
        onClose={handleModalClose}
        visible={modalVisible}
        options={[
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
          'option 1',
        ]}
      />
      <TouchableOpacity style={styles.button} onPress={handleModalOpen}>
        {selected ? (
          <>
            <Text style={styles.buttonText}> {selected} </Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="#000"
              style={styles.buttonIcon}
            />
          </>
        ) : (
          <>
            {showLabel ? <Text style={styles.buttonText}>Select an option</Text> : ''}
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="#000"
              style={styles.buttonIcon}
            />
          </>
        )}
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginLeft: 16,
    marginTop: 2,
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
