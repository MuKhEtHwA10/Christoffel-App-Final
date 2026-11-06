import React from "react";
import { Pressable, Text } from "react-native";
import { styles } from "../constants/styles";
import { QuickActionProps } from "../types";

export default function QuickAction({ icon, title, onPress }: QuickActionProps): React.JSX.Element {
  return (
    <Pressable style={styles.quickAction} onPress={onPress}>
      <Text style={styles.quickIcon}>{icon}</Text>
      <Text style={styles.quickText}>{title}</Text>
    </Pressable>
  );
}
