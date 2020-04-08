import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen Names
import {
  LOGIN,
  COFFEE_SHOPS,
  COFFEE_SHOP,
  CART,
  SIGNUP,
  HISTORY,
} from "./screenNames";

import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";
import CoffeeCart from "../Components/CoffeeCart";
import History from "../Components/History";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import CartButton from "../Components/Buttons/CartButton";

const { Navigator, Screen } = createStackNavigator();

function RootNavigator() {
  return (
    <Navigator
      initialRouteName={LOGIN}
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "rgb(20,90,100)",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen
        name={COFFEE_SHOPS}
        component={CoffeeList}
        options={({ navigation }) => ({
          title: "Coffee Shops",
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen
        name={COFFEE_SHOP}
        component={CoffeeDetail}
        options={({ route, navigation }) => {
          const { coffeeshop } = route.params;
          return {
            title: coffeeshop.name,
            headerRight: () => <CartButton navigation={navigation} />,
          };
        }}
      />
      <Screen name={CART} component={CoffeeCart} />
      <Screen name={HISTORY} component={History} />
      <Screen name={LOGIN} component={Login} />
      <Screen name={SIGNUP} component={Signup} />
    </Navigator>
  );
}

export default RootNavigator;
