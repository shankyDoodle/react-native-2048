import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

let blankMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
];

import GameGrid from './src/components/GameGrid';

import AppStyles from './src/styles/style-app';
const styles = StyleSheet.create(AppStyles);

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      gridSize: 3,
      score: 0
    };

    this.handleResetButtonClicked = this.handleResetButtonClicked.bind(this);
  }

  handleResetButtonClicked() {
    console.log("fjhfkdfgdfg");
    let state = this.state;
  }

  getHeaderView() {
    return (
      <View style={styles.headerPanelContainer}>
        <Image source={require('./src/styles/images/2048-animated-edition.gif')} style={styles.headerLabelImage}/>
        <View style={styles.buttonsWrapper}>
          <TouchableHighlight style={styles.resetButton} onPress={this.handleResetButtonClicked}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableHighlight>
          <View style={styles.scoreBoardContainer}>
            <Text style={styles.scoreLabel}>Score</Text>
            <Text style={styles.scoreDynamic}>{this.state.score}</Text>
          </View>
        </View>
      </View>
    );
  }

  render() {


    let oHeaderView = this.getHeaderView();

    return (
      <View style={styles.container}>
        {oHeaderView}
        <GameGrid matrix={blankMatrix}/>
      </View>
    );
  }
}

