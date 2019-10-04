import React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import TabNavigator from './navigators/Navigator';

export default function App() {
  return (
    <MediaProvider>
      <TabNavigator></TabNavigator>
    </MediaProvider>
  );
}