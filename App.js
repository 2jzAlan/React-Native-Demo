import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'; //* import *ComponentName* from './src/screens/ComponentName';
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";

const navigator = createStackNavigator( //Shows content at any given time
  {
    Home: HomeScreen,
    Components: ComponentsScreen, //add component screen name
    List: ListScreen,
    Image: ImageScreen,
  },
  {
    initialRouteName: "Home",  //change the initial page from expo
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
