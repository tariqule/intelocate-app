import React from 'react';
import {Text, View} from 'react-native';
import globalStyles, {FormStyles} from '../../../config/global-styles';
import {TextField} from '../../../components/text-field';
import {ButtonMain} from '../../../components/button/main';
export default () => {
  return (
    <View style={globalStyles.defaultBackground}>
      <View>
        <View style={FormStyles.formRow}>
          <View style={FormStyles.formCellFull}>
            <TextField
              title={'User Name'}
              value={'username'}
              onChangeText={this.handleUserNameChange}
              onBlur={() => updateLogin(this.state.username)}
            />
          </View>
          <View style={FormStyles.formCellFull}>
            <TextField
              title={'Password'}
              value={'password'}
              onChangeText={this.handlePasswordChange}
              secure={true}
            />
          </View>
        </View>
        <View style={FormStyles.formControls}>
          <ButtonMain
            title={'Sign In'}
            // disabled={isSubmitEnabled === false}
            onPress={this.handleSubmit}
          />
        </View>
      </View>
    </View>
  );
};
