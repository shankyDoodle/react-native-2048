import React, {Component} from 'react';
import {
  View,
  PanResponder,
  Text
} from 'react-native';

import type {PanResponderInstance, GestureState} from 'PanResponder';

import GridRow from './GridRow';

import styles from '../styles/style-game-grid';

type Props = {
  matrix: '2D array',
  fSwipeOccurred: 'function'
};
export default class GameGrid extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
      matrix: this.props.matrix,
      views: []
    };

  }

  _handleStartShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user presses down on the circle?
    return true;
  };

  _handleMoveShouldSetPanResponder = (
    event: PressEvent,
    gestureState: GestureState,
  ): boolean => {
    // Should we become active when the user moves a touch over the circle?
    return true;
  };


  _panResponder: PanResponderInstance = PanResponder.create({
    onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
    onPanResponderRelease: this.onSwipe.bind(this),
  });

  onSwipe(evt, gestureState) {
    if(this.props.gameResult !== 0){// showWin
      return;
    }
    console.log("your direction is : ", evt, " and ", gestureState.dx, " / ", gestureState.dy);
    let sDirection = null;
    let deltaX = gestureState.dx;
    let deltaY = gestureState.dy;
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
      // horizontal movement
      sDirection = deltaX >= 0 ? "right" : "left";
    } else {
      if (Math.abs(deltaY) > 10) {
        // vertical movement
        sDirection = deltaY >= 0 ? "down" : "up";
      }

    }
    if (sDirection) {
      this.props.fSwipeOccurred(sDirection);
    }
  }

  render() {

    for (let i = 0; i < 4; i++) {
      this.state.views.push(<GridRow key={i} style={styles.wrappingRow} cells={this.state.matrix[i]}/>)
    }

    let oOverlayDom = null;
    if(this.props.gameResult !== 0){
      let sText = (this.props.gameResult === 1) ? "You've Won!!" : "Game Over!!!";
      oOverlayDom = [
        <View style={styles.overlay} key={1} />,
        <Text style={styles.overlayText} key={2}>{sText}</Text>];
    }

    return (
      <View style={styles.gridContainer} {...this._panResponder.panHandlers}>
        {this.state.views}
        {oOverlayDom}
      </View>
    );
  }
}

