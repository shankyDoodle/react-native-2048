import React, {Component} from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  LayoutAnimation,
  Platform,
  UIManager,
  FlatList
} from 'react-native';
import _ from 'lodash';


import GridRow from './GridRow';

import styles from '../styles/style-game-grid';

type Props = {
  matrix: '2D array',
  fSwipeOccurred: 'function'
};
export default class GameGrid extends Component<Props> {

  constructor(props) {
    super(props);

    console.log("hii matrix is", JSON.stringify(this.props.matrix));

    this.state = {
      matrix: this.props.matrix,
      views: []
    };

    this.onSwipeUp = this.onSwipeUp.bind(this);
    this.onSwipeDown = this.onSwipeDown.bind(this);
    this.onSwipeLeft = this.onSwipeLeft.bind(this);
    this.onSwipeRight = this.onSwipeRight.bind(this);
  }

  onSwipeUp() {
    this.props.fSwipeOccurred("up");
  }

  onSwipeDown() {
    this.props.fSwipeOccurred("down");
  }

  onSwipeLeft() {
    this.props.fSwipeOccurred("left");
  }

  onSwipeRight() {
    this.props.fSwipeOccurred("right");
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 60
    };

    for (let i = 0; i < 4; i++) {
      this.state.views.push(<GridRow key={i} style={styles.wrappingRow} cells={this.state.matrix[i]}/>)
    }

    return (
      <GestureRecognizer
        onSwipeUp={(gestureState) => this.onSwipeUp(gestureState)}
        onSwipeDown={(gestureState) => this.onSwipeDown(gestureState)}
        onSwipeLeft={(gestureState) => this.onSwipeLeft(gestureState)}
        onSwipeRight={(gestureState) => this.onSwipeRight(gestureState)}
        config={config}
        style={styles.gestureRecognizer}
      >
        <View style={styles.gridContainer}>
            {this.state.views}
        </View>
      </GestureRecognizer>
    );
  }
}

