//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import { AuthView } from './views';

// create a component
class AnkiApp extends Component {
  render() {
    if(!this.props.isLoggedIn) {
      return <AuthView />;
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
      </View>
    );
  }
}

function  select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn || store.user.hasSkippedLogin
  }
}
export default connect(select)(AnkiApp);
