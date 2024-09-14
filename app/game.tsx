import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import challenges from './data/challenges';  // Certifique-se de ter um arquivo de dados com os desafios

export default function GameScreen() {
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);

  const nextChallenge = () => {
    setCurrentChallengeIndex((prevIndex) => (prevIndex + 1) % challenges.length);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.challengeText}>{challenges[currentChallengeIndex].text}</Text>
      <Button title="Próximo Desafio" onPress={nextChallenge} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  challengeText: {
    fontSize: 18,
    marginBottom: 20,
  },
});
