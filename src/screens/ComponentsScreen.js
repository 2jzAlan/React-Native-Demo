//step 1. create import libraries
import React from "react"; //import entire react file
import { Text, StyleSheet, View } from "react-native"; //importing pieces from "react-native" using {,}

//step 2. Components returning JSX
const ComponentsScreen = () => { //arrow functions prefered
    const condition1 = 'Variable assigned inside <Text> with inline style';
    const condition2 = <Text>JSX assigned to Variable</Text>;
    return ( //return JSX below
    <View>
        <Text style={styles.h1Text}>This is the h1Text</Text>
        <Text style={styles.bodyText}>This is a standard JSX flow</Text> 
        <Text>View enables multiple elements</Text>
        <Text style={{ fontSize: 20 }}>{condition1}</Text> 
        {condition2}
    </View>
    )
}
//step 3. Stylesheet Component
const styles = StyleSheet.create({
    bodyText: {
        fontSize: 30
    },
    h1Text: {
        fontSize: 60
    }
})
//step 4. close component file
export default ComponentsScreen;