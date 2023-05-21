import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "/components/ThemeProvider";
import DisclaimerScreen from "/screens/disclaimer";
import WelcomeScreen from "/screens/welcome";
import MainMenu from "/screens/mainMenu";
import AboutUs from "/screens/aboutUs";
import UsefulLinks from "/screens/usefulLinks";

import EkstrennaDopomoga from "/screens/01-ekstrennaDopomoga/ekstrennaDopomoga";
import Strah from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/01-strah";
import Isteryka from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/02-isteryka";
import Plach from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/03-plach";
import Stupor from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/04-stupor";
import NervoveTremtinnya from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/05-nervoveTremtinnya";
import Agresiya from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/06-agresiya";
import Marennya from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/07-marennya";
import Perezbudzennya from "/screens/01-ekstrennaDopomoga/ekstrennaScreens/08-perezbudzennya";

import Doroslym from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslym";
// Doroslym ================>
import Shodenna from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/Shodenna";
import Antistresova from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/Antistresova";
//====================

// Shodenna ================>
import Shvydkiy from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/01-Shvydkiy";
import Spokiyne from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/02-Spokiyne";
import VnutrishnySad from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/03-VnutrishnySad";
import VnutrishnySeif from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/04-VnutrishnySeif";
import ChornoBileFoto from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/05-ChornoBileFoto";
import ChornoBilyCadr from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/06-ChornoBilyCadr";
import Tehnika from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/07-Tehnika";
import Kvitka from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/08-Kvitka";
import YaMaiu from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/01-ShodennaScreens/09-YaMaiu";
//====================

// Self Help Ad Hoc ================>
import Techniky from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/Techniky";

import VidchuvaySvoeTilo from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/01-TilesniTech/01-VidchuvaySvoeTilo";
import ObiymyMetelyka from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/01-TilesniTech/02-ObiymyMetelyka";
import BilateraPopleskuvannya from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/01-TilesniTech/03-BilateraPopleskuvannya";
import Desensetyzatsiya from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/01-TilesniTech/04-Desensetyzatsiya";

import Stabilizatsiya from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/02-DyhalnyTech/01-Stabilizatsiya";
import TryPyatSim from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/02-DyhalnyTech/02-TryPyatSim";

import ZaVidchuttyamNih from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/03-ZazemlennyaTech/01-ZaVidchuttyamNih";
import VPolozhenniLezhachy from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/03-ZazemlennyaTech/02-VPolozhenniLezhachy";
import VRusy from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/03-ZazemlennyaTech/03-VRusy";
import ZVidtvorennyamRytmu from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/03-ZazemlennyaTech/04-ZVidtvorennyamRytmu";
import CherezAktyvnyDiyi from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/02-SelfHelpAdHoc/03-ZazemlennyaTech/05-CherezAktyvnyDiyi";
//====================

// Antistresova ================>
import Tilesni from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/03-AntistresovaScreens/01-Tilesni";
import Relaksaciini from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/03-AntistresovaScreens/02-Relaksaciini";
import Kognitivni from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/03-AntistresovaScreens/03-Kognitivni";
import Dinalni from "/screens/02-psychologichnaPidtrymka/01-doroslym/doroslymScreens/03-AntistresovaScreens/04-Dinalni";
//====================

import Dytyni from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyni";
// Dytyni ================>

import Igry from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyniScreens/01-Igry";
import Multfilmy from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyniScreens/02-Multfilmy";
import Chasty from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyniScreens/03-Chasty";

import Dity from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyniScreens/04-Dity";
import Pidlitky from "/screens/02-psychologichnaPidtrymka/02-dityam/dytyniScreens/05-Pidlitky";
//====================

// Kontakty =========>
import Kontakty from "/screens/03-nadzvychaynaSytuaziya/01-kontakty/kontakty";
import EmergencyMentalHelp from "/screens/03-nadzvychaynaSytuaziya/01-kontakty/kontaktyScreens/01-EmergencyMentalHelp";
//====================

import Diyi from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyi";
// Diyi ================>
import Povitryana from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/01-Povitryana";
import Artyleriycky from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/02-Artyleriycky";
import Telebachennya from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/03-Telebachennya"
import Zastosuvannya from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/04-Zastosuvannya";
import Evakuatciya from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/05-Evakuatciya";
import VybuhonebezpechniZnahidky from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/06-VybuhonebezpechniZnahidky"
import VybuhonebezpechniPredmety from "/screens/03-nadzvychaynaSytuaziya/02-diyi/diyiScreens/07-VybuhonebezpechniPredmety"
//====================

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
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="DisclaimerScreen" component={DisclaimerScreen} />
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="UsefulLinks" component={UsefulLinks} />

      <Stack.Screen name="EkstrennaDopomoga" component={EkstrennaDopomoga} />
      <Stack.Screen name="Strah" component={Strah} />
      <Stack.Screen name="Isteryka" component={Isteryka} />
      <Stack.Screen name="Plach" component={Plach} />
      <Stack.Screen name="Stupor" component={Stupor} />
      <Stack.Screen name="NervoveTremtinnya" component={NervoveTremtinnya} />
      <Stack.Screen name="Agresiya" component={Agresiya} />
      <Stack.Screen name="Marennya" component={Marennya} />
      <Stack.Screen name="Perezbudzennya" component={Perezbudzennya} />

      <Stack.Screen name="Doroslym" component={Doroslym} />
      {/* Doroslym =====================> */}
      <Stack.Screen name="Antistresova" component={Antistresova} />
      <Stack.Screen name="Shodenna" component={Shodenna} />

      {/*===================== */}

      {/* Shodenna =====================> */}
      <Stack.Screen name="Shvydkiy" component={Shvydkiy} />
      <Stack.Screen name="Spokiyne" component={Spokiyne} />
      <Stack.Screen name="VnutrishnySad" component={VnutrishnySad} />
      <Stack.Screen name="VnutrishnySeif" component={VnutrishnySeif} />
      <Stack.Screen name="ChornoBileFoto" component={ChornoBileFoto} />
      <Stack.Screen name="ChornoBilyCadr" component={ChornoBilyCadr} />
      <Stack.Screen name="Tehnika" component={Tehnika} />
      <Stack.Screen name="Kvitka" component={Kvitka} />
      <Stack.Screen name="YaMaiu" component={YaMaiu} />
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

      <Stack.Screen name="Dytyni" component={Dytyni} />
      {/* Dytyni =====================> */}

      <Stack.Screen name="Igry" component={Igry} />
      <Stack.Screen name="Multfilmy" component={Multfilmy} />

      <Stack.Screen name="Chasty" component={Chasty} />

      <Stack.Screen name="Dity" component={Dity} />
      <Stack.Screen name="Pidlitky" component={Pidlitky} />
      {/*===================== */}

      {/* Kontakty ==========> */}
      <Stack.Screen name="Kontakty" component={Kontakty} />
      <Stack.Screen name="EmergencyMentalHelp" component={EmergencyMentalHelp} />
      {/*===================== */}

      <Stack.Screen name="Diyi" component={Diyi} />
      {/* Dytyni =====================> */}
      <Stack.Screen name="Povitryana" component={Povitryana} />
      <Stack.Screen name="Artyleriycky" component={Artyleriycky} />
      <Stack.Screen name="Telebachennya" component={Telebachennya} />
      <Stack.Screen name="Zastosuvannya" component={Zastosuvannya} />
      <Stack.Screen name="Evakuatciya" component={Evakuatciya} />
      <Stack.Screen name="VybuhonebezpechniZnahidky" component={VybuhonebezpechniZnahidky} />
      <Stack.Screen name="VybuhonebezpechniPredmety" component={VybuhonebezpechniPredmety} />
    </Stack.Navigator>
  );
}
