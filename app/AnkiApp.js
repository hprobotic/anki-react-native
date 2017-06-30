//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar} from 'react-native';
import { connect } from 'react-redux'

// create a component
class AnkiApp extends Component {
  render() {
    console.log('go here');
    if(!this.props.isLoggedIn) {
      return <LoginScreen />;
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
