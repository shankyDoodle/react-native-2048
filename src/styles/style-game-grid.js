import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  gestureRecognizer:{
    width: 320,
    height: 100,
    borderRadius: 3,
    marginLeft: 22,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  gridContainer: {
    width: 320,
    height: 100,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  wrappingRow:{
    flex: 1,
    flexDirection: 'row',
    width: 320,
    height: 70,
    backgroundColor: 'red'

  },
  gridCell: {
    width: 75,
    height: 75,
    backgroundColor: '#3d2963',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10
  },
  cell: {
    width: 75,
    height: 75,
    borderRadius: 10,
    color: "transparent"
  }
});

