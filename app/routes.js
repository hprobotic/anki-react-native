import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FeedView } from './views';

const FeedNavigator = StackNavigator({
  FeedView: { screen: FeedView }
})

const AppNavigator = TabNavigator({
  FeedView: {screen: FeedNavigator},
  FeedView2: {screen: FeedNavigator}
})

export {
  AppNavigator,
}