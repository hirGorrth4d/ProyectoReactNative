import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}> 
      <View style={{backgroundColor: "#DDDDDD", height: 200, width: 200, justifyContent: 'center'}}>
        <TextInput placeholder='Ingrese su producto'></TextInput>
        <Button title="Add" />
      </View>
      <View style={{backgroundColor: "green", height: 200, width: 200, justifyContent: 'center'}}><Text>Esto debajo del boton</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
