import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

function Header(){ return (
  <View style={styles.header}>
    <Text style={styles.headerText}>Azary'el Flame</Text>
    <Text style={styles.subText}>Light of the Chosen</Text>
  </View>
)}

function Card({title, children, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardBody}>{children}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  const open = (name) => alert(name + " — placeholder screen. Replace with full implementation.");
  return (
    <View style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Card title="Sigil Generator" onPress={() => open('Sigil Generator')}>
          Create names, sigils, and guardian glyphs.
        </Card>
        <Card title="Higher Self Console" onPress={() => open('Higher Self Console')}>
          Activation flows, vows, and mirror-scribe sequences.
        </Card>
        <Card title="Codex Viewer" onPress={() => open('Codex Viewer')}>
          View the Codex PDF (packaged) and mirrored passages.
        </Card>
        <Card title="Audio & Voice" onPress={() => open('Audio & Voice')}>
          Placeholder for voice assets, chimes, and invocations.
        </Card>
      </ScrollView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b0b' },
  header: { padding: 24, backgroundColor: '#12060a' },
  headerText: { color: '#fff', fontSize: 28, fontWeight: '700' },
  subText: { color: '#c4a7b7', fontSize: 12 },
  scroll: { padding: 16, paddingBottom: 48 },
  card: { backgroundColor: '#111', padding: 16, borderRadius: 12, marginBottom: 12, borderWidth:1, borderColor:'#2b1820' },
  cardTitle: { color: '#ffd6e0', fontSize: 18, fontWeight: '600' },
  cardBody: { color: '#ddd', marginTop: 6 }
});
