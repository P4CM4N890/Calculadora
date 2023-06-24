import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { BttnCalc } from '../components/BttnCalc';
import { useCalc } from '../hooks/useCalc';

export const CalculadoraScreen = () => {

    const { 
        numero, numeroAnterior,
        showDisplay,
        clean, makeNumber,
        plusMinus, del,
        division, times, 
        minus, plus, 
        equals,
    } = useCalc();

    return (
        <View style={ styles.container }>
                {/* Display de resultados */}
                {
                    ( showDisplay ) && 
                        ( <Text style={ styles.miniDisplay } >{ numeroAnterior }</Text> )
                }
            <Text style={ styles.display }
                numberOfLines={ 1 }
                adjustsFontSizeToFit
            >
                { numero }
            </Text>

                {/* Fila de Botones */}
            <View style={ styles.rowBton } >
                <BttnCalc title='C'     color='#9B9B9B'    onPress={ clean } />
                <BttnCalc title='+/-'   color='#9B9B9B'    onPress={ plusMinus } />
                <BttnCalc title='del'   color='#9B9B9B'    onPress={ del } />
                <BttnCalc title='/'     color='#FF9427'    onPress={ division } />
            </View>
                {/* Fila de Botones */}
            <View style={ styles.rowBton } >
                <BttnCalc title='7'     onPress={ makeNumber } />
                <BttnCalc title='8'     onPress={ makeNumber } />
                <BttnCalc title='9'     onPress={ makeNumber } />
                <BttnCalc title='x'     color='#FF9427'     onPress={ times } />
            </View>
                {/* Fila de Botones */}
            <View style={ styles.rowBton } >
                <BttnCalc title='4'     onPress={ makeNumber } />
                <BttnCalc title='5'     onPress={ makeNumber } />
                <BttnCalc title='6'     onPress={ makeNumber } />
                <BttnCalc title='-'     color='#FF9427'     onPress={ minus } />
            </View>
                {/* Fila de Botones */}
            <View style={ styles.rowBton } >
                <BttnCalc title='1'     onPress={ makeNumber } />
                <BttnCalc title='2'     onPress={ makeNumber } />
                <BttnCalc title='3'     onPress={ makeNumber } />
                <BttnCalc title='+'     color='#FF9427'     onPress={ plus } />
            </View>
                {/* Fila de Botones */}
            <View style={ styles.rowBton } >
                <BttnCalc title='0'     big     onPress={ makeNumber } />
                <BttnCalc title='.'     onPress={ makeNumber } />
                <BttnCalc title='='     color='#FF9427'     onPress={ equals } />
            </View>
        </View>
    )
}