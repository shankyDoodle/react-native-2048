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
      gridSize: 4,
      score: getScore(),
      matrix:initMatrix()
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
      </View>
    );
  }

  swipeOccurred(sDirection){
    let oUpdatedData = doSwipe(sDirection);
    this.setState({
      matrix: oUpdatedData.matrix,
      score: oUpdatedData.score,
      isOver: oUpdatedData.isOver
    })
  }

  render() {


    let oHeaderView = this.getHeaderView();
    let aVisualMatrix = Matrix(this.state.matrix).trans();
    return (
      <View style={styles.container}>
        {oHeaderView}
        <GameGrid
          matrix={aVisualMatrix}
          key={_.random(1000)}
          fSwipeOccurred={this.swipeOccurred}
        />
      </View>
    );
  }
}

