import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';  

const SignUpScreen = () => {
  const router = useRouter(); // ✅ Expo Router instance

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    Alert.alert('Success', 'Sign Up Successful');
    router.push('/Verification'); // Navigate to Verification screen
  };

  const handleLogin = () => {
    router.push('/LoginScreen'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <TextInput 
        placeholder="Email" 
        style={styles.input} 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        style={styles.input} 
        value={password} 
        onChangeText={setPassword} 
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.link}>Already have an account? Login</Text>
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
  button: { backgroundColor:'#f75c09', padding:15, borderRadius:8, width:'100%', alignItems:'center', marginBottom:10 },
  buttonText: { color:'#fff', fontWeight:'bold', fontSize:18 },
  link: { color:'blue', textDecorationLine:'underline' }
});

export default SignUpScreen;
