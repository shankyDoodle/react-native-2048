import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import styleSheets from '../styles/style-game-grid';


export default class GridRow extends Component<Props> {
  constructor(props) {
    super(props);

    this.cells = this.props.cells;
  }

  componentWillUpdate(nextProps) {
    this.cells = nextProps.cells;
  }

  getImageView(cell) {
    const cellColor = [styleSheets.gridCell];

    switch (cell) {
      case 2:
        return <Image source={require('../styles/images/2.gif')} style={styleSheets.cell}/>;
        break;
      case 4:
        return <Image source={require('../styles/images/4.gif')} style={styleSheets.cell}/>;
        break;
      case 8:
        return <Image source={require('../styles/images/8.gif')} style={styleSheets.cell}/>;
        break;
      case 16:
        return <Image source={require('../styles/images/16.gif')} style={styleSheets.cell}/>;
        break;
      case 32:
        return <Image source={require('../styles/images/32.gif')} style={styleSheets.cell}/>;
        break;
      case 64:
        return <Image source={require('../styles/images/64.gif')} style={styleSheets.cell}/>;
        break;
      case 128:
        return <Image source={require('../styles/images/128.gif')} style={styleSheets.cell}/>;
        break;
      case 256:
        return <Image source={require('../styles/images/256.gif')} style={styleSheets.cell}/>;
        break;
      case 512:
        return <Image source={require('../styles/images/512.gif')} style={styleSheets.cell}/>;
        break;
      case 1024:
        return <Image source={require('../styles/images/1024.gif')} style={styleSheets.cell}/>;
        break;
      case 2048:
        return <Image source={require('../styles/images/2048.gif')} style={styleSheets.cell}/>;
        break;
      default:
        break;
    }

    return cellColor;
  }


  render() {
    let _this = this;
    return (
      <View style={styleSheets.gridRow}>
        {
          this.cells.map((cell, i) => {
            return (
              <View key={i} style={styleSheets.gridCell}>
                {cell === 0 ? <Text style={styleSheets.cellWithoutImage}>{cell}</Text> :
                  _this.getImageView(cell)}
              </View>)
          })
        }
      </View>
    );
  }
}
