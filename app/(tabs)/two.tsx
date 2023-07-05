import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  input: {
    borderColor: "#ddd",
    borderWidth: 1,
    color: "#fff",
    marginTop: "10px",
    padding: "5px"
  }
});
