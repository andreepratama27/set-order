import {ScaledSheet} from 'react-native-size-matters';
import {Colors} from 'styles';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.smoke,
  },
  list: {
    padding: 15,
    backgroundColor: Colors.light,
  },
  listWrapper: {
    width: '100%',
    justifyContent: 'space-between',
  },
  menu: {
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.background,
  },
  fullWidth: {
    width: '100%',
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  noPadding: {
    paddingBottom: 0,
  },
  modal: {},
  modalTop: {
    backgroundColor: Colors.light,
    height: '100@vs',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
});

export default styles;
