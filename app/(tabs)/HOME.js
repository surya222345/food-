import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

// Food data
const burgersData = [
  { id: '1', name: 'Cheese Burger', image: require('./im/b1.jpg'), price: '$5' },
  { id: '2', name: 'Hamburger', image: require('./im/hamburger.jpg'), price: '$6' },
  { id: '3', name: 'Turkey Burger', image: require('./im/turkeyburger.jpg'), price: '$7' },
  { id: '4', name: 'Lamb Burger', image: require('./im/lambburger.jpg'), price: '$8' },
  { id: '5', name: 'Veggie Burger', image: require('./im/veggieburger.jpg'), price: '$4' },
];

const pizzasData = [
  { id: '1', name: 'Neapolitan Pizza', image: require('./im/neapolitanpizza.jpg'), price: '$12' },
  { id: '2', name: 'New York Pizza', image: require('./im/newyarkpizza.jpg'), price: '$14' },
  { id: '3', name: 'Chicago Pizza', image: require('./im/chicagopizza.jpg'), price: '$15' },
  { id: '4', name: 'Detroit Pizza', image: require('./im/detroitpizza.jpg'), price: '$13' },
  { id: '5', name: 'Sicilian Pizza', image: require('./im/sicilianpizaa.jpg'), price: '$16' },
];

const sandwichesData = [
  { id: '1', name: 'Club Sandwich', image: require('./im/clubsandwhich.jpg'), price: '$5' },
  { id: '2', name: 'Dahi Sandwich', image: require('./im/dahisandwhich.jpg'), price: '$4' },
  { id: '3', name: 'Egg Sandwich', image: require('./im/eggsandwhich.jpg'), price: '$6' },
  { id: '4', name: 'Paneer Sandwich', image: require('./im/paneersandwhich.jpg'), price: '$5' },
  { id: '5', name: 'Bombay Sandwich', image: require('./im/bombysandwhich.jpg'), price: '$5' },
];

// Restaurants
const restaurantsData = [
  { id: '1', name: 'Dominos', screen: '/dominos', image: require('./im/dominos.jpg') },
  { id: '2', name: 'KFC', screen: '/kfc', image: require('./im/kfc.jpg') },
  { id: '3', name: 'Marry', screen: '/marry', image: require('./im/marry.jpg') },
];

export default function HomeScreen() {
  const [searchFood, setSearchFood] = useState('');
  const [searchRestaurant, setSearchRestaurant] = useState('');
  const [activeTab, setActiveTab] = useState('Burgers');
  const router = useRouter();

  const filterData = (data, searchTerm) =>
    data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()));

  let displayedData = [];
  if (activeTab === 'Burgers') displayedData = filterData(burgersData, searchFood);
  else if (activeTab === 'Pizzas') displayedData = filterData(pizzasData, searchFood);
  else if (activeTab === 'Sandwiches') displayedData = filterData(sandwichesData, searchFood);

  const filteredRestaurants = filterData(restaurantsData, searchRestaurant);

  const handleRestaurantPress = (screen) => {
    router.push(screen);
  };

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodCard}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.foodName}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  );

  const renderRestaurantItem = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => handleRestaurantPress(item.screen)}
    >
      <Image source={item.image} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Food Search */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search food..."
        value={searchFood}
        onChangeText={setSearchFood}
      />

      {/* Tabs */}
      <View style={styles.navBar}>
        {['Burgers', 'Pizzas', 'Sandwiches'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.navItem, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.navText, activeTab === tab && styles.activeText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Food List */}
      <FlatList
        data={displayedData}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Restaurant Search */}
      <TextInput
        style={[styles.searchBar, { marginTop: 20 }]}
        placeholder="Search restaurants..."
        value={searchRestaurant}
        onChangeText={setSearchRestaurant}
      />

      {/* Restaurants */}
      <Text style={styles.sectionTitle}>Restaurants</Text>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={renderRestaurantItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/HOME')} style={styles.iconButton}>
          <Ionicons name="home" size={28} color="#f75c09" />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Location')} style={styles.iconButton}>
          <Ionicons name="location" size={28} color="#f75c09" />
          <Text style={styles.iconText}>Location</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/Profile')} style={styles.iconButton}>
          <Ionicons name="information-circle" size={28} color="#f75c09" />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: '#fff' },

  searchBar: {
    backgroundColor: '#f0f0f0',
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },

  navBar: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10 },
  navItem: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 20 },
  navText: { fontWeight: 'bold', color: '#555' },
  activeTab: { backgroundColor: '#f75c09' },
  activeText: { color: '#fff' },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
    marginVertical: 10,
    color: '#f75c09',
  },

  foodCard: {
    width: width * 0.4,
    marginRight: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
  },
  image: { width: '100%', height: 120, borderRadius: 15, marginBottom: 10, resizeMode: 'cover' },
  foodName: { fontWeight: 'bold', fontSize: 16, textAlign: 'center' },
  price: { fontSize: 14, color: '#888', marginTop: 5 },

  restaurantCard: { width: width * 0.5, marginRight: 15, alignItems: 'center' },
  restaurantImage: { width: '100%', height: 120, borderRadius: 15, resizeMode: 'cover' },
  restaurantName: { fontWeight: 'bold', fontSize: 16, marginVertical: 5 },

  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconButton: { alignItems: 'center' },
  iconText: { fontSize: 12, color: '#f75c09', marginTop: 3 },
});
