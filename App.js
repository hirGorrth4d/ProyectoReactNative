import React, { useState } from 'react';
import { 
  Text, 
  View, 
  FlatList, 
  StyleSheet,
} from 'react-native';
import { Button, TextInput } from 'react-native';
import ModalItem from './components/Modal';

export default function App() {  
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const [ counter, setCounter ] = useState(1);

  const onHandlerChangeItem = (t) => setTextItem(t)

  const onDelete = id => {
    setItemList(currentItems => currentItems.filter(item => item.id !== id))
    setItemSelected({})
    setModalVisible(!modalVisible)
  }
  const onHandlerModal = id => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(!modalVisible)
  }

  const add = ()=> {
    setItemList (currentItems => [...currentItems, {id: counter, value: textItem}
    ])
    setTextItem('')
    setCounter( counter + 1)
  }
  const closeModal = () => {
    setModalVisible(!modalVisible);
  }
  const renderItem = data => 
    <Text 
      style={styles.listItem} 
      onPress={onHandlerModal.bind(this, data.item.id)}>
        {data.item.id} -- {data.item.value}
    </Text>
  return (
    <View style ={styles.screen}>
      <View style={styles.tituloApp}>
        <Text style={styles.textoTituloApp}>Ingrese su lista de productos</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput 
        placerholder="Item de lista" 
        style={styles.input}
        onChangeText={onHandlerChangeItem}
        value={textItem}
        />
        <Button color='#336B5D' title="ADD" onPress={add} />
      </View>
      <View style={styles.itemList}>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={ item => item.id}
        />
      </View>

      <View style={styles.screen}>
        <ModalItem visible={modalVisible} onDelete={onDelete} item={itemSelected} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1,
    padding: 50,
    backgroundColor: '#E0E5DA'
  },
  tituloApp: {
    alignItems:'center',
    justifyContent:'center'
  },
  textoTituloApp: {
    color: '#336B5D',
    fontWeight: 'bold',
    fontSize: 25,
    
  },
  inputContainer: {
    
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width:200,
    borderBottomColor: 'white',
    borderBottomWidth: 5,
    margin: 10,
    padding: 20,
    color: 'black'
  },
  itemList: {
    justifyContent: 'center',
    padding:40,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    fontSize: 25
  },
  

})