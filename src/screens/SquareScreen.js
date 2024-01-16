import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";
 
const ColorIncrement = 10;
const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number}
    //action === { colortoChange: 'red' || 'green' || 'blue', amount: 10 || -10 }
    switch (action.type) {
        case 'changeToRed':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : {...state, red: state.red + action.payload }
        case 'changeToBlue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : {...state, blue: state.blue + action.payload }
        case 'changeToGreen':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : {...state, green: state.green + action.payload }
        default:
            return state;
    }
} 

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'changeToRed', payload: ColorIncrement })}
                onDecrease={() => dispatch({ type: 'changeToRed', payload: -1 * ColorIncrement })}
                color="Red"
                />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'changeToGreen', payload: ColorIncrement })}
                onDecrease={() => dispatch({ type: 'changeToGreen', payload: -1 * ColorIncrement })}
                color="Green"
                />
            <ColorCounter 
                onIncrease={() => dispatch({ type: 'changeToBlue', payload: ColorIncrement })}
                onDecrease={() => dispatch({ type: 'changeToBlue', payload: -1 * ColorIncrement })}
                color="Blue"
                />
                <View style={{
                    height:120, 
                    width:120, 
                    backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`
                }}
                />
        </View>
    )
} 

const styles = StyleSheet.create ({})

export default SquareScreen;