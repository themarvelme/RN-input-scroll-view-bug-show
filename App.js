/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import InputScrollView from 'react-native-input-scroll-view';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state = {
    text: '',
    textareaHeight: 400,
  };

  _onContentSizeChange = ({nativeEvent:event}) => {
    this.setState({ textareaHeight: event.contentSize.height });
  };

  render() {
    const { text, textareaHeight } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <InputScrollView>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput
            style={{
              // height: textareaHeight,
              borderColor: '#ff0000',
              borderWidth: 1,
              width: 400
            }}
            value={text}
            // onChangeText={text => this.setState({ text })}
            // onContentSizeChange={this._onContentSizeChange}
            multiline
          />
      	</InputScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    borderColor: '#ff0000',
    borderWidth: 1,
    width: 300
  }
});
