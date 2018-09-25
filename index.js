// React knows how a compmonent should behave
// RN knows how to take the output from a component and render on a device

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header title={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
// The name of the app should match the name of the root folder of the project
AppRegistry.registerComponent('albums', () => App);
