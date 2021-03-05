import React from "react";
import { StyleSheet, Dimensions, Button, View } from "react-native";

export default ({ onPressLeft, textLeft, togglePointsFilter }) => {
  return (
    <View style={styles.panel}>
      <Button onPress={onPressLeft} title={textLeft} color="#F18701" />
      <Button
        title="Mostrar/Ocultar"
        onPress={togglePointsFilter}
        color="#F18701"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
