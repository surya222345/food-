// app/profile.js
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";   // ✅ use router for navigation

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => router.replace("/login") }, // go to login page
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
      {/* Header */}
      <View style={styles.headerCard}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.avatar}
        />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.name}>Surya Prakash</Text>
          <Text style={styles.email}>sprakash3178@gmail.com</Text>
        </View>
      </View>

      {/* Quick Action */}
      <TouchableOpacity style={styles.quickAction}>
        <Ionicons name="fast-food" size={24} color="#f75c09" />
        <Text style={styles.quickActionText}>My Orders</Text>
      </TouchableOpacity>

      {/* Info Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Info</Text>
        <View style={styles.infoBox}>
          <Ionicons name="call" size={20} color="#f75c09" />
          <Text style={styles.infoText}>+91 82200 22585</Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="location" size={20} color="#f75c09" />
          <Text style={styles.infoText}>Chennai, India</Text>
        </View>
        <View style={styles.infoBox}>
          <Ionicons name="mail" size={20} color="#f75c09" />
          <Text style={styles.infoText}>sprakash3178@gmail.com</Text>
        </View>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.buttonPrimary} onPress={() => router.push("/editProfile")}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={handleLogout}>
        <Text style={styles.buttonTextSecondary}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  headerCard: {
    backgroundColor: "#f75c09",
    width: "100%",
    padding: 25,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 20,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 3, borderColor: "#fff", marginBottom: 10 },
  name: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  email: { fontSize: 15, color: "#fff", marginTop: 5 },
  quickAction: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff8f2",
    padding: 15,
    borderRadius: 15,
    width: "90%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  quickActionText: { marginLeft: 10, fontSize: 16, color: "#333", fontWeight: "600" },
  section: { width: "90%", marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 15, color: "#333" },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  infoText: { marginLeft: 10, fontSize: 16, color: "#333" },
  buttonPrimary: {
    backgroundColor: "#f75c09",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  buttonSecondary: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#f75c09",
    padding: 15,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
    marginBottom: 40,
  },
  buttonTextSecondary: { color: "#f75c09", fontSize: 16, fontWeight: "bold" },
});
