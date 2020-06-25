/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import {
  TextInput,
  Platform,
  TextStyle,
  KeyboardType as DefaultKeyboardType,
  KeyboardTypeIOS,
} from 'react-native';

export type KeyboardType = DefaultKeyboardType | KeyboardTypeIOS;

interface Props {
  value: string;
  disabled?: boolean;
  secure?: boolean;
  placeholder?: string;
  style?: TextStyle;
  keyboardType?: KeyboardType;
  maxLength?: number;
  onChangeText?: (text: string) => void;
  onBlur?: (text: string) => void;
}

interface State {
  value: string;
}

export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const {value} = props;
    this.state = {value};
  }

  onChange = (value: string) => {
    const {onChangeText} = this.props;
    const handler = onChangeText === undefined ? () => undefined : onChangeText;
    this.setState(
      (state) => ({...state, value}),
      () => handler(value),
    );
  };

  componentWillReceiveProps(nextProps: Props) {
    if (this.state.value !== nextProps.value) {
      this.setState({value: nextProps.value});
    }
  }

  render() {
    const {
      secure,
      placeholder,
      style,
      onBlur,
      disabled,
      keyboardType,
      maxLength,
    } = this.props;
    const {value} = this.state;
    const ios = Platform.OS === 'ios';
    const defaultStyles = {
      height: ios ? 30 : 40,
      paddingTop: 0,
      paddingBottom: 0,
      fontSize: 15,
      color: '#8e8e8e',
    };
    const styles = {...defaultStyles, ...style};
    return (
      <TextInput
        underlineColorAndroid="transparent"
        secureTextEntry={secure === true}
        style={styles}
        value={value}
        editable={disabled !== true}
        onChangeText={this.onChange}
        placeholder={placeholder}
        onBlur={() => (onBlur ? onBlur(value) : undefined)}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    );
  }
}
