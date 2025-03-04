import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/Navigations/AuthNavigator";
import AppStack from "./src/Navigations/AppStack";
import Navigation from "./src/Test/TEstStack";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth logic

  return (
    <>
    {/* <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthNavigator />}
    </NavigationContainer> */}
    {/* <AuthNavigator /> */}
    <Navigation />
    </>
  );
};

export default App;
