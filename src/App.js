import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import ContactFormScreen from './screens/ContactFormScreen';
import ProfileScreen from './screens/ProfileScreen';
import UserSignupListScreen from './screens/UserSignupListScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from './theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
       initialRouteName="Home"
       activeColor={colors.primary}
       inactiveColor={colors.borderColor}
    >
      <Tab.Screen name="Home" component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}/>
      {/* <Tab.Screen name="Dashboard" component={DashboardScreen} /> */}
      <Tab.Screen name="Contact Form" component={ContactFormScreen}
       options={{
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="phone" color={color} size={26} />
        ),
      }}
      />

      <Tab.Screen name="User Signup List" component={UserSignupListScreen}
      options={{
        tabBarLabel: 'User List',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group-outline" color={color} size={26} />
        ),
      }} />
       <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={MyTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
