import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: '#fff', padding: 15 }}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#eee',
  },
});
