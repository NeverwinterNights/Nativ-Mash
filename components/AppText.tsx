import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, style }: any) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text:  {
    ...Platform.select({
      ios: {
        fontSize: 18,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 16,
        fontFamily: "Roboto",
      }
    })
  }
});

export default AppText;
