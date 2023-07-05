import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';


export default function TabOneScreen() {
  let a: number = 10;
  return (
    <View style={styles.container} lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
      <View style={styles.filter}></View>
      <Text style={{...styles.text, paddingTop: 10}}>just circle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    height: "100%"
  },
  text: {
    fontSize: 16,
  },
  filter: {
    width: 50,
    height: 50,
    backgroundColor: "#3366ff",
    borderRadius: 15,
    transform: "rotate(45deg)",
    // filter: "blur(10px)"
  }
});
