import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';
import style from './style';
import Header from '../Header';

const Help = () => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>
                <Text>Pedido</Text>
                <Text>Pagamento</Text>
                <Text>Entrega</Text>
                <Text>Contato</Text>
            </ScrollView>
        </>
    )
}

export default Help