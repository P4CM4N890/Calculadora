import { useRef, useState } from "react";

enum Operadores {
    suma, resta, multiplicar, dividir, ninguno,
}

export const useCalc = () => {
    const [ numero, setNumero ] = useState('0');
    const [ numeroAnterior, setNumeroAnterior ] = useState( '0' );
    const [ showDisplay, setShowDisplay ] = useState(false);

    const lastOperation = useRef<Operadores>( Operadores.ninguno );

    const clean = () => {
        setNumero('0');
        setNumeroAnterior('0');
        lastOperation.current = Operadores.ninguno;
    }

    const makeNumber = ( numeroTexto: string ) => {

            // Validar punto
        if ( numero.includes('.') && numeroTexto === '.' ) return;

        else if ( numero.startsWith('0') || numero.startsWith('-0') ) {
            if ( numero === '-0' ) {
                setNumero( '-' + numeroTexto )
            }
                // Punto decimal
            else if ( numeroTexto === '.' ) {
                setNumero( numero + numeroTexto );

                // Evaluar si es otro cero y existe un punto
            } else if ( numeroTexto === '0' && numero.includes('.') ) {
                setNumero( numero + numeroTexto );

                // Validar si es diferente de 0 y no tiene un punto
            } else if ( numeroTexto !== '0' && !numero.includes('.') ) {
                setNumero( numeroTexto );

                // Evitar 0000.0
            } else if ( numeroTexto === '0' && !numero.includes('.') ) {
                setNumero( numero );

                // Permitir 0.001
            } else {
                setNumero( numero + numeroTexto );
            }

        } else {
            setNumero( numero + numeroTexto );
        }

    }

    const plusMinus = () => {
        if ( numero.includes('-') ) {
            setNumero( numero.replace( '-', '' ) );
        } else {
            setNumero( '-' + numero );
        }
    }

    const del = () => {
            // No eliminar si el número es 0
        if ( numero === '0' ) return;
            // Si el numero es de un digito o un numero negativo de un digito, se convierte a 0
        if ( numero.length === 1 || ( numero.length === 2 && numero.includes('-'))) {
            setNumero( '0' );
        } else {
            setNumero ( numero.slice( 0, -1 ) )
        }
    }

        // Esta función es para cambiar el número de display
    const changeNum = ( funcion : Operadores ) => {
            // Si el número termina con punto decimal pasa sin este.
            setShowDisplay( true );
        if ( numero.endsWith('.') ) {
            setNumeroAnterior( numero.slice( 0, -1 ) );
        } else {
            setNumeroAnterior( numero );
        }
        setNumero( '0' );
        lastOperation.current = funcion;
        console.log('Cambio: ', lastOperation.current );
    } 

    const division = () => {
        changeNum( Operadores.dividir );
    }

    const times = () => {
        changeNum( Operadores.multiplicar );
    }

    const minus = () => {
        changeNum( Operadores.resta );
    }

    const plus = () => {
        changeNum( Operadores.suma );
    }

    const equals = () => {

        if ( lastOperation.current === Operadores.ninguno ) return;

        const num1 = Number( numeroAnterior );
        const num2 = Number( numero );
        let resultado = 0;

        switch ( lastOperation.current ) {

            case Operadores.suma:
                resultado = num1 + num2;
                break;

            case Operadores.resta:
                resultado = num1 - num2;
                break;

            case Operadores.multiplicar:
                resultado = num1 * num2;
                break;
            
            case Operadores.dividir:
                resultado = num1 / num2;
                break;
        }

        lastOperation.current = Operadores.ninguno;
        setNumero( resultado.toString() );
        setNumeroAnterior( '0' );
        setShowDisplay( false );
    }

    return {
        numero, numeroAnterior,
        showDisplay, Operadores,
        clean, makeNumber,
        plusMinus, del,
        division, times,
        minus, plus,
        equals,
    }
}