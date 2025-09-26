import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ for Expo Router

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleReset = () => {
    // Implement password reset logic here
    alert('Password reset link sent to ' + email);
  };

  const handleBackToLogin = () => {
    router.push('/LoginScreen'); // Navigate back to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToLogin}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex:1, 
    justifyContent:'center', 
    alignItems:'center', 
    padding:20,
    backgroundColor: '#ffffff', // ✅ White background
  },
  title: { fontSize:32, fontWeight:'bold', marginBottom:20 },
  input: { width:'100%', borderWidth:1, padding:10, marginBottom:15, borderRadius:8 },
  button: { backgroundColor:'#f75c09', padding:15, borderRadius:8, width:'100%', alignItems:'center' },
  buttonText: { color:'#fff', fontWeight:'bold', fontSize:18 },
  link: { color:'blue', marginTop:15, textDecorationLine:'underline' }
});

export default ForgotPasswordScreen;
