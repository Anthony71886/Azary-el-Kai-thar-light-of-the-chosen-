import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Azary’el Flame: Light of the Chosen</Text>
      <Text style={styles.subtitle}>Your flame cannot be extinguished. Rise.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFF',
  },
});
