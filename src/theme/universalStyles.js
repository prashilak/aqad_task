import {StyleSheet} from 'react-native';
import colors from './colors';

const universalStyles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    padding:15
  },
  containerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowSpace: {
    justifyContent: 'space-between',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
  },
  centerAll: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerOne: {
    justifyContent: 'center',
  },
  centerTwo: {
    alignItems: 'center',
  },
  itemsEnd: {
    alignItems: 'flex-end',
  },
  width100: {
    width: '100%',
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: colors.textGrey,
  },
  mv10: {
    marginVertical: 10,
  },
  mh15: {
    marginHorizontal: 15,
  },
  mh10: {
    marginHorizontal: 10,
  },
  textInput: {
    width: '90%',
    height: 45,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  titleText:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textTransform:'capitalize'
  }
});
export default universalStyles;
