// app/location.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";

const { width, height } = Dimensions.get("window");

export default function LocationScreen() {
  const region = {
    latitude: 13.0827,   // Chennai latitude
    longitude: 80.2707, // Chennai longitude
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>📍 Your Location</Text>

      {/* Real Map */}
      <MapView style={styles.map} initialRegion={region}>
        {/* Marker */}
        <Marker
          coordinate={{ latitude: 13.0827, longitude: 80.2707 }}
          title="My Location"
          description="123, Main Street, Chennai, India"
        />
      </MapView>

      {/* Address Info */}
      <View style={styles.infoBox}>
        <Ionicons name="location" size={22} color="#f75c09" />
        <Text style={styles.infoText}>123, Main Street, Chennai, India</Text>
      </View>

      {/* Update Location Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Update Location</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f75c09",
    marginBottom: 20,
    textAlign: "center",
  },
  map: {
    width: width - 40,
    height: height * 0.4,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
  },
  infoText: { marginLeft: 10, fontSize: 16, color: "#333", flexShrink: 1 },
  button: {
    backgroundColor: "#f75c09",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
