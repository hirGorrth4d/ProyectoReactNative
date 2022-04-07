import React from "react"
import { Button, StyleSheet, Text, Modal, View} from "react-native"


const ModalItem = (props) => {
    const  { visible, onDelete, item, onCancel} = props

    if (!visible) return null

    return (

        <Modal
        transparent={true}
        animationType='slide'
        visible={visible}
        >
            <View style={styles.modalCentered}>
                <View style={styles.modalView}>
                    <View style={styles.tituloModal}>
                        <Text style={styles.textoTitulo}>Atención!</Text><Text style={styles.textoTitulo} onPress={onCancel.bind(this)}>X</Text>
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
                        <Button color='#336B5D' onPress={onDelete.bind(this, item.id)} title="Confirmar" />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
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

export default ModalItem