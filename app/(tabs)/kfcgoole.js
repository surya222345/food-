// KFCReviewScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';

const { width } = Dimensions.get('window');

// Initial Google Reviews (mock)
const initialReviews = [
  { id: '1', user: 'Arjun', rating: '⭐⭐⭐⭐⭐', review: 'Best chicken ever! Finger licking good.' },
  { id: '2', user: 'Priya', rating: '⭐⭐⭐⭐', review: 'Loved the burgers and fries combo 🍔🍟.' },
  { id: '3', user: 'Rahul', rating: '⭐⭐⭐', review: 'Good taste but delivery was late.' },
  { id: '4', user: 'Meena', rating: '⭐⭐⭐⭐⭐', review: 'Pizza was fresh and yummy 😋.' },
  { id: '5', user: 'Vikram', rating: '⭐⭐⭐⭐', review: 'Nice ambience and quick service.' },
];

export default function KFCReviewScreen() {
  const [reviews, setReviews] = useState(initialReviews);
  const [message, setMessage] = useState('');

  const addReview = () => {
    if (!message.trim()) {
      alert('Please type your review!');
      return;
    }

    const newReview = {
      id: Date.now().toString(),
      user: 'Guest User',
      rating: '⭐⭐⭐⭐', // default rating
      review: message,
    };

    setReviews([newReview, ...reviews]); // add new review at top
    setMessage('');
  };

  const renderReview = ({ item }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
          style={styles.userIcon}
        />
        <Text style={styles.reviewUser}>{item.user}</Text>
      </View>
      <Text style={styles.reviewRating}>{item.rating}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        ListHeaderComponent={
          <>
            <Image source={require('./im/kfc.jpg')} style={styles.banner} />
            <Text style={styles.title}>KFC Google Reviews</Text>
          </>
        }
        contentContainerStyle={{ padding: 15 }}
      />

      {/* Message Box */}
      <View style={styles.messageBox}>
        <TextInput
          style={styles.input}
          placeholder="Write your review..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <TouchableOpacity style={styles.sendButton} onPress={addReview}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  banner: { width:334, height: 200, resizeMode: 'cover' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 15, color: '#f75c09',marginLeft:0 },

  reviewCard: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 12, marginBottom: 12, elevation: 2 },
  reviewHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  userIcon: { width: 32, height: 32, borderRadius: 16, marginRight: 10 },
  reviewUser: { fontWeight: 'bold', fontSize: 16, color: '#333' },
  reviewRating: { fontSize: 14, marginBottom: 6, color: '#f75c09' },
  reviewText: { fontSize: 14, color: '#555' },

  // Message Box
  messageBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    backgroundColor: '#f75c09',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendText: { color: '#fff', fontWeight: 'bold' },
});
