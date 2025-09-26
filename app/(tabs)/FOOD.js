// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
// import { useRouter } from 'expo-router';

// export default function FoodScreen() {
//   const [activeDot, setActiveDot] = useState(0);
//     const router = useRouter(); // router instance
  
//     const handleNext = () => {
//       if (activeDot < 3) {
//         setActiveDot(activeDot + 1);
//       } else {
//         router.push('/FAV'); // ✅ go to Chef after last dot
//       }
//     };
  
//     const handleSkip = () => {
//       router.push('/FAV'); // ✅ skip directly to Chef
//     };
  

//   return (
//     <ImageBackground source={require('./im/food.jpg')} style={styles.background}>
//       <View style={styles.overlay}>
        

//         {/* Dots */}
//         <View style={styles.dotsRow}>
//           {[0, 1, 2, 3].map((i) => (
//             <View key={i} style={[styles.dot, i === activeDot ? styles.activeDot : null]} />
//           ))}
//         </View>

//         {/* Next button */}
//         <TouchableOpacity style={styles.nextButton} onPress={handleSkip}>
//           <Text style={styles.nextText}>Next</Text>
//         </TouchableOpacity>

//         {/* Skip text */}
//         <TouchableOpacity onPress={handleSkip}>
//           <Text style={styles.skipText}>Skip</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   overlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.4)',
//     width: '100%',
//   },
//   title: {
//     fontSize: 34,
//     marginBottom: 20,
//     color: '#fff',
//     fontWeight: 'bold',
//     paddingTop: 360,
//   },
//   title1: {
//     fontSize: 22,
//     marginBottom: 10,
//     color: '#fff',
//   },
//   title2: {
//     fontSize: 22,
//     marginBottom: 40,
//     color: '#fff',
//   },
//   dotsRow: {
//     flexDirection: 'row',
//     marginTop: 20,
//     marginBottom: 40,
//   },
//   dot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     backgroundColor: '#aaa',
//     marginHorizontal: 6,
//   },
//   activeDot: {
//     backgroundColor: '#fff',
//   },
//   nextButton: {
//     backgroundColor: '#f75c09ff',
//     paddingVertical: 12,
//     paddingHorizontal: 100,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   nextText: {
//     color: '#000',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   skipText: {
//     color: '#fff',
//     fontSize: 16,
//     textDecorationLine: 'underline',
//   },
// });
