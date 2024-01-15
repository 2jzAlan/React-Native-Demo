import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "./Components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Image 1"/>
            <ImageDetail title="Image 2"/>
            <ImageDetail title="Image 3"/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageScreen;