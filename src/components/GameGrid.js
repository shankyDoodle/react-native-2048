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
  UIManager
} from 'react-native';


import GridRow from './GridRow';

import styles from '../styles/style-game-grid';

type Props = {};
export default class GameGrid extends Component<Props> {

  constructor(props) {
    super(props);

    console.log("hii matrix is", JSON.stringify(this.props.matrix));

    this.state = {
      matrix: this.props.matrix,
      views: []
    };

    this.onSwipeUp = this.props.onSwipeUp;
    this.onSwipeDown = this.props.onSwipeDown;
    this.onSwipeLeft = this.props.onSwipeLeft;
    this.onSwipeRight = this.props.onSwipeRight;
  }

  handleResetButtonClicked() {
    let state = this.state;
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
      >
        <View style={styles.gridContainer}>
            {this.state.views}
        </View>
      </GestureRecognizer>
    );
  }
}

