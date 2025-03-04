import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/Navigations/AuthNavigator";
import AppStack from "./src/Navigations/AppStack";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with real auth logic

  return (
    <>
    {/* <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthNavigator />}
    </NavigationContainer> */}
    <AuthNavigator />
    </>
  );
};

export default App;
