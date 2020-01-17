import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main: {
        screen: Main,
        navigationOptions: {
          headerTitle: "DevRadar"
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          headerTitle: "Perfil no Github"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#7d40e7"
        }
      }
    }
  )
);

export default Routes;
