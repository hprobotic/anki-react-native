import React from 'react';
import { View, StatusBar } from 'react-native';
import { AppNavigator } from '../routes';
import { connect } from 'react-redux';

const App = () => (
  <View>
    <StatusBar barStyle="dark-content" />
    <AppNavigator />
  </View>
)

export default connect()(App);