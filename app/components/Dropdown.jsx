import { gray } from 'color-name';
import React, { useState } from 'react';
import { useRef } from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';

const Dropdown = ({ label, data, onSelect, selected }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    // DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
    //   setDropdownTop(py + h);
    // });
    setDropdownTop(20);
    setVisible(true);
  };

  const onItemPress = (item) => {
    setVisible(false);
    onSelect(item);
  };

  const renderItem = ({ item }) => (
    // <View style={styles.item} onPress={() => onItemPress(item)}>
    <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
      <Text style={styles.item}>{item.label}</Text>
    </TouchableWithoutFeedback>
    // {/* </View> */}
  );

  const renderDropdown = () => {
    return (
      //   <Modal visible={visible} transparent animationType="none">
      //     <TouchableOpacity style={styles.overlay} onPress={() => setVisible(false)}>
      //       <View style={[styles.dropdown, { top: dropdownTop }]}>
      //         <FlatList
      //           data={data}
      //           renderItem={renderItem}
      //           keyExtractor={(item, index) => index.toString()}
      //           contentContainerStyle={{
      //             flexGrow: 1,
      //           }}
      //         />
      //       </View>
      //     </TouchableOpacity>
      //   </Modal>
      <Modal visible={visible} transparent animationType="none">
        <View style={styles.overlay} onPress={() => setVisible(false)}>
          <ScrollView>
            <View onStartShouldSetResponder={() => true}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={{
                  flexGrow: 1,
                }}
              />
            </View>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  return (
    <TouchableOpacity ref={DropdownButton} style={styles.button} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text style={styles.buttonText}>{(selected && selected.label) || label}</Text>
      <Icon type="font-awesome" name="chevron-down" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: '100%',
    backgroundColor: '#efefef',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '95%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  list: {},
  item: {
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderBottomWidth: 1,
    // marginBottom: 20,
    borderRadius: 5,
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Dropdown;
