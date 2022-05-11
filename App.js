import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, Button, Image } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './screens/welcome'
import MainMenu from './screens/mainMenu'
import MainStack from './Routes/MainStack';
import EkstrennaDopomoga from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaDopomoga";
import Strah from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/strah";
import Isteryka from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/isteryka";
import Plach from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/plach";
import Stupor from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/stupor";
import NervoveTremtinnya from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/nervoveTremtinnya";
import Agresiya from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/agresiya";
import Marennya from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/marennya";
import Perezbudzennya from "./screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/perezbudzennya";
import Techniky from "./screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/techniky";
import DlyaSebe from "./screens/psychologichnaDopomoga/dlyaSebe/dlyaSebe";
import Dytuni from "./screens/psychologichnaDopomoga/dytyni/dytuni";
import AntyStrestres from "./screens/psychologichnaDopomoga/dytyni/dytuniScreens/antyStrestres";
import Igry from "./screens/psychologichnaDopomoga/dytyni/dytuniScreens/igry";
import Kontakty from "./screens/nadzvychaynaSytuaziya/kontakty/kontakty";
import Diyi from "./screens/nadzvychaynaSytuaziya/diyi/diyi";

export default function App() {
  return (
      <Diyi/>
  );
}
