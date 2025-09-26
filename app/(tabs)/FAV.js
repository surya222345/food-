import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function FavScreen() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current; // initial opacity: 0

  // Fade-in animation
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  // Auto navigate after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/CHEF');
    }, 4000); // 4000ms = 4 seconds

    return () => clearTimeout(timer); // cleanup
  }, [router]);

  const handleNext = () => {
    router.push('/CHEF'); // Manual navigation
  };

  const handleSkip = () => {
    router.push('/CHEF'); // Skip button
  };

  return (
    <ImageBackground 
      source={require('./im/fav.webp')} 
      style={styles.background}
      resizeMode="cover"
    >
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        {/* Titles */}
        <Text style={styles.title}>All Your Favorites</Text>
        <Text style={styles.subtitle}>Get your loved foods in one place</Text>
        <Text style={styles.subtitle}>You just order, we do the rest</Text>

        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>Start</Text>
        </TouchableOpacity>

        {/* Skip Button */}
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: width * 0.05,
  },
  title: {
    fontSize: width * 0.08,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.02,
    marginTop: 50,
  },
  subtitle: {
    fontSize: width * 0.05,
    color: '#fff',
    textAlign: 'center',
    marginBottom: height * 0.02,
  },
  nextButton: {
    backgroundColor: '#f75c09',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.25,
    borderRadius: 10,
    marginTop: height * 0.05,
    marginBottom: height * 0.02,
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: width * 0.05,
    textAlign: 'center',
  },
  skipText: {
    color: '#fff',
    fontSize: width * 0.045,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
