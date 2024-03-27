import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { planet } from "../../data/Planets";

export default function Category() {
  return (
    <View style={styles.container}>
      <Title title="Category" />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" data={planet} />
    </View>
  );
}
