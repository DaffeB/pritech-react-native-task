import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello Pritech</Text>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 32,
    fontWeight: '600',
  },
});

export default App;
