import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello React Native!</Text>
        <TouchableOpacity onPress={() => {

        }}>
          <Text style={styles.goBack}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  goBack: {
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('CookRN', () => HelloWorld);