import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);  //[] easier access to useState return.  UseState() is the starting value. 

    return (
        <View>
            <Text>Current Count: {counter}</Text>
            <Button
                title="Increase"
                onPress={() => {
                    setCounter(counter + 1)
                }}
            />
            <Button
                title="Decrease"
                onPress={() => {
                    setCounter(counter - 1)
                }}
            />
        </View>
    )
}

const style = StyleSheet.create({})

export default CounterScreen;