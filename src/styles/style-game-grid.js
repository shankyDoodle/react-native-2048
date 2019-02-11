import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  gridContainer: {
    width: 320,
    height: 100,
    borderRadius: 3,
    marginLeft: 22,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'relative'
  },
  wrappingRow: {
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
  cellWithoutImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
    color: "transparent"
  },
  cell: {
    width: 75,
    height: 75,
    borderRadius: 10
  },
  overlay:{
    width: 330,
    height: 330,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'absolute',
    left: 0,
    top: 10,
    opacity: 0.8,
    backgroundColor: '#3d2963',

    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText:{
    color: "#FFFFFF",
    opacity: 1,
    fontSize: 30,
    fontWeight: 'bold',

    width: 330,
    height: 330,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    position: 'absolute',
    left: 90,
    top: 150,

  }
});

