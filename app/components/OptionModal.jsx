import React from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const OptionModal = ({ options, visible, onSelect, onClose, selected }) => {
  const handleOptionSelect = (option) => {
    onSelect(option);
  };

  return (
    <Modal animationType="fade" transparent={true} visible={visible}>
      <TouchableOpacity style={styles.overlay} onPress={onClose}>
        <View style={styles.modal}>
          <ScrollView style={styles.scrollView}>
            {options.map((option) => (
              <TouchableOpacity
                key={option + Math.random()}
                style={styles.optionButton}
                onPress={() => handleOptionSelect(option)}
              >
                {selected === option ? (
                  <MaterialIcons name="check" size={24} color="white" style={styles.icon} />
                ) : (
                  ''
                )}
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    width: '80%',
    maxHeight: '60%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  scrollView: {
    maxHeight: '80%',
  },
  optionButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
    flexDirection: 'row',
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 15,
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#EDEDED',
    borderRadius: 4,
  },
  cancelButtonText: {
    color: '#333333',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default OptionModal;

// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

// const OptionModal = ({ options, visible, onSelect, onClose, selectedOption }) => {
//   const [selected, setSelected] = useState(selectedOption);

//   const handleOptionSelect = (option) => {
//     setSelected(option);
//     onSelect(option);
//   };

//   return (
//     <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onClose}>
//       <View style={styles.modal}>
//         {options.map((option) => (
//           <TouchableOpacity
//             key={option}
//             style={styles.option}
//             onPress={() => handleOptionSelect(option)}
//           >
//             {selected === option ? (
//               <MaterialIcons name="check" size={24} color="#00FF00" style={styles.optionIcon} />
//             ) : (
//               <View style={styles.optionIcon} />
//             )}
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modal: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 4,
//     padding: 16,
//     marginHorizontal: 16,
//     marginTop: 'auto',
//     marginBottom: 'auto',
//   },
//   option: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   optionIcon: {
//     width: 24,
//     height: 24,
//     borderRadius: 4,
//     marginRight: 8,
//     borderWidth: 1,
//     borderColor: '#000000',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   optionText: {
//     color: '#000000',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default OptionModal;
