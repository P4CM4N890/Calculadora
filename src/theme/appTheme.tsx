import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    fondo: {
        flex: 1,
        backgroundColor: 'black',
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },

    display: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    miniDisplay: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        paddingHorizontal: 25,
    },

    rowBton: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal: 10,
    },

    bton : {
        width: 80,
        height: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8,
    },

    textoBton: {
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        fontWeight: '600',
    },

});