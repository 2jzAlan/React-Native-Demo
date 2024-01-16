import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen'; //* import *ComponentName* from './src/screens/ComponentName';
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorScreen";
import SquareScreen from "./src/screens/SquareScreen";

const navigator = createStackNavigator( //Shows content at any given time
  {
    Home: HomeScreen,
    Components: ComponentsScreen, //add component screen name
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,

  },
  {
    initialRouteName: "Home",  //change the initial page from expo
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
