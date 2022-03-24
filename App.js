import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import React, { useState} from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [ textItem, setTextItem] = useState('');
  const [listItem, setListItem ] = useState([{id:1,value:'Juan'},{id:2,value:'Martin'}]);
  const onHandlerChangeText = (texto) => setTextItem(texto)
  const addItem = () => {
    setListItem(currentItems => [...currentItems, {id: Math.random.toString(), value: textItem}])
    setTextItem('');
    setCounter(counter + 1)
  }


  return (
    <View style={styles.container}> 
      <View style={{backgroundColor: "#DDDDDD", height: 200, width: 200, justifyContent: 'center'}}>
        <TextInput 
          placeholder='Ingrese su producto'
          value={textItem}
          onChangeText={onHandlerChangeText}/>
        <Button title="Add" onClick={addItem}/>
      </View>

      <View style={{backgroundColor: "green", height: 200, width: 200, justifyContent: 'center'}}>
        <ScrollView>{listItem.map(item => <Texto key={item.id} value={item.value}></Texto>)}</ScrollView>
      </View>
      
    </View>
  );
}
function Texto(props) {
  return <Text>{props.value</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
