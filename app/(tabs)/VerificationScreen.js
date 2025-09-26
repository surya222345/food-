import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // ✅ Expo Router

const VerificationScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    // Implement OTP verification logic here
    alert('OTP Verified: ' + otp);
    router.push('/HOME'); // Navigate back to Login screen
  };

  const handleBackToLogin = () => {
    router.push('/Login'); // Navigate back to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <TextInput 
        placeholder="Enter OTP" 
        style={styles.input} 
        keyboardType="numeric"
        value={otp} 
        onChangeText={setOtp} 
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToLogin}>
        <Text style={styles.link}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
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

export default VerificationScreen;
