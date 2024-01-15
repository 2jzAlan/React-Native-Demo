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
      <Button //component for simple button detecting press
        onPress={() => navigation.navigate('Image')} //button actions onPress
        title="Go to Image Demo" //name of the button
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