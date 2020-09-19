import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function Header() {
  return (
    <Text style={styles.header}>Pomodoro Timer by Fer Olivero!</Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
  }
});
