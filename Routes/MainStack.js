import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "/components/ThemeProvider";
import { Names } from "./NamesMap";

const Stack = createStackNavigator();
export default function MainStack() {
  const { computeTheme } = React.useContext(ThemeContext);
  const backgroundColor = computeTheme() === "dark" ? "#18203A" : "#F3F3F3";

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor },
      }}
    >
      {Object.keys(Names).map((key, idx) => {
        // console.log(Names[key].name.replaceAll(' ', '-').toLowerCase());
        return <Stack.Screen key={idx} name={Names[key].name} component={Names[key].component} />
      })}
      
    </Stack.Navigator>
  );
}
