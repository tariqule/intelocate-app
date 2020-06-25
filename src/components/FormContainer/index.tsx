/* tslint:disable-next-line:no-unused-variable */
import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

export function FormContainer(props: any) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.layout}>
        <View style={styles.wrapper}>
          <View style={styles.container}>{props.children}</View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  layout: {
    backgroundColor: '#051f41',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: width * 0.9,
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 16,
    minHeight: 400,
    maxWidth: 350,
    width: '100%',
  },
});
