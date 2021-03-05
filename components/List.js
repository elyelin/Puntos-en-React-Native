import React from "react";
import {
  FlatList,
  Text,
  View,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal} color="#F18701" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    paddingBottom: 0,
  },
  list: {
    height: Dimensions.get("window").height - 250,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});
