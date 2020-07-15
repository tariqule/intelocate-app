import {StyleSheet, ViewStyle, TextStyle, Dimensions} from 'react-native';

export const COLOR_BORDER = '#e0e0e0';
export const MAIN_GRAY = '#8e8e8e';
export const ACTIVE_BLUE = '#6bd6f1';
export const MAIN_BLUE = '#0c4176';
export const MAIN_RED = '#ff5e5e';
export const MAIN_DARK_ORANGE = '#f5a623';
export const BLACK = '#000';

export const font_xs = 15;
export const font_sm = 20;
export const font_sm_md = 22;
export const font_md = 25;

export const TEST_BORDER = 0;

export const deviceheight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export default StyleSheet.create({
  defaultBackground: {
    flex: 1,
    backgroundColor: MAIN_BLUE,
  },
});

const formRow: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  //   marginHorizontal: 8,
};

const formCellHalf: ViewStyle = {
  flexShrink: 0,
  flexGrow: 1,
  flexBasis: '40%',
  width: '40%',
  paddingVertical: 8,
  marginHorizontal: 8,
};

const formCellFull: ViewStyle = {
  flexShrink: 0,
  flexGrow: 1,
  flexBasis: '70%',
  width: '100%',
  paddingVertical: 8,
  marginHorizontal: 8,
};

const formFieldEdit: ViewStyle = {
  borderBottomWidth: 1,
  borderBottomColor: ACTIVE_BLUE,
};

const formFieldDisabled: ViewStyle = {
  borderBottomWidth: 0,
};

const formFieldView: ViewStyle = {
  paddingVertical: 4,
};

const formControls: ViewStyle = {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  //   marginHorizontal: 8,
  //   marginVertical: 8,
  //   justifyContent: 'flex-start',
};

const button: ViewStyle = {
  height: 36,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
  marginHorizontal: 8,
  paddingHorizontal: 16,
  minWidth: 66,
  borderRadius: 2,
};

const buttonMain: ViewStyle = {
  height: 36,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: ACTIVE_BLUE,
  marginHorizontal: 8,
  paddingHorizontal: 16,
  minWidth: 200,
  maxWidth: 300,
  width: '100%',
  borderRadius: 2,
};

const buttonSecond: ViewStyle = {
  height: 36,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ffffff',
  marginHorizontal: 8,
  paddingHorizontal: 16,
  minWidth: 66,
  borderRadius: 2,
};

const buttonError: ViewStyle = {
  backgroundColor: '#ff5e5e',
  flexGrow: 0,
  flexShrink: 1,
  paddingVertical: 8,
  height: 'auto',
  width: 165,
};

const buttonCircle: ViewStyle = {
  backgroundColor: '#ffffff',
  borderColor: ACTIVE_BLUE,
  borderWidth: 1,
  borderRadius: 50,
  flexGrow: 0,
  flexShrink: 0,
  padding: 8,
  height: 40,
  width: 40,
  justifyContent: 'center',
  alignContent: 'center',
};

export const FormStyles = {
  formRow: formRow,
  formCellHalf: formCellHalf,
  formCellFull: formCellFull,
  formFieldEdit: formFieldEdit,
  formFieldDisabled: formFieldDisabled,
  formFieldView: formFieldView,
  formControls: formControls,
  button: button,
  buttonMain: buttonMain,
  buttonSecond: buttonSecond,
  buttonError: buttonError,
  buttonCircle: buttonCircle,
};

export function viewTextField(disabled: boolean | undefined): ViewStyle {
  return disabled ? {} : {...FormStyles.formFieldEdit};
}

export const BlocksStyles: {[key: string]: ViewStyle} = {
  modalViewContent: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 5,
    marginHorizontal: '10%',
  },
  modalViewTitle: {
    marginBottom: 24,
  },
  modalViewButton: {
    marginHorizontal: 0,
    marginTop: 10,
  },
};

const formLabel: TextStyle = {
  fontSize: 15,
  color: '#000000',
};

const buttonText: TextStyle = {
  fontSize: 14,
  color: MAIN_GRAY,
};

const buttonMainText: TextStyle = {
  fontSize: 14,
  color: '#ffffff',
};

const buttonSecondText: TextStyle = {
  fontSize: 14,
  color: MAIN_GRAY,
};

const buttonErrorText: TextStyle = {
  color: '#fff',
  textAlign: 'center',
};

const modalViewTitle: TextStyle = {
  fontSize: 16,
  color: '#000000',
  textAlign: 'center',
};

export const FormTextStyles = {
  formLabel: formLabel,
  button: buttonText,
  buttonMain: buttonMainText,
  buttonSecond: buttonSecondText,
  modalViewTitle: modalViewTitle,
  buttonErrorText: buttonErrorText,
};

export const FormInputStyles = StyleSheet.create({
  formInputDefault: {
    paddingHorizontal: 0,
    paddingVertical: 8,
    height: 40,
    fontSize: 15,
    width: '100%',
    color: MAIN_GRAY,
  },
});
