import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { ThemeContext } from "/components/ThemeProvider";
import WelcomeScreen from "/screens/welcome";
import MainMenu from "/screens/mainMenu";

import EkstrennaDopomoga from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaDopomoga";
import Strah from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/strah";
import Isteryka from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/isteryka";
import Plach from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/plach";
import Stupor from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/stupor";
import NervoveTremtinnya from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/nervoveTremtinnya";
import Agresiya from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/agresiya";
import Marennya from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/marennya";
import Perezbudzennya from "/screens/psychologichnaDopomoga/ekstrennaDopomoga/ekstrennaScreens/perezbudzennya";

import DlyaSebe from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebe";
// DlyaSebe ================>
import Shodenna from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/Shodenna";
import Antistresova from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/Antistresova";

//====================

// Shodenna ================>
import Shvidkii from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/Shvidkii";
import Spokiine from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/Spokiine";
import VnutrishniiSad from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/VnutrishniiSad";
import VnutrishniiSeif from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/VnutrishniiSeif";
import CheroBilaFoto from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/CheroBilaFoto";
import ChernoBilaCadr from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/ChernoBilaCadr";
import Tehnika from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/Tehnika";
import Kvitka from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/Kvitka";
import YaMau from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/ShodennaFile/YaMau";
//====================

// Self Help Ad Hoc ================>
import Techniky from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/Techniky";

import VidchuvaySvoeTilo from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/01-TilesniTech/01-VidchuvaySvoeTilo";
import ObiymyMetelyka from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/01-TilesniTech/02-ObiymyMetelyka";
import BilateraPopleskuvannya from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/01-TilesniTech/03-BilateraPopleskuvannya";
import Desensetyzatsiya from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/01-TilesniTech/04-Desensetyzatsiya";

import Stabilizatsiya from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/02-DyhalnyTech/01-Stabilizatsiya";
import TryPyatSim from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/02-DyhalnyTech/02-TryPyatSim";

import ZaVidchuttyamNih from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/03-ZazemlennyaTech/01-ZaVidchuttyamNih";
import VPolozhenniLezhachy from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/03-ZazemlennyaTech/02-VPolozhenniLezhachy";
import VRusy from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/03-ZazemlennyaTech/03-VRusy";
import ZVidtvorennyamRytmu from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/03-ZazemlennyaTech/04-ZVidtvorennyamRytmu";
import CherezAktyvnyDiyi from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/SelfHelpAdHoc/03-ZazemlennyaTech/05-CherezAktyvnyDiyi";
//====================

// Antistresova ================>
import Tilesni from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/AntistresovaFile/Tilesni";
import Relaksaciini from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/AntistresovaFile/Relaksaciini";
import Kognitivni from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/AntistresovaFile/Kognitivni";
import Dinalni from "/screens/psychologichnaDopomoga/dlyaSebe/dlyaSebeScreens/AntistresovaFile/Dinalni";
//====================

import Dytuni from "/screens/psychologichnaDopomoga/dytyni/dytuni";
// Dytuni ================>

import Igry from "/screens/psychologichnaDopomoga/dytyni/dytuniScreens/igry";
import Multfilmi from "/screens/psychologichnaDopomoga/dytyni/dytuniScreens/Multfilmi";
import Chasti from "/screens/psychologichnaDopomoga/dytyni/dytuniScreens/Chasti";

import Diti from "/screens/psychologichnaDopomoga/dytyni/dytuniScreens/Diti";
import Pidlitki from "/screens/psychologichnaDopomoga/dytyni/dytuniScreens/Pidlitki";
//====================

import Kontakty from "/screens/nadzvychaynaSytuaziya/kontakty/kontakty";

import Diyi from "/screens/nadzvychaynaSytuaziya/diyi/diyi";
// Diyi ================>
import Povitryana from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/povitryana"
import Artileriickii from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/Artileriickii";
import Telebachennya from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/telebachennya"
import Zastosuvannya from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/Zastosuvannya";
import Evakuachiya from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/Evakuachiya";
import VibuhonebezpechniZnahidki from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/VibuhonebezpechniZnahidki"
import VibuhonebezpechniPredmeti from "/screens/nadzvychaynaSytuaziya/diyi/diyiScreens/VibuhonebezpechniZnahidki/VibuhonebezpechniPredmeti"




//====================
const Stack = createStackNavigator();

// To set a test screen to be first, add below property to Stack.Navigator. TODO: PROD: remove that property
// initialRouteName="MainMenu"

function MainStack() {
  const { computeTheme } = React.useContext(ThemeContext);
  const backgroundColor = computeTheme() === "dark" ? "#18203A" : "#F3F3F3";
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
      {/* DlyaSebe =====================> */}
      <Stack.Screen name="Antistresova" component={Antistresova} />
      <Stack.Screen name="Shodenna" component={Shodenna} />

      {/*===================== */}

      {/* Shodenna =====================> */}
      <Stack.Screen name="Shvidkii" component={Shvidkii} />
      <Stack.Screen name="Spokiine" component={Spokiine} />
      <Stack.Screen name="VnutrishniiSad" component={VnutrishniiSad} />
      <Stack.Screen name="VnutrishniiSeif" component={VnutrishniiSeif} />
      <Stack.Screen name="CheroBilaFoto" component={CheroBilaFoto} />
      <Stack.Screen name="ChernoBilaCadr" component={ChernoBilaCadr} />
      <Stack.Screen name="Tehnika" component={Tehnika} />
      <Stack.Screen name="Kvitka" component={Kvitka} />
      <Stack.Screen name="YaMau" component={YaMau} />
      {/*===================== */}

      {/* Antistresova =====================> */}
      <Stack.Screen name="Tilesni" component={Tilesni} />
      <Stack.Screen name="Relaksaciini" component={Relaksaciini} />
      <Stack.Screen name="Kognitivni" component={Kognitivni} />
      <Stack.Screen name="Dinalni" component={Dinalni} />
      {/*===================== */}

      {/* Self Help Ad Hoc ================> */}
      <Stack.Screen name="Techniky" component={Techniky} />
      <Stack.Screen name="VidchuvaySvoeTilo" component={VidchuvaySvoeTilo} />
      <Stack.Screen name="ObiymyMetelyka" component={ObiymyMetelyka} />
      <Stack.Screen name="BilateraPopleskuvannya" component={BilateraPopleskuvannya} />
      <Stack.Screen name="Desensetyzatsiya" component={Desensetyzatsiya} />
      <Stack.Screen name="Stabilizatsiya" component={Stabilizatsiya} />
      <Stack.Screen name="TryPyatSim" component={TryPyatSim} />
      <Stack.Screen name="ZaVidchuttyamNih" component={ZaVidchuttyamNih} />
      <Stack.Screen name="VPolozhenniLezhachy" component={VPolozhenniLezhachy} />
      <Stack.Screen name="VRusy" component={VRusy} />
      <Stack.Screen name="ZVidtvorennyamRytmu" component={ZVidtvorennyamRytmu} />
      <Stack.Screen name="CherezAktyvnyDiyi" component={CherezAktyvnyDiyi} />
      {/*===================== */}

      <Stack.Screen name="Dytuni" component={Dytuni} />
      {/* Dytuni =====================> */}
      
      <Stack.Screen name="Igry" component={Igry} />
      <Stack.Screen name="Multfilmi" component={Multfilmi} />

      <Stack.Screen name="Chasti" component={Chasti} />

      <Stack.Screen name="Diti" component={Diti} />
      <Stack.Screen name="Pidlitki" component={Pidlitki} />
      {/*===================== */}  


      <Stack.Screen name="Kontakty" component={Kontakty} />


      <Stack.Screen name="Diyi" component={Diyi} />
      {/* Dytuni =====================> */}
      <Stack.Screen name="Povitryana" component={Povitryana} />
      <Stack.Screen name="Artileriickii" component={Artileriickii} />
      <Stack.Screen name="Telebachennya" component={Telebachennya} />
      <Stack.Screen name="Zastosuvannya" component={Zastosuvannya} />
      <Stack.Screen name="Evakuachiya" component={Evakuachiya} />
      <Stack.Screen name="VibuhonebezpechniZnahidki" component={VibuhonebezpechniZnahidki} />
      <Stack.Screen name="VibuhonebezpechniPredmeti" component={VibuhonebezpechniPredmeti} />
    </Stack.Navigator>
  );
}

export default MainStack;
