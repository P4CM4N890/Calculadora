import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string,
    color?: string,
    big?: boolean,
    onPress: ( numeroTexto: string ) => void,
};

export const BttnCalc = ({ title, color = '#2D2D2D', big = false, onPress }: Props) => {
    return (
        <TouchableOpacity onPress={ () => onPress( title ) }>
            <View>
                <View style={{ 
                    ...styles.bton,
                    backgroundColor: color,
                    width: ( big ) ? 180 : 80
                }}>
                        <Text style={{ 
                            ...styles.textoBton,
                            color: ( color === '#9B9B9B') ? 'black' : 'white' 
                        }} >
                            { title }
                        </Text>
                    </View>
            </View>
        </TouchableOpacity>
    )
}