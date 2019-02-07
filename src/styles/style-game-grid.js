import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  gestureRecognizer:{
    // backgroundColor: 'gray',
    width: 320,
    height: 100,
    borderRadius: 3,
    marginLeft: 30,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // paddingLeft: 5
  },
  gridContainer: {
    // backgroundColor: 'gray',
    width: 320,
    height: 100,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // paddingLeft: 5
  },
  wrappingRow:{
    flex: 1,
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: 320,
    height: 70,
    backgroundColor: 'red'

  },
  gridCell: {
    width: 75,
    height: 75,
    backgroundColor: 'green',
    marginRight: 5,
    marginTop: 5,
    borderRadius: 10
  },
  cell: {
    fontWeight: 'bold',

    // justifyContent: 'center',
    // textAlign: 'center',
    // alignItems: 'center',
  },
  cellColor2: {
    backgroundColor: '#eee4da',
  },
  cellColor4: {
    backgroundColor: '#ede0c8',
  },
  cellColor8: {
    backgroundColor: '#f2b179',
  },
  cellColor16: {
    backgroundColor: '#f59563',
  },
  cellColor32: {
    backgroundColor: '#f67c5f',
  },
  cellColor64: {
    backgroundColor: '#f65e3b',
  },
  cellColor128: {
    backgroundColor: '#edcf72',
  },
  cellColor256: {
    backgroundColor: '#edcc61',
  },
  cellColor512: {
    backgroundColor: '#edc850',
  },
  cellColor1024: {
    backgroundColor: '#edc53f',
  },
  cellColor2048: {
    backgroundColor: '#edc22e',
  }
});

