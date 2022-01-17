import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, FlatList, Button } from 'react-native';


const App = () => {
  const [text, onChange] = useState('')
  const [DATA, setData] = useState([])

  const addList = () => {
    setData(DATA => [...DATA, text])
  }

  const deletItem = (item) => {
    const result = DATA.filter(d => item !== d)
    setData(result)
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{title}</Text>
      <Button
        title="Delete"
        color="red"
        onPress={() => deletItem(title)}
      />
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item} />
  );

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.topContainer} >
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          placeholder='Todo'
        />

        <Button
          onPress={() => addList()}
          title="Add"
          color="blue"
        />
      </View>

      <FlatList style={styles.List}
        data={DATA}
        renderItem={renderItem}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  input: {
    width: '80%',
    height: 40,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    opacity: 1,
  },

  itemText: {
    marginLeft: 10,
    width: '70%'
  },

  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
    backgroundColor: '#eeeeee',
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  topContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-evenly',
  },

});

export default App
