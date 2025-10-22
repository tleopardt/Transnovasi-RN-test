import { View, Text } from "react-native";
import React from "react";
import { ROUTES } from "../constant";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "../tabs";

const Stack = createNativeStackNavigator()

const MainRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Group>
        <Stack.Screen name={ROUTES.App} component={Tabs} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainRoutes;
