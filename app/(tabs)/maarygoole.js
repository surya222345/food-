// MarryReviewScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

// Initial Marry Reviews (mock data)
const initialReviews = [
  { id: '1', user: 'Anitha', rating: '⭐⭐⭐⭐⭐', review: 'The sandwiches were fresh and tasty 😋' },
  { id: '2', user: 'Vignesh', rating: '⭐⭐⭐⭐', review: 'Loved the pizza and the ambience 🍕' },
  { id: '3', user: 'Swathi', rating: '⭐⭐⭐', review: 'Good, but delivery was a little late.' },
  { id: '4', user: 'Hari', rating: '⭐⭐⭐⭐⭐', review: 'Veggie burger was amazing, highly recommend! 🌱' },
  { id: '5', user: 'Deepa', rating: '⭐⭐⭐⭐', review: 'Club sandwich is my favourite, super tasty 🥪' },
];

export default function MarryReviewScreen() {
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

    setReviews([newReview, ...reviews]);
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
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        ListHeaderComponent={
          <>
            {/* Banner */}
            <Image source={require('./im/marry.jpg')} style={styles.banner} />
            <Text style={styles.title}>Marry Google Reviews</Text>
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
  banner: {
    width:318,
    height: 200,
    resizeMode: 'cover',
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius:6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#f75c09', // Orange brand color
  },

  reviewCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
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
