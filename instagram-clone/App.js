import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import  InstaClone  from './src/InstaClone.js';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return <InstaClone />;   
    
  }
}
