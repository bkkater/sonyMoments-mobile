import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        padding: 15,
        backgroundColor: '#901193',
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        maxHeight: 44,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonText: {
        fontFamily: 'Ubuntu_500Medium',
        color: '#FFF'
    },
})

export default styles;