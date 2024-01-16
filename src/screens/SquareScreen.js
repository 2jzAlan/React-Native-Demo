import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const ColorIncrement = 10;
    
    return (
        <View>
            <ColorCounter 
                onIncrease={() => setRed(red + ColorIncrement)}
                onDecrease={() => setRed(red - ColorIncrement)}
                color="Red"
                />
            <ColorCounter
                onIncrease={() => setBlue(blue + ColorIncrement)}
                onDecrease={() => setBlue(blue - ColorIncrement)}
                color="Blue"
                />
            <ColorCounter 
                onIncrease={() => setGreen(green + ColorIncrement)}
                onDecrease={() => setGreen(green - ColorIncrement)}
                color="Green"
                />
                <View style={{
                    height:120, 
                    width:120, 
                    backgroundColor:`rgb(${red}, ${green}, ${blue})`
                }}
                />
        </View>
    )
}

const styles = StyleSheet.create ({})

export default SquareScreen;