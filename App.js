import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';
import _ from 'lodash';
import Matrix from 'matrix-js';


import {initMatrix, doSwipe, getScore} from "./src/init/store";

import GameGrid from './src/components/GameGrid';

import AppStyles from './src/styles/style-app';
const styles = StyleSheet.create(AppStyles);

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      score: getScore(),
      matrix:initMatrix(),
      gameResult: 0 //0: neutral, 1:win, -1:loss
    };

    this.handleResetButtonClicked = this.handleResetButtonClicked.bind(this);
    this.swipeOccurred = this.swipeOccurred.bind(this);
  }

  handleResetButtonClicked() {
    this.setState({
      matrix:initMatrix()
    })
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
        <Text style={styles.ruleText}>Add same numbers to form 2048</Text>
      </View>
    );
  }

  swipeOccurred(sDirection){
    let oUpdatedData = doSwipe(sDirection);
    this.setState({
      matrix: oUpdatedData.matrix,
      score: oUpdatedData.score,
      gameResult: oUpdatedData.isOver
    })
  }

  render() {


    let oHeaderView = this.getHeaderView();
    let aVisualMatrix = Matrix(this.state.matrix).trans();
    return (
      <View style={styles.container}>
        {oHeaderView}
        <GameGrid
          key={_.random(1000)}
          matrix={aVisualMatrix}
          gameResult={this.state.gameResult}
          fSwipeOccurred={this.swipeOccurred}
        />
      </View>
    );
  }
}

