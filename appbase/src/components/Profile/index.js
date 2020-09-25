import React from 'react';
import {Text, ScrollView} from 'react-native';
import style from './style';
import Header from '../Header';

const Profile = () => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>
                <Text style={style.titulo}>Profile</Text>
                <Text style={[style.text, style.disciplina]}>Disciplina: <Text style={style.resposta}> DM122.</Text></Text>
                <Text style={style.text}>Turma:<Text style={style.resposta}> 174.</Text></Text>
                <Text style={style.text}>Aluno:<Text style={style.resposta}> Rodrigo Franco de Lima.</Text></Text>
                <Text style={[style.text, style.matricula]}>Matrícula:<Text style={style.resposta}> 40112.</Text></Text>
            </ScrollView>
        </>
    )
}

export default Profile