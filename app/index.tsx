import { Image, StyleSheet, View, Text } from 'react-native';


export default function HomeScreen() {
  return (
  <View style={styles.container}>
      <Text>
        Hello WO
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
