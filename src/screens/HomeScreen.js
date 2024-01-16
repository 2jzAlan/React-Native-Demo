import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({ navigation}) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button //component for simple button detecting press
        onPress={() => navigation.navigate('Components')} //button actions onPress
        title="Go to Components Demo" //name of the button
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to Image Demo"
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View> //TouchableOpacity is a highly customizable component that dectects a press of any kind of element. it has hover effect by default
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;