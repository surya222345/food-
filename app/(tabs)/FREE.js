import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

const FreeScreen = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/LoginScreen'); // Navigate to login
  };

  return (
    <View style={styles.container}> 
      <ImageBackground 
        source={require('./im/free7.jpg')}  
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Free delivery offers</Text>
          <Text style={styles.subtitle}>Get all your loved foods in one once place,,</Text>
          <Text style={styles.subtitle}>You just place the orer we do the rest</Text>

          {/* GET STARTED button */}
          <TouchableOpacity style={styles.startButton} onPress={handleStart}>
            <Text style={styles.startText}>GET STARTED</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  overlay: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'rgba(0,0,0,0.4)', 
    width: '100%',
    paddingHorizontal: width * 0.05,
  },
  title: { 
    fontSize: width * 0.08, 
    marginBottom: height * 0.02, 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  subtitle: { 
    fontSize: width * 0.05, 
    marginBottom: height * 0.01, 
    color: '#fff', 
    textAlign: 'center',
  },
  startButton: {
    backgroundColor: '#f75c09',
    paddingVertical: height * 0.02,
    paddingHorizontal: width * 0.25,
    borderRadius: 10,
    marginTop: height * 0.05,
  },
  startText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: width * 0.05, 
    textAlign: 'center',
  },
});

export default FreeScreen;
