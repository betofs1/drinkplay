import { Link } from 'expo-router';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Adicionando a imagem do logo */}
      <Image 
        source={require('../app/images/logo.png')} // Caminho da imagem local
        style={styles.logo} 
      />
      
      <Text style={styles.title}>DRINKPLAY</Text>
      
      {/* Botão para iniciar o jogo */}
      <TouchableOpacity style={[styles.button, styles.startButton]} onPress={() => {}}>
        <Link href="/game" style={styles.buttonText}>
          INICIAR
        </Link>
      </TouchableOpacity>
      
      {/* Botão para as configurações (Outros) */}
      <TouchableOpacity style={[styles.button, styles.settingsButton]} onPress={() => {}}>
        <Link href="/settings" style={styles.buttonText}>
          OUTROS
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0c9af', // Fundo lilás claro
  },
  logo: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem
    marginBottom: 10, // Espaço entre a imagem e o título
    padding:100,
  },
  title: {
    fontSize: 48, // Tamanho grande para o título
    fontWeight: 'bold',
    marginBottom: 80, // Espaço grande abaixo do título
    color: '#333',
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 50, // Tornando os botões completamente redondos
    marginVertical: 15, // Espaço entre os botões
    width: 250, // Largura fixa para os botões
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: '#32CD32', // Cor verde para o botão de Início
  },
  settingsButton: {
    backgroundColor: '#FF6347', // Cor vermelho claro para o botão de Configurações
  },
  buttonText: {
    fontSize: 20,
    color: '#fff', // Cor branca para o texto dos botões
    fontWeight: '600',
  },
});
