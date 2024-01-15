import React from "react";
import { Text, StyleSheet } from 'react-native'
import { FlatList } from "react-native-gesture-handler";

const ListScreen = () => {
    const objectList = [ //array function for list
        { name: 'object #1' },
        { name: 'object #2' },
        { name: 'object #3' },
        { name: 'object #4' },
        { name: 'object #5' },
        { name: 'object #6' },
        { name: 'object #7' },
        { name: 'object #8' },
        { name: 'object #9' },
    ]
    return (
            <FlatList //FlatList generates list from JSX Library
            horizontal //adds horizontal scroll
            showsHorizontalScrollIndicator={false}
            keyExtractor={object => object.name}  //adds a key to each array
                data={objectList}  //data calls for function name
                renderItem={({ item }) => { //renderItem calls for array
                    // item === { name: 'object #1' }
                    return <Text style={styles.textStyle}>{item.name}</Text> //generates HTML from the JS function
                }} 
            />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen;