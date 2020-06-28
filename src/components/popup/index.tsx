import React from 'react';
import {View, Text} from 'react-native';
import {
  COLOR_BORDER,
  font_md,
  font_sm_md,
  ACTIVE_BLUE,
} from '../../config/global-styles';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import {CustomIcon} from '../customIcon';
/****************************************************************

@MODAL_COMPONENT
*****************************************************************/

interface modalProps {
  isVisible: boolean;
  title: string;
  issueNumber: string;
  onPress: () => void;
}
export const Modal_PopUp = (props: modalProps) => {
  return (
    <View style={{flex: 1}}>
      <Modal isVisible={props.isVisible}>
        <View style={{backgroundColor: 'white', padding: 50}}>
          <View style={{paddingBottom: 10, alignItems: 'center'}}>
            <Text style={{fontSize: font_md, fontFamily: 'bold'}}>
              {props.title}
            </Text>
          </View>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <CustomIcon
              nativeIcon={true}
              name="send"
              type="FontAwesome"
              nativeIconStyle={{
                color: 'white',
              }}></CustomIcon>
          </View>
          <View
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: font_sm_md, color: ACTIVE_BLUE}}>
              {props.issueNumber}
            </Text>
          </View>

          <Button
            onPress={props.onPress}
            style={{
              backgroundColor: ACTIVE_BLUE,
              alignItems: 'center',
              width: '50%',
              alignSelf: 'center',
              top: 15,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Close
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};
