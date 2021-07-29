import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/Home';
import BMI from './src/BMI';
import Calculator from './Calculator/Calculators';
const Navigator = createStackNavigator({
    Home: { screen: Home },
    Profile: { screen: BMI },
    Calculator:{screen:Calculator},
});
 App = createAppContainer(Navigator);

export default App;