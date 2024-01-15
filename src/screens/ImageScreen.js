import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
    return (
        <View> 
            <ImageDetail title="Image 1" imageSource={require('../../assets/desktop.jpg')}/>
            <ImageDetail title="Image 2"/>
            <ImageDetail title="Image 3"/>
        </View>
        //create component details for shortcut 
    )
}

const styles = StyleSheet.create({})

export default ImageScreen;