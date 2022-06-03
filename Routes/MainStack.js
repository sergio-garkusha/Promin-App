import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ThemeContext } from "@components/ThemeProvider";
import WelcomeScreen from "@screens/welcome";
import MainMenu from "@screens/mainMenu";

import EkstrennaDopomoga from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaDopomoga";
import Strah from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/strah";
import Isteryka from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/isteryka";
import Plach from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/plach";
import Stupor from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/stupor";
import NervoveTremtinnya from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/nervoveTremtinnya";
import Agresiya from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/agresiya";
import Marennya from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/marennya";
import Perezbudzennya from "@screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/perezbudzennya";

import DlyaSebe from "@screens/psychologichnaDopomoga/dlyaSebe/dlyaSebe";
import Techniky from "@screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/techniky";

import Dytuni from "@screens/psychologichnaDopomoga/dytyni/dytuni";
import AntyStrestres from "@screens/psychologichnaDopomoga/dytyni/dytuniScreens/antyStrestres";
import Igry from "@screens/psychologichnaDopomoga/dytyni/dytuniScreens/igry";

import Kontakty from "@screens/nadzvychaynaSytuaziya/kontakty/kontakty";

import Diyi from "@screens/nadzvychaynaSytuaziya/diyi/diyi";

const Stack = createStackNavigator();

// To set a test screen to be first, add below property to Stack.Navigator. TODO: PROD: remove that property
// initialRouteName="MainMenu"

function MainStack() {
  const { theme } = React.useContext(ThemeContext);
  const backgroundColor = theme === "dark" ? "#18203A" : "#F3F3F3";
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor },
      }}
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />

      <Stack.Screen name="EkstrennaDopomoga" component={EkstrennaDopomoga} />
      <Stack.Screen name="Strah" component={Strah} />
      <Stack.Screen name="Isteryka" component={Isteryka} />
      <Stack.Screen name="Plach" component={Plach} />
      <Stack.Screen name="Stupor" component={Stupor} />
      <Stack.Screen name="NervoveTremtinnya" component={NervoveTremtinnya} />
      <Stack.Screen name="Agresiya" component={Agresiya} />
      <Stack.Screen name="Marennya" component={Marennya} />
      <Stack.Screen name="Perezbudzennya" component={Perezbudzennya} />

      <Stack.Screen name="DlyaSebe" component={DlyaSebe} />
      <Stack.Screen name="Techniky" component={Techniky} />

      <Stack.Screen name="Dytuni" component={Dytuni} />
      <Stack.Screen name="AntyStrestres" component={AntyStrestres} />
      <Stack.Screen name="Igry" component={Igry} />

      <Stack.Screen name="Kontakty" component={Kontakty} />
      <Stack.Screen name="Diyi" component={Diyi} />
    </Stack.Navigator>
  );
}

export default MainStack;
