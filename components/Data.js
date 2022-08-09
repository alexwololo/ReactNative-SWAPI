import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Data() {
  const [Data, setData] = useState("");

  function LoadData() {
    let Number = Math.ceil(Math.random() * 80);

    console.log(Number);

    fetch(`https://swapi.dev/api/people/${Number}/ `)
      .then((response) => response.json())
      .then((json) => setData(json));
  }
  console.log(Data);
  return (
    <>
      {Data ? (
        <View style={[styles.card, { width: "65%" }]}>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>NAME: </Text> {Data.name}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>height: </Text> {Data.height}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>mass: </Text> {Data.mass}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>hair color: </Text>{" "}
            {Data.hair_color}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>skin color: </Text>{" "}
            {Data.skin_color}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>eye color: </Text>{" "}
            {Data.eye_color}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>birth year: </Text>{" "}
            {Data.birth_year}
          </Text>
          <Text style={styles.data}>
            <Text style={{ fontWeight: "bold" }}>gender: </Text> {Data.gender}
          </Text>
          <TouchableOpacity
            onPress={() => LoadData()}
            style={styles.loadButton}
          >
            <Text style={{ color: "white" }}>Load Data</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={[styles.card, { width: "50%" }]}>
          <Text style={styles.data}>NO DATA</Text>
          <Text style={styles.data}>PLEASE LOAD DATA</Text>
          <TouchableOpacity
            onPress={() => LoadData()}
            style={styles.loadButton}
          >
            <Text style={{ color: "white" }}>Load Data</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1c1c1c",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  data: {
    color: "white",
    lineHeight: 25,
    textTransform: "uppercase",
  },
  loadButton: {
    backgroundColor: "#6f6f6f",
    padding: 4,
    borderRadius: 3,
    marginVertical: 5,
  },
});
