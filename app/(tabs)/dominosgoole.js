// DominosReviewScreen.js
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

const initialReviews = [
  { id: '1', user: 'Sneha', rating: '⭐⭐⭐⭐⭐', review: 'Cheese Burst pizza is just amazing! 🍕' },
  { id: '2', user: 'Karthik', rating: '⭐⭐⭐⭐', review: 'Delivery was fast and pizza was hot 🔥' },
  { id: '3', user: 'Lakshmi', rating: '⭐⭐⭐', review: 'Good taste but felt a little oily.' },
  { id: '4', user: 'Ravi', rating: '⭐⭐⭐⭐⭐', review: 'Loved the Garlic breadsticks, super soft 😍' },
  { id: '5', user: 'Divya', rating: '⭐⭐⭐⭐', review: 'Nice ambience and great customer service!' },
];

export default function DominosReviewScreen() {
  const [reviews, setReviews] = useState(initialReviews);
  const [message, setMessage] = useState('');
  const [search, setSearch] = useState('');

  // Filter reviews based on search
  const filteredReviews = reviews.filter(
    (r) =>
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.review.toLowerCase().includes(search.toLowerCase())
  );

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
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search reviews..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredReviews}
        keyExtractor={(item) => item.id}
        renderItem={renderReview}
        ListHeaderComponent={
          <>
            {/* Banner */}
            <Image source={require('./im/dominos.jpg')} style={styles.banner} />
            <Text style={styles.title}>Domino’s Google Reviews</Text>
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
    width: width - 30,
    height: 200,
    resizeMode: 'cover',
    marginTop: 15,
    borderRadius: 6,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#006491',
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
  reviewRating: { fontSize: 14, marginBottom: 6, color: '#006491' },
  reviewText: { fontSize: 14, color: '#555' },

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
    backgroundColor: '#006491',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendText: { color: '#fff', fontWeight: 'bold' },

  // Search Bar
  searchBar: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 10,
    padding: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
});
