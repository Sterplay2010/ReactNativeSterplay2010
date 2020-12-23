import React, { useEffect, useState } from 'react';
import * as MaterialReact from 'react-native-paper';
import * as ReactNative from 'react-native';
import axios from 'axios';

const baseUrl = "http://192.168.0.7:2000/importar";


const Ui = () => {

    const [titulo, setTitulo] = React.useState('');
    const [descripcion, setDescripcion] = React.useState('');
    const [link, setLink] = React.useState('');
    const [imagen, setImagen] = React.useState('');



    const peticionPost = async () => {

        await axios.post(baseUrl, {
            titulo:titulo,
            descripcion:descripcion,
            link:link,
            imagen:imagen
        })
            .then(response => {
                console.log('Listo....');
            });
    }


    return (

        <ReactNative.SafeAreaView style={styles.containerView}>
            <ReactNative.ScrollView style={styles.scrollView}>
                <MaterialReact.Text>DATOS DEL JUEGO</MaterialReact.Text>
                <MaterialReact.TextInput
                    label="Título del juego"
                    style={styles.input}
                    value={titulo}
                    onChangeText={titulo => setTitulo(titulo)}
                />
                <MaterialReact.TextInput
                    label="Descripción del juego"
                    style={styles.input}
                    value={descripcion}
                    onChangeText={descripcion => setDescripcion(descripcion)}
                />
                <MaterialReact.TextInput
                    label="Link del juego"
                    style={styles.input}
                    value={link}
                    onChangeText={link => setLink(link)}
                />
                <MaterialReact.TextInput
                    label="Imagen del juego"
                    style={styles.input}
                    value={imagen}
                    onChangeText={imagen => setImagen(imagen)}
                />
                <MaterialReact.Button mode="contained" color="skyblue" style={styles.container} onPress={peticionPost}>
                    Importar
          </MaterialReact.Button>
            </ReactNative.ScrollView>
        </ReactNative.SafeAreaView>


    );
}

const styles = ReactNative.StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    input: {
        marginTop: 10,
        marginBottom: 10,
    },
    containerView: {
        flex: 1,
    },
    scrollView: {
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 20
    },
});

export default Ui;

