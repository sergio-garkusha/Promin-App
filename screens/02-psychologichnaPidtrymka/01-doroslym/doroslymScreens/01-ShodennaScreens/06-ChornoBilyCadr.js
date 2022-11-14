import React from "react";
import { Text, View, ScrollView } from "react-native";
import { ThemeContext } from "/components/ThemeProvider";
import { FontSizeContext } from "/components/FontSizeProvider";
import Header from "/components/Header";
import Bullet from "/components/Bullet";
import resolveStyles from "/styles/subpage";

export default function ChornoBilyCadr({ navigation }) {
  const { computeTheme } = React.useContext(ThemeContext);
  const { computeFontSize } = React.useContext(FontSizeContext);
  const styles = resolveStyles(computeTheme(), computeFontSize);
  return (
    <View>
      <Header backButton navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Вправа «Чорно-білий кадр»</Text>

          <Bullet symbol="•" style={styles.paragraph}>
            Цей прийом дозволяє «виправити» пам'ять та зменшити інтенсивність емоційного реагування на травмуючі спогади. Не рекомендуємо користуватися ним для того, щоб забути минуле в загострений період, що йде відразу за подією, що шокує. Користуйтеся ним активно тільки через деякий час.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Ви робитимете те саме, що ви робили в школі з двійкою у щоденнику за допомогою леза. Ви прали її і малювали на її місці четвірку. "Щоденник" Вашого життя після цієї вправи буде виглядати інакше, і ви зможете перестати хвилюватися через "погані оцінки" у минулому.
          </Bullet>
          <Bullet symbol="•" style={styles.paragraph}>
            Програйте у своїй уяві шокуючу подію з Вашого минулого, яку Ви хочете забути. Так, прошу Вас заглянути в це жахливе минуле, яке так Вас лякає та бентежить. Але зробіть це по-особливому – в кінотеатрі у вигляді чорно-білого кіно зі смішною музикою на задньому фоні. Увімкніть кіно та займіть своє місце на задніх рядах кінотеатру. Вставте у Ваше кіно сміх глядачів у залі. Додайте істеричний сміх місцями. Деякі сюжети прокручуйте задом наперед, щоб зробити фільм смішнішим. Прокручуйте Ваш фільм доти, доки він не припинить бентежити Вас.
          </Bullet>

          <View style={styles.spacer} />
        </View>
      </ScrollView>
    </View>
  );
}
