// MarryScreen.js
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

// Marry menu
const marryMenu = [
  { id: '1', name: 'Cheese Burger', image: require('./im/b1.jpg'), price: 5 },
  { id: '2', name: 'Hamburger', image: require('./im/hamburger.jpg'), price: 6 },
  { id: '3', name: 'Turkey Burger', image: require('./im/turkeyburger.jpg'), price: 7 },
  { id: '4', name: 'Lamb Burger', image: require('./im/lambburger.jpg'), price: 8 },
  { id: '5', name: 'Veggie Burger', image: require('./im/veggieburger.jpg'), price: 4 },
  { id: '6', name: 'Neapolitan Pizza', image: require('./im/neapolitanpizza.jpg'), price: 12 },
  { id: '7', name: 'New York Pizza', image: require('./im/newyarkpizza.jpg'), price: 14 },
  { id: '8', name: 'Club Sandwich', image: require('./im/clubsandwhich.jpg'), price: 5 },
  { id: '9', name: 'Egg Sandwich', image: require('./im/eggsandwhich.jpg'), price: 6 },
];

export default function MarryScreen() {
  const router = useRouter();

  const [orders, setOrders] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const [search, setSearch] = useState('');

  // Filter menu based on search
  const filteredMenu = marryMenu.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  // Navigate to Google reviews page
  const handleSkip = () => {
    router.push('/maarygoole');
  };

  const handleOrder = (item) => {
    setSelectedItem(item);
  };

  const confirmOrder = () => {
    if (!selectedItem || !userDetails.name || !userDetails.phone || !userDetails.address) {
      alert('Please fill all details and select a food item!');
      return;
    }

    const newOrder = {
      ...selectedItem,
      user: { ...userDetails },
      amount: selectedItem.price,
      orderId: Date.now().toString(),
    };

    setOrders([...orders, newOrder]);
    setSelectedItem(null);
    setUserDetails({ name: '', phone: '', address: '' });
    alert('Order placed successfully ✅');
  };

  const renderMenuItem = ({ item }) => (
    <View style={styles.menuCard}>
      <Image source={item.image} style={styles.menuImage} />
      <Text style={styles.menuName}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={() => handleOrder(item)}>
        <Text style={styles.orderText}>Order</Text>
      </TouchableOpacity>
    </View>
  );

  const renderOrderItem = ({ item }) => (
    <View style={styles.orderCard}>
      <Image source={item.image} style={styles.orderImage} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.orderTitle}>🍔 {item.name}</Text>
        <Text>💵 Price: ${item.price}</Text>
        <Text>🧾 Amount: ${item.amount}</Text>
        <Text>👤 {item.user.name}</Text>
        <Text>📞 {item.user.phone}</Text>
        <Text>🏠 {item.user.address}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Restaurant Info */}
      <Image source={require('./im/marry.jpg')} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>Marry</Text>
      <Text style={styles.description}>Tasty sandwiches and snacks!</Text>

      {/* 🔍 Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search food..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Menu */}
      <Text style={styles.sectionTitle}>Menu</Text>
      <FlatList
        data={filteredMenu}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Order Form */}
      {selectedItem && (
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Order: {selectedItem.name} (${selectedItem.price})</Text>

          <TextInput
            style={styles.input}
            placeholder="Your Name"
            value={userDetails.name}
            onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={userDetails.phone}
            onChangeText={(text) => setUserDetails({ ...userDetails, phone: text })}
          />
          <TextInput
            style={[styles.input, { height: 70 }]}
            placeholder="Delivery Address"
            multiline
            value={userDetails.address}
            onChangeText={(text) => setUserDetails({ ...userDetails, address: text })}
          />

          <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
            <Text style={styles.confirmText}>Confirm Order</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Orders List */}
      <Text style={styles.sectionTitle}>My Orders</Text>
      {orders.length === 0 ? (
        <Text style={{ textAlign: 'center', color: '#777' }}>No orders yet.</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.orderId}
          renderItem={renderOrderItem}
          scrollEnabled={false}
          contentContainerStyle={{ padding: 10 }}
        />
      )}

      {/* See Reviews Button */}
      <TouchableOpacity style={styles.nextButton} onPress={handleSkip}>
        <Text style={styles.nextText}>⭐ See All Google Reviews →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  restaurantImage: { width: width, height: 200, resizeMode: 'cover' },
  restaurantName: { fontSize: 28, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  description: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: '#555' },

  searchContainer: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10,
    color: '#f75c09',
  },

  menuCard: {
    width: width * 0.45,
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    padding: 10,
  },
  menuImage: { width: '100%', height: 120, borderRadius: 15, marginBottom: 10, resizeMode: 'cover' },
  menuName: { fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  price: { fontSize: 14, color: '#888', marginTop: 5 },
  orderButton: {
    marginTop: 5,
    backgroundColor: '#f75c09',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  orderText: { color: '#fff', fontWeight: 'bold' },

  formContainer: { margin: 15, padding: 15, backgroundColor: '#f9f9f9', borderRadius: 15, elevation: 2 },
  formTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#f75c09' },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },

  confirmButton: { backgroundColor: '#f75c09', paddingVertical: 12, borderRadius: 25, alignItems: 'center' },
  confirmText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },

  orderCard: { backgroundColor: '#fff', padding: 12, borderRadius: 12, marginBottom: 10, elevation: 2, flexDirection: 'row' },
  orderImage: { width: 60, height: 60, borderRadius: 10 },
  orderTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#333' },

  nextButton: { marginVertical: 20, alignItems: 'center' },
  nextText: { color: '#f75c09', fontWeight: 'bold', fontSize: 16 },
});
