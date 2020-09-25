import { StyleSheet } from 'react-native'
import { colors, measures, fonts } from '../../styles'

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: measures.padding
    },
    titulo: {
       textAlign: "center",
       fontSize: fonts.bigger,
       color: colors.base,
       padding: measures.padding,
       fontWeight: "bold"
    },
    text:{
        fontSize: fonts.big,
        color: colors.light,
        padding: measures.padding,
        fontWeight: "bold"
    },
    resposta:{
        fontSize: fonts.big,
        padding: measures.padding,
        color: colors.black,
        fontWeight: "bold"
    },
    matricula:{
        borderBottomColor: colors.dark,
        borderBottomWidth: 1
    },
    disciplina:{
        marginTop: 100,
        borderTopColor: colors.dark,
        borderTopWidth: 1,
    }
})

export default style;