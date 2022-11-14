import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import Paragraph from "/components/Paragraph";
import resolveStyles from "/styles/subpage";
import ListItem from "/components/ListItem";

export default function Antistresova({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);

  const goTo = (dest) => {
    navigation.push(dest);
  };

  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Антистресова активність</Text>
          <Paragraph style={{ paddingBottom: 20 }}>
            Не буває прийомів, які були б ефективними абсолютно для всіх. Комусь легше нормалізувати свій психологічний
            стан шляхом розслаблення м’язів, декому – шляхом рухової активності. Хтось ліпше використовує можливості уяви, а хтось – абстрактно-логічного
            мислення. Тому спробувавши методи психологічної саморегуляції, потрібно обрати для себе найефективніший. Як результат зменшується тривалість
            негативного впливу стресогенної ситуації, знижується рівень негативного впливу стресу на організм людини.
          </Paragraph>

          <ListItem roundTop title="Тілесні вправи" onPress={() => goTo("Tilesni")} />
          <ListItem title="Релаксаційні вправи" onPress={() => goTo("Relaksaciini")} />
          <ListItem title="Когнітивні вправи" onPress={() => goTo("Kognitivni")} />
          <ListItem roundBottom title="Дихальні вправи" onPress={() => goTo("Dinalni")} />

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
