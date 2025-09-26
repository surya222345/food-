import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import FavScreen from '../(tabs)/FAV';
import FreeScreen from '../(tabs)/FREE';
import ChefScreen from '../(tabs)/CHEF';
import FoodScreen from '../(tabs)/explore';
import LoginScreen from '../(tabs)/LoginScreen';
import SignUpScreen from '../(tabs)/SignUpScreen';
import VerificationScreen from '../(tabs)/VerificationScreen';
import ForgotPasswordScreen from '../(tabs)/ForgotPasswordScreen';
import ProfileScreen from '../(tabs)/Profile';
import KFCScreen from '../(tabs)/kfc';
import HomeScreen from '../(tabs)/HOME';
import MarryScreen from '../(tabs)/marry';
import DominosScreen from '../(tabs)/dominos';
import KFCReviewScreen from '../(tabs)/kfcgoole';
import DominosReviewScreen from '../(tabs)/dominosgoole';
import LocationScreen from './Location';
import editProfile from './editProfile';







const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Food">
        <Stack.Screen name="Fav" component={FavScreen} />
        <Stack.Screen name="Free" component={FreeScreen} />
        <Stack.Screen name="Chef" component={ChefScreen} />
        <Stack.Screen name="Food" component={FoodScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Verification" component={VerificationScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Kfc" component={KFCScreen}/>
        <Stack.Screen name="Marry" component={MarryScreen}/>
        <Stack.Screen name="Dominos" component={DominosScreen}/>
         <Stack.Screen name="KFCReview" component={KFCReviewScreen}/>
        <Stack.Screen name="DominosReview" component={DominosReviewScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Location" component={LocationScreen}/>
        <Stack.Screen name="editProfile" component={editProfile}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
