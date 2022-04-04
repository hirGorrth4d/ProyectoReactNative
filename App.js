import React, { useState } from 'react';
import { 
  Text, 
  View, 
  FlatList, 
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { Button, TextInput } from 'react-native';

export default function App() {  
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false);

  const [ counter, setCounter ] = useState(1);

  const onHandlerChangeItem = (t) => setTextItem(t)

  const onHandlerDelete = id => {
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

      <Modal
        transparent={true}
        animationType='slide'
        visible={modalVisible}
      >
        <View style={styles.modalCentered}>
          <View style={styles.modalView}>
            <View style={styles.tituloModal}>
              <Text style={styles.textoTitulo}>Atención!</Text><Text style={styles.textoTitulo} onPress={closeModal.bind(this)}>X</Text>
            </View>
            <View style={styles.cuerpoModal}>
              <View>
                <Text> ¿Estas seguro que querés borrar?</Text>
              </View>
              <View>
                <Text style={styles.modalItem}>{itemSelected.value}</Text>
              </View>
            </View>
            <View style={styles.botonModal}>
              <Button color='#336B5D' onPress={onHandlerDelete.bind(this, itemSelected.id)} title="Confirmar" />
            </View>
          </View>
        </View>
      </Modal>

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
  modalCentered: {
    flex:1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    borderRadius: 20,
    width: 200,
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: "hidden"
  },
  tituloModal: {
    flex:2,
    backgroundColor: '#336B5D',
    width: '100%',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  cuerpoModal: {
    flex:8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textoTitulo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  botonModal: {
    flex:2,
    paddingBottom: 10,
    flexDirection: 'row'
  }

})