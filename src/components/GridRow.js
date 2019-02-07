import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import styleSheets from '../styles/style-game-grid';


export default class GridRow extends Component<Props> {
  constructor(props) {
    super(props);

    this.cells = this.props.cells;
  }

  /*shouldComponentUpdate(nextProps) {
    if (this.props.cells !== nextProps.cells) {
      return true;
    }

    return false;
  }*/

  componentWillUpdate(nextProps) {
    this.cells = nextProps.cells;
  }

  renderCellColorStyle(cell) {
    const cellColor = [styleSheets.gridCell];

    switch (cell) {
      case 2:
        cellColor.push(styleSheets.cellColor2);
        break;
      case 4:
        cellColor.push(styleSheets.cellColor4);
        break;
      case 8:
        cellColor.push(styleSheets.cellColor8);
        break;
      case 16:
        cellColor.push(styleSheets.cellColor16);
        break;
      case 32:
        cellColor.push(styleSheets.cellColor32);
        break;
      case 64:
        cellColor.push(styleSheets.cellColor64);
        break;
      case 128:
        cellColor.push(styleSheets.cellColor128);
        break;
      case 256:
        cellColor.push(styleSheets.cellColor256);
        break;
      case 512:
        cellColor.push(styleSheets.cellColor512);
        break;
      case 1024:
        cellColor.push(styleSheets.cellColor1024);
        break;
      case 2048:
        cellColor.push(styleSheets.cellColor2048);
        break;
      default:
        break;
    }

    return cellColor;
  }


  render() {
    return (
      <View style={styleSheets.gridRow}>
        {
          this.cells.map((cell, i) => {
            return (
              <View key={i} style={this.renderCellColorStyle(cell)}>
                <Text>{cell}</Text>
              </View>)
          })
        }
      </View>
    );
  }
}
